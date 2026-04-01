"""
Haseki Patoloji - Supabase Veri Aktarım Scripti
mockData'daki tüm etkinlikleri Supabase'e yükler.
"""
import json
import requests

SUPABASE_URL = "https://xcrjvgslbfvrgnesrups.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhjcmp2Z3NsYmZ2cmduZXNydXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNzQyMTcsImV4cCI6MjA4OTk1MDIxN30.oLhipdNmbJg8-G4o1_OU7vcybqLmyNrn2c0FUh0JzNw"

HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

# Tüm etkinlik verisi (app.js'den alındı)
events = [
    {"date": "2025-10-01", "date_string": "1 EKİM 2025 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. BÜŞRA YAVAN", "ASS. DR. İREM KURT"], "topics": ["MAKALE", "OLGU", "GENEL PATOLOJİ"]},
    {"date": "2025-10-02", "date_string": "2 EKİM 2025 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. FURKAN ÖZOĞLU"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2025-10-08", "date_string": "8 EKİM 2025 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. AYŞENUR ÖZCAN", "ASS. DR. TUĞBA KARA"], "topics": ["MAKALE", "OLGU", "GENEL PATOLOJİ"]},
    {"date": "2025-10-09", "date_string": "9 EKİM 2025 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. ZEYNEP ASGEROVA"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2025-10-15", "date_string": "15 EKİM 2025 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. SİNEM KİLİM", "ASS. DR. TAYYIBE DEMİRDELEN"], "topics": ["MAKALE", "OLGU", "GENEL PATOLOJİ"]},
    {"date": "2025-10-16", "date_string": "16 EKİM 2025 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. NAGİHAN CEZAYİRLİ"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2025-10-22", "date_string": "22 EKİM 2025 | ÇARŞAMBA", "time": "08:45", "speakers": ["DOÇ. DR. GÜLAY AKALIN", "ASS. DR. İREM KURT", "ASS. DR. ÖZKAN DEMİR"], "topics": ["MAKALE", "OLGU", "JİNEKOPATOLOJİ"]},
    {"date": "2025-10-23", "date_string": "23 EKİM 2025 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. ERAY TUNALI", "ASS. DR. ZEYNEP ASGEROVA"], "topics": ["MAKROSKOPİ", "GENEL PATOLOJİ"]},
    {"date": "2025-10-29", "date_string": "29 EKİM 2025 | ÇARŞAMBA", "time": "08:45", "speakers": ["SEMİNER"], "topics": ["23 EKİM CUMHURİYET BAYAMI RESMİ TATİL"]},
    {"date": "2025-10-30", "date_string": "30 EKİM 2025 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. ESMA SARIOĞLU"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2025-11-05", "date_string": "5 KASIM 2025 | ÇARŞAMBA", "time": "08:45", "speakers": ["DOÇ. DR. ADEM AZ", "ASS. DR. HAMİDE SEVDE BAŞ", "ASS. DR. SİNEM KİLİM"], "topics": ["SEMİNER", "MAKALE", "OLGU"]},
    {"date": "2025-11-06", "date_string": "6 KASIM 2025 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. TAYYIBE DEMİRDELEN"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2025-11-12", "date_string": "12 KASIM 2025 | ÇARŞAMBA", "time": "08:45", "speakers": ["DOÇ. DR. ADEM AZ", "ASS. DR. BİLGİ MAHREMİYETİ VE VERİ YÖNETİMİ"], "topics": ["SEMİNER"]},
    {"date": "2025-11-13", "date_string": "13 KASIM 2025 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. NAGİHAN CEZAYİRLİ"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2025-11-19", "date_string": "19 KASIM 2025 | ÇARŞAMBA", "time": "08:45", "speakers": ["DOÇ. DR. GÜLAY AKALIN", "ASS. DR. AYŞENUR ÖZCAN", "ASS. DR. BÜŞRA YAVAN"], "topics": ["SEMİNER", "MAKALE", "OLGU"]},
    {"date": "2025-11-20", "date_string": "20 KASIM 2025 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. FURKAN ÖZOĞLU"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2025-11-26", "date_string": "26 KASIM 2025 | ÇARŞAMBA", "time": "08:45", "speakers": ["DOÇ. DR. GÜLAY AKALIN", "ASS. DR. TUĞBA KARA", "ASS. DR. İREM KURT"], "topics": ["SEMİNER", "MAKALE", "OLGU"]},
    {"date": "2025-11-27", "date_string": "27 KASIM 2025 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. ERAY TUNALI"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2025-12-03", "date_string": "3 ARALIK 2025 | ÇARŞAMBA", "time": "08:45", "speakers": ["DOÇ. DR. GÜLAY AKALIN", "ASS. DR. ÖZKAN DEMİR", "ASS. DR. ZEYNEP ASGEROVA"], "topics": ["SEMİNER", "MAKALE", "OLGU"]},
    {"date": "2025-12-04", "date_string": "4 ARALIK 2025 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. ESMA SARIOĞLU"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2025-12-10", "date_string": "10 ARALIK 2025 | ÇARŞAMBA", "time": "08:45", "speakers": ["DOÇ. DR. GÜLAY AKALIN", "ASS. DR. SİNEM KİLİM", "ASS. DR. TAYYIBE DEMİRDELEN"], "topics": ["SEMİNER", "MAKALE", "OLGU"]},
    {"date": "2025-12-11", "date_string": "11 ARALIK 2025 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. HAMİDE SEVDE BAŞ"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2025-12-17", "date_string": "17 ARALIK 2025 | ÇARŞAMBA", "time": "08:45", "speakers": ["DOÇ. DR. GÜLAY AKALIN", "ASS. DR. NAGİHAN CEZAYİRLİ", "ASS. DR. BÜŞRA YAVAN"], "topics": ["SEMİNER", "MAKALE", "OLGU"]},
    {"date": "2025-12-18", "date_string": "18 ARALIK 2025 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. AYŞENUR ÖZCAN"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-01-07", "date_string": "7 OCAK 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. EZGİNUR SOLAR", "ASS. DR. ESMA SARIOĞLU"], "topics": ["BAŞ BOYUN PATOLOJİSİ", "MAKALE", "OLGU"]},
    {"date": "2026-01-08", "date_string": "8 OCAK 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. EZGİNUR SOLAR"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-01-14", "date_string": "14 OCAK 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. EZGİNUR SOLAR", "ASS. DR. TAYYIBE DEMİRDELEN"], "topics": ["SALİVANÖROPATOLOJİ", "MAKALE", "OLGU"]},
    {"date": "2026-01-15", "date_string": "15 OCAK 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. NAGİHAN CEZAYİRLİ"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-01-21", "date_string": "21 OCAK 2026 | ÇARŞAMBA", "time": "08:30", "speakers": ["DOÇ. DR. GÜLAY AKALIN", "ASS. DR. İREM KURT", "ASS. DR. ÖZKAN DEMİR"], "topics": ["DÖNÜŞE HASEKİ PATOLOJİ KLİNİĞİ", "MAKALE", "OLGU"]},
    {"date": "2026-01-22", "date_string": "22 OCAK 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. ERAY TUNALI", "ASS. DR. MEME PATOLOJİSİ"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-01-28", "date_string": "28 OCAK 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. EGEMEN CEREC", "DOÇ. DR. EGEMEN CEREC MAKALE YAZIMINDA TEMEL İLKELERİ"], "topics": ["SEMİNER"]},
    {"date": "2026-01-29", "date_string": "29 OCAK 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. ESMA SARIOĞLU"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-02-04", "date_string": "4 ŞUBAT 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. EZGİNUR SOLAR", "ASS. DR. ESMA SARIOĞLU"], "topics": ["BAŞ BOYUN PATOLOJİSİ", "MAKALE", "OLGU"]},
    {"date": "2026-02-05", "date_string": "5 ŞUBAT 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. EZGİNUR SOLAR"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-02-11", "date_string": "11 ŞUBAT 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. EZGİNUR SOLAR", "ASS. DR. TAYYIBE DEMİRDELEN"], "topics": ["SALİVANÖROPATOLOJİ", "MAKALE", "OLGU"]},
    {"date": "2026-02-12", "date_string": "12 ŞUBAT 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. NAGİHAN CEZAYİRLİ"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-02-18", "date_string": "18 ŞUBAT 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["DOÇ. DR. GÜLAY AKALIN", "ASS. DR. İREM KURT", "ASS. DR. ÖZKAN DEMİR"], "topics": ["DÖNÜŞE HASEKİ PATOLOJİ KLİNİĞİ", "MAKALE", "OLGU"]},
    {"date": "2026-02-19", "date_string": "19 ŞUBAT 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. ERAY TUNALI"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-02-25", "date_string": "25 ŞUBAT 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. EGEMEN CEREC"], "topics": ["SEMİNER"]},
    {"date": "2026-02-26", "date_string": "26 ŞUBAT 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. ESMA SARIOĞLU"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-03-04", "date_string": "4 MART 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. EZGİNUR SOLAR", "ASS. DR. ESMA SARIOĞLU"], "topics": ["BAŞ BOYUN PATOLOJİSİ", "MAKALE", "OLGU"]},
    {"date": "2026-03-05", "date_string": "5 MART 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. EZGİNUR SOLAR"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-03-11", "date_string": "11 MART 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. EZGİNUR SOLAR", "ASS. DR. TAYYIBE DEMİRDELEN"], "topics": ["SALİVANÖROPATOLOJİ", "MAKALE", "OLGU"]},
    {"date": "2026-03-12", "date_string": "12 MART 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. NAGİHAN CEZAYİRLİ"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-03-18", "date_string": "18 MART 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["DOÇ. DR. GÜLAY AKALIN", "ASS. DR. İREM KURT", "ASS. DR. ÖZKAN DEMİR"], "topics": ["DÖNÜŞE HASEKİ PATOLOJİ KLİNİĞİ", "MAKALE", "OLGU"]},
    {"date": "2026-03-19", "date_string": "19 MART 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. ERAY TUNALI", "ASS. DR. MEME PATOLOJİSİ"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-04-01", "date_string": "1 NİSAN 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. ESMA SARIOĞLU"], "topics": ["YUMUŞAK DOKU PATOLOJİSİ OLGU"]},
    {"date": "2026-04-02", "date_string": "2 NİSAN 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. İREM KURT", "ÖZKAN DEMİR"], "topics": ["GENEL PATOLOJİ", "MAKALE"]},
    {"date": "2026-04-08", "date_string": "8 NİSAN 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. BÜŞRA YAVAN", "ASS. DR. AYŞENUR ÖZCAN"], "topics": ["MAKALE", "OLGU"]},
    {"date": "2026-04-09", "date_string": "9 NİSAN 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. TUĞBA KARA"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-04-15", "date_string": "15 NİSAN 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. SİNEM KİLİM", "ASS. DR. HAMİDE SEVDE BAŞ"], "topics": ["MAKALE", "OLGU"]},
    {"date": "2026-04-16", "date_string": "16 NİSAN 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. FURKAN ÖZOĞLU"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-04-22", "date_string": "22 NİSAN 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. ZEYNEP ASGEROVA", "ASS. DR. NAGİHAN CEZAYİRLİ"], "topics": ["MAKALE", "OLGU"]},
    {"date": "2026-04-23", "date_string": "23 NİSAN 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. ERAY TUNALI"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-04-29", "date_string": "29 NİSAN 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. ÖZKAN DEMİR", "ASS. DR. ESMA SARIOĞLU"], "topics": ["MAKALE", "OLGU"]},
    {"date": "2026-04-30", "date_string": "30 NİSAN 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. İREM KURT"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-05-06", "date_string": "6 MAYIS 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. TAYYIBE DEMİRDELEN", "ASS. DR. BÜŞRA YAVAN"], "topics": ["MAKALE", "OLGU"]},
    {"date": "2026-05-07", "date_string": "7 MAYIS 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. AYŞENUR ÖZCAN"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-05-13", "date_string": "13 MAYIS 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. TUĞBA KARA", "ASS. DR. SİNEM KİLİM"], "topics": ["MAKALE", "OLGU"]},
    {"date": "2026-05-14", "date_string": "14 MAYIS 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. HAMİDE SEVDE BAŞ"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-05-20", "date_string": "20 MAYIS 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. FURKAN ÖZOĞLU", "ASS. DR. ZEYNEP ASGEROVA"], "topics": ["MAKALE", "OLGU"]},
    {"date": "2026-05-21", "date_string": "21 MAYIS 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. NAGİHAN CEZAYİRLİ"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-05-27", "date_string": "27 MAYIS 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. ERAY TUNALI", "ASS. DR. ÖZKAN DEMİR"], "topics": ["MAKALE", "OLGU"]},
    {"date": "2026-05-28", "date_string": "28 MAYIS 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. ESMA SARIOĞLU"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-06-03", "date_string": "3 HAZİRAN 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. İREM KURT", "ASS. DR. TAYYIBE DEMİRDELEN"], "topics": ["MAKALE", "OLGU"]},
    {"date": "2026-06-04", "date_string": "4 HAZİRAN 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. BÜŞRA YAVAN"], "topics": ["GENEL PATOLOJİ"]},
    {"date": "2026-06-10", "date_string": "10 HAZİRAN 2026 | ÇARŞAMBA", "time": "08:45", "speakers": ["ASS. DR. ÖZKAN DEMİR", "ASS. DR. SİNEM KİLİM"], "topics": ["GİS PATOLOJİSİ", "MAKALE", "OLGU"]},
    {"date": "2026-06-11", "date_string": "11 HAZİRAN 2026 | PERŞEMBE", "time": "11:00", "speakers": ["ASS. DR. FURKAN ÖZOĞLU"], "topics": ["GENEL PATOLOJİ"]},
]

def main():
    url = f"{SUPABASE_URL}/rest/v1/schedule_events"
    
    print(f"Toplam {len(events)} etkinlik Supabase'e aktarılıyor...")
    
    success = 0
    fail = 0
    for ev in events:
        payload = {
            "date": ev["date"],
            "date_string": ev["date_string"],
            "time": ev["time"],
            "speakers": ev["speakers"],
            "topics": ev["topics"]
        }
        r = requests.post(url, headers=HEADERS, json=payload)
        if r.status_code in (200, 201):
            success += 1
            print(f"  [OK] {ev['date_string']}")
        else:
            fail += 1
            print(f"  [HATA] {ev['date_string']} --> {r.status_code}: {r.text}")
    
    print(f"\n{'='*50}")
    print(f"Basarili: {success} | Hatali: {fail}")
    if fail == 0:
        print("Tum veriler Supabase'e aktarildi!")
    else:
        print("Bazi kayitlar aktarilamadi. Tablo olusturuldu mu kontrol edin.")

if __name__ == "__main__":
    main()
