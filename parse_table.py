import zipfile
import xml.etree.ElementTree as ET
import json
import datetime
import re

def parse_docx_table(file_path):
    doc = zipfile.ZipFile(file_path)
    xml_content = doc.read('word/document.xml')
    doc.close()
    
    tree = ET.XML(xml_content)
    WORD_NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
    TBL = WORD_NAMESPACE + 'tbl'
    TR = WORD_NAMESPACE + 'tr'
    TC = WORD_NAMESPACE + 'tc'
    P = WORD_NAMESPACE + 'p'
    T = WORD_NAMESPACE + 't'
    
    events = []
    months = ["", "OCAK", "ŞUBAT", "MART", "NİSAN", "MAYIS", "HAZİRAN", "TEMMUZ", "AĞUSTOS", "EYLÜL", "EKİM", "KASIM", "ARALIK"]
    days = ["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"]
    
    for tbl in tree.iter(TBL):
        for tr in tbl.iter(TR):
            row_data = []
            for tc in tr.iter(TC):
                cell_texts = []
                for p in tc.iter(P):
                    texts = [node.text for node in p.iter(T) if node.text]
                    if texts:
                        cell_texts.append(' '.join(texts).strip())
                cell_text = '\n'.join([t for t in cell_texts if t and t != '-']).strip()
                row_data.append(cell_text)
            
            if len(row_data) >= 1:
                date_str = row_data[0].strip()
                if len(date_str) == 10 and date_str[2] == '.' and date_str[5] == '.':
                    try:
                        d, m, y = map(int, date_str.split('.'))
                        dt = datetime.date(y, m, d)
                        date_formatted = f"{d} {months[m]} {y} | {days[dt.isoweekday()%7]}"
                        
                        speakers = []
                        topics = []
                        
                        # Process each column sequentially based on the pattern
                        # Col 1: Seminer, Col 2: Makale, Col 3: Olgu, Col 4: Genel Patoloji, Col 5: Makroskopi
                        col_labels = ["", "SEMİNER", "MAKALE", "OLGU", "GENEL PATOLOJİ", "MAKROSKOPİ"]
                        
                        for i in range(1, len(row_data)):
                            cell_val = row_data[i]
                            if cell_val:
                                # Separate topics and speakers
                                # Often the cell has "ASS. DR. NAME \n TOPIC"
                                lines = cell_val.split('\n')
                                for line in lines:
                                    line_clean = line.strip()
                                    if line_clean:
                                        if 'DR.' in line_clean:
                                            speakers.append(line_clean)
                                        else:
                                            topics.append(line_clean)
                                
                                if i < len(col_labels) and col_labels[i]:
                                    topics.append(col_labels[i])
                        
                        if speakers or topics:
                            time_str = "08:45" if "ÇARŞAMBA" in date_formatted else "11:00"
                            if not speakers and not topics:
                                continue
                                
                            events.append({
                                "id": len(events) + 1,
                                "date": f"{y}-{m:02d}-{d:02d}",
                                "dateString": date_formatted,
                                "time": time_str,
                                "speakers": list(set(speakers)),
                                "topics": list(set(topics))
                            })
                    except Exception as e:
                        pass
    return events

try:
    data = parse_docx_table(r"C:\Users\ozkan\Desktop\GÜNCEL PROGRAM.docx")
    # Output to JS file
    js_content = f"const mockData = {json.dumps(data, ensure_ascii=False, indent=4)};\n"
    
    with open("app.js", "r", encoding="utf-8") as f:
        old_js = f.read()
        
    # Replace the old mockData object array with our new one
    # Find the const mockData = [...]; block and replace it
    import re
    new_js = re.sub(r'const mockData = \[.*?\];', js_content, old_js, flags=re.DOTALL)
    
    with open("app.js", "w", encoding="utf-8") as f:
        f.write(new_js)
    
    print("SUCCESS")
except Exception as e:
    print(f"FAILED: {e}")
