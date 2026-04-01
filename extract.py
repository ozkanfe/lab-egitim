import zipfile
import xml.etree.ElementTree as ET
import sys

# Windows'ta UTF-8 çıkarma için standart çıktı kodlamasını güvenliğe al
sys.stdout.reconfigure(encoding='utf-8')

def extract_text_from_docx(file_path):
    try:
        doc = zipfile.ZipFile(file_path)
        xml_content = doc.read('word/document.xml')
        doc.close()
        tree = ET.XML(xml_content)
        
        WORD_NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
        PARA = WORD_NAMESPACE + 'p'
        TEXT = WORD_NAMESPACE + 't'
        
        paragraphs = []
        for paragraph in tree.iter(PARA):
            texts = [node.text for node in paragraph.iter(TEXT) if node.text]
            if texts:
                paragraphs.append(''.join(texts))
                
        return '\n'.join(paragraphs)
    except Exception as e:
        return f"Error opening or reading docx: {e}"

text = extract_text_from_docx(r"C:\Users\ozkan\Desktop\GÜNCEL PROGRAM.docx")
print(text)
