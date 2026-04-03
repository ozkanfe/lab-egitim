// Sahte veri - Word belgesindekine benzer yapı
const mockData = [
    {
        "id": 1,
        "date": "2025-10-07",
        "dateString": "7 EKİM 2025 | SALI",
        "time": "11:00",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "ECP-SUNUM"
        ]
    },
    {
        "id": 2,
        "date": "2025-10-08",
        "dateString": "8 EKİM 2025 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. EZGİNUR SOLAR (BAŞ BOYUN PATOLOJİSİ)",
            "ASS. DR. ESMA SARIOĞLU"
        ],
        "topics": [
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 3,
        "date": "2025-10-09",
        "dateString": "9 EKİM 2025 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. EZGİNUR SOLAR"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 4,
        "date": "2025-10-14",
        "dateString": "14 EKİM 2025 | SALI",
        "time": "11:00",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "ECP-SUNUM"
        ]
    },
    {
        "id": 5,
        "date": "2025-10-15",
        "dateString": "15 EKİM 2025 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. EZGİNUR SOLAR(NÖROPATOLOJİ)",
            "ASS. DR. TAYYİBE DEMİRDELEN"
        ],
        "topics": [
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 6,
        "date": "2025-10-16",
        "dateString": "16 EKİM 2025 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. NAGİHAN CEZAYİRLİ"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 7,
        "date": "2025-10-21",
        "dateString": "21 EKİM 2025 | SALI",
        "time": "11:00",
        "speakers": [
            "DOÇ. DR. GÜLAY AKALIN DÜNDEN BUGÜNE HASEKİ PATOLOJİ KLİNİĞİ"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 8,
        "date": "2025-10-22",
        "dateString": "22 EKİM 2025 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. İREM KURT",
            "ASS. DR. ÖZKAN DEMİR JİNEKOPATOLOJİ"
        ],
        "topics": [
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 9,
        "date": "2025-10-23",
        "dateString": "23 EKİM 2025 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. ERAY TUNALI (MEME PATOLOJİSİ)",
            "ASS. DR. ZEYNEP ASGEROVA"
        ],
        "topics": [
            "MAKROSKOPİ",
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 10,
        "date": "2025-10-28",
        "dateString": "28 EKİM 2025 | SALI",
        "time": "11:00",
        "speakers": [
            "DOÇ. DR. EGEMEN CEBECİ MAKALE YAZIMINDA TEMEL İLKELERİ"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 11,
        "date": "2025-10-29",
        "dateString": "29 EKİM 2025 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "29 EKİM CUMHURİYET BAYRAMI RESMİ TATİLİ"
        ]
    },
    {
        "id": 12,
        "date": "2025-10-30",
        "dateString": "30 EKİM 2025 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. ESMA SARIOĞLU"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 13,
        "date": "2025-11-04",
        "dateString": "4 KASIM 2025 | SALI",
        "time": "11:00",
        "speakers": [
            "DOÇ. DR.  ADEM  AZ-BİYOETİĞİN KAPSAMI, TARİHSEL DÖNÜŞÜMÜ"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 14,
        "date": "2025-11-05",
        "dateString": "5 KASIM 2025 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. HAMİDE SEVDE BAŞ MEME PATOLOJİSİ",
            "ASS. DR. SİNEM KİLİM"
        ],
        "topics": [
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 15,
        "date": "2025-11-06",
        "dateString": "6 KASIM 2025 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. TAYYİBE DEMİRDELEN"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 16,
        "date": "2025-11-11",
        "dateString": "11 KASIM 2025 | SALI",
        "time": "11:00",
        "speakers": [
            "DOÇ. DR.  ADEM  AZ BİLGİ MAHREMİYETİ VE VERİ YÖNETİMİ İLKELERİ"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 17,
        "date": "2025-11-12",
        "dateString": "12 KASIM 2025 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "34. ULUSAL PATOLOJİ KONGRESİ"
        ]
    },
    {
        "id": 18,
        "date": "2025-11-13",
        "dateString": "13 KASIM 2025 | PERŞEMBE",
        "time": "11:00",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "34. ULUSAL PATOLOJİ KONGRESİ"
        ]
    },
    {
        "id": 19,
        "date": "2025-11-18",
        "dateString": "18 KASIM 2025 | SALI",
        "time": "11:00",
        "speakers": [
            "PROF. DR. NUMAN ÇİM JİNEKOLOJİK MALİGNİTELERDE KLİNİKOPATOLOJİK YAKLAŞIM"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 20,
        "date": "2025-11-19",
        "dateString": "19 KASIM 2025 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. GÜLNUR KURNALI/",
            "ASS. DR. FURKAN ÖZOĞLU ( HEMATOPATOLOJİ )"
        ],
        "topics": [
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 21,
        "date": "2025-11-20",
        "dateString": "20 KASIM 2025 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. ÖZKAN  DEMİR( GİS PATOLOJİSİ)",
            "ASS. DR. HAMİDE SEVDE BAŞ/",
            "DOÇ. DR.  ADEM  AZ"
        ],
        "topics": [
            "SEMİNER",
            "MAKROSKOPİ",
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 22,
        "date": "2025-11-25",
        "dateString": "25 KASIM 2025 | SALI",
        "time": "11:00",
        "speakers": [
            "PROF. DR. KÜRŞAT YILDIZ, ÖMER FARUK DİLBAZ PATOLOJİ DERNEKLERİ FEDERASYONU"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 23,
        "date": "2025-11-26",
        "dateString": "26 KASIM 2025 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. ERAY TUNALI",
            "ASS. DR. EZGİNUR SOLAR"
        ],
        "topics": [
            "ENDOKRİN SİSTEM PATOLOJİSİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 24,
        "date": "2025-11-27",
        "dateString": "27 KASIM 2025 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. ERAY TUNALI"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 25,
        "date": "2025-11-29",
        "dateString": "29 KASIM 2025 | CUMARTESİ",
        "time": "11:00",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "ÖĞR. ÜYESİ KÜRŞAD NURİ BAYDİLİ ATÖLYE ÇALIŞMASI- PATOLOJİ BİLİMSEL ÇALIŞMALARDA  UYGULAMALI İSTATİSTİK EĞİTİMİ"
        ]
    },
    {
        "id": 26,
        "date": "2025-12-02",
        "dateString": "2 ARALIK 2025 | SALI",
        "time": "11:00",
        "speakers": [
            "DR. DUYGU KIRKIK- İNTESTİNAL MİKROBİYATA"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 27,
        "date": "2025-12-03",
        "dateString": "3 ARALIK 2025 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. NAGİHAN CEZAYİRLİ SİTOPATOLOJİ",
            "ASS. DR. ERAY TUNALI"
        ],
        "topics": [
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 28,
        "date": "2025-12-04",
        "dateString": "4 ARALIK 2025 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. GÜLNUR KURNALI"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 29,
        "date": "2025-12-09",
        "dateString": "9 ARALIK 2025 | SALI",
        "time": "11:00",
        "speakers": [
            "DOÇ. DR. GÖKÇEN ÜNVERENGİL KAS HASTALIKLARINDA PATOLOJİK TANISAL YAKLAŞIM"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 30,
        "date": "2025-12-10",
        "dateString": "10 ARALIK 2025 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. ZEYNAB ASGEROVA",
            "ASS. DR. HAMİDE SEVDE BAŞ"
        ],
        "topics": [
            "GİS PATOLOJİSİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 31,
        "date": "2025-12-11",
        "dateString": "11 ARALIK 2025 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. FURKAN ÖZOĞLU"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 32,
        "date": "2025-12-16",
        "dateString": "16 ARALIK 2025 | SALI",
        "time": "11:00",
        "speakers": [
            "DR. SAİME GÜL BARUT PLASENTAL PATOLOJİ"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 33,
        "date": "2025-12-17",
        "dateString": "17 ARALIK 2025 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. ÖZKAN DEMİR",
            "ASS.  DR.ESMA  SARIOĞLU"
        ],
        "topics": [
            "MAKALE",
            "ÜROPATOLOJİ",
            "OLGU"
        ]
    },
    {
        "id": 34,
        "date": "2025-12-18",
        "dateString": "18 ARALIK 2025 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. İREM  KURT( 141-146)",
            "ASS. DR. TAYYİBE  DEMİRDELEN( ENDOKRİN SİSTEM PATOLOJİSİ)"
        ],
        "topics": [
            "MAKROSKOPİ",
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 35,
        "date": "2025-12-23",
        "dateString": "23 ARALIK 2025 | SALI",
        "time": "11:00",
        "speakers": [
            "PROF. DR. EKREM YAVUZ-UTERUS LEİOMYOMLARI"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 36,
        "date": "2025-12-24",
        "dateString": "24 ARALIK 2025 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. ZEYNEP ASGEROVA",
            "ASS. DR. TAYY"
        ],
        "topics": [
            "AKCİĞER PATOLOJİSİ",
            "BE DEMİRDELEN",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 37,
        "date": "2025-12-25",
        "dateString": "25 ARALIK 2025 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. SİNEM  KİLİM( 147-154)"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 38,
        "date": "2025-12-30",
        "dateString": "30 ARALIK 2025 | SALI",
        "time": "11:00",
        "speakers": [
            "PROF. DR. HALİDE NUR ÜRER PRİMERİ BELİRSİZ TÜMÖRLERE PATOLOJİK YAKLAŞIM"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 39,
        "date": "2025-12-31",
        "dateString": "31 ARALIK 2025 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. GÜLNUR KURNALI",
            "ASS. DR. NAGİHAN CEZAYİRLİ"
        ],
        "topics": [
            "YUMUŞAK DOKU PATOLOJİSİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 40,
        "date": "2026-01-01",
        "dateString": "1 OCAK 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "YILBAŞI RESMİ TATİL"
        ]
    },
    {
        "id": 41,
        "date": "2026-01-06",
        "dateString": "6 OCAK 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "DR. ALİ MIZRAK SERVİKAL SİTOLOJİYE TEMEL YAKLAŞIM"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 42,
        "date": "2026-01-07",
        "dateString": "7 OCAK 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. FURKAN ÖZOĞLU"
        ],
        "topics": [
            "MAKALE",
            "DERİ PATOLOJİSİ",
            "OLGU"
        ]
    },
    {
        "id": 43,
        "date": "2026-01-08",
        "dateString": "8 OCAK 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. RUMEYSA  ŞAHİN( 154-160)"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 44,
        "date": "2026-01-13",
        "dateString": "13 OCAK 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "PROF. DR. FARUK ÖZGÜR PROSTAT KARSİNOMLU HASTALARDA TANI VE TEDAVİ YAKLAŞIMI"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 45,
        "date": "2026-01-14",
        "dateString": "14 OCAK 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. ÖZKAN DEMİR",
            "ASS. DR. ESMA SARIOĞLU"
        ],
        "topics": [
            "MAKALE",
            "BOYUN PATOLOJİSİ",
            "OLGU"
        ]
    },
    {
        "id": 46,
        "date": "2026-01-15",
        "dateString": "15 OCAK 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. ERCE BELGİN"
        ],
        "topics": [
            "GENEL PATOLOJİ (161-166)",
            "GENEL PATOLOJİ",
            "NEFROPATOLOJİYE GİRİŞ",
            "UZM.DR .CEMİLE ÖZDEMİR"
        ]
    },
    {
        "id": 47,
        "date": "2026-01-20",
        "dateString": "20 OCAK 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "PROF. DR. NUSRET ERDOĞAN PATOLOJİDE DİJİTAL DÖNÜŞÜMÜN ARTILARI EKSİLERİ"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 48,
        "date": "2026-01-21",
        "dateString": "21 OCAK 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. HAMİDE SEVDE BAŞ NÖROPATOLOJİ",
            "ASS. DR. TAYYİBE DEMİRDELEN"
        ],
        "topics": [
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 49,
        "date": "2026-01-22",
        "dateString": "22 OCAK 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. ÖZKAN DEMİR",
            "ASS. DR. ZEYNEP  ASGEROVA( PERİNATAL PATOLOJİ)"
        ],
        "topics": [
            "MAKROSKOPİ",
            "GENEL PATOLOJİ (167-173)",
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 50,
        "date": "2026-01-27",
        "dateString": "27 OCAK 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "PROF. DR. ERDOĞAN ÇETİNKAYA İNTERSTİSYEL AKCİĞER HASTALIKLARINDA TANI VE TEMEL TEDAVİ YAKLAŞIMI"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 51,
        "date": "2026-01-29",
        "dateString": "29 OCAK 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. EZGİNUR SOLAR GENEL PATOLOJİ (173-180)"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 52,
        "date": "2026-01-30",
        "dateString": "30 OCAK 2026 | CUMA",
        "time": "11:00",
        "speakers": [
            "ASS. DR. GÜLNUR KURNALI",
            "ASS. DR. FURKAN ÖZOĞLU"
        ],
        "topics": [
            "MAKALE",
            "OLGU",
            "HEMATOPATOLOJİ"
        ]
    },
    {
        "id": 53,
        "date": "2026-02-03",
        "dateString": "3 ŞUBAT 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "ASS. DR. İREM KURT",
            "ASS. DR. ERAY TUNALI"
        ],
        "topics": [
            "MEME PATOLOJİSİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 54,
        "date": "2026-02-05",
        "dateString": "5 ŞUBAT 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. NAGİHAN CEZAYİRLİ GENEL  PATOLOJİ  ( 180-187)"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 55,
        "date": "2026-02-10",
        "dateString": "10 ŞUBAT 2026 | SALI",
        "time": "11:00",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "PROF. DR SELVİNAZ ÖZKARA YÜKSEK GRADELİ B LENFOMALARDA AYIRICI TANI"
        ]
    },
    {
        "id": 56,
        "date": "2026-02-11",
        "dateString": "11 ŞUBAT 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. NAGİHAN CEZAYİRLİ",
            "ASS. DR. SİNEM KİLİM"
        ],
        "topics": [
            "JİNEKOPATOLOJİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 57,
        "date": "2026-02-12",
        "dateString": "12 ŞUBAT 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. ZEYNAB ASGAROVA GENEL PATOLOJİ (453-461)"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 58,
        "date": "2026-02-16",
        "dateString": "16 ŞUBAT 2026 | PAZARTESİ",
        "time": "11:00",
        "speakers": [
            "DR. MAHMUT AKGÜL"
        ],
        "topics": [
            "SEMİNER",
            "BÖBREK TÜMÖRLERİNDE TEMEL TANI KRİTERLERİ, AMERİKA’DA PATOLOG OLMAK"
        ]
    },
    {
        "id": 59,
        "date": "2026-02-17",
        "dateString": "17 ŞUBAT 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "ASS.DR. ERAY TUNALI"
        ],
        "topics": [
            "BAŞ-BOYUN PATOLOJİSİ",
            "OLGU"
        ]
    },
    {
        "id": 60,
        "date": "2026-02-18",
        "dateString": "18 ŞUBAT 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. ZEYNEP ASGEROVA",
            "ASS. DR. EZGİNUR SOLAR"
        ],
        "topics": [
            "ENDOKRİN SİSTEM PATOLOJİSİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 61,
        "date": "2026-02-19",
        "dateString": "19 ŞUBAT 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. NAGİHAN  CEZAYİRLİ( BAŞ BOYUN)",
            "ASS. DR. ESMA SARIOĞLU GENEL PATOLOJİ (461-466)"
        ],
        "topics": [
            "MAKROSKOPİ",
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 62,
        "date": "2026-02-23",
        "dateString": "23 ŞUBAT 2026 | PAZARTESİ",
        "time": "11:00",
        "speakers": [
            "PROF. DR. CEM LEBLEBİCİ OLGULAR EŞLİĞİNDE YÜZEYEL   MELANOSİTİK YUMUŞAK DOKU TÜMÖRLERİ"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 63,
        "date": "2026-02-24",
        "dateString": "24 ŞUBAT 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "DR. M. ÇİSEL AYDIN MOLEKÜLER"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 64,
        "date": "2026-02-25",
        "dateString": "25 ŞUBAT 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. ERAY TUNALI",
            "ASS. DR. TAYYİBE DEMİRDELEN"
        ],
        "topics": [
            "SİTOPATOLOJİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 65,
        "date": "2026-02-26",
        "dateString": "26 ŞUBAT 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. TAYYİBE DEMİRDELEN GENEL PATOLOJİ (467-473)",
            "UZM. DR. CEMİLE ÖZDEMİR"
        ],
        "topics": [
            "SEMİNER",
            "Böbrekten Protein Nasıl Kaçar? Böbrek Fizyopatolojisi-2",
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 66,
        "date": "2026-03-03",
        "dateString": "3 MART 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "PROF. DR. BANU YILMAZ ÖZGÜVEN KARACİĞER BİOPSİLERİNE TANISAL YAKLAŞIM"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 67,
        "date": "2026-03-04",
        "dateString": "4 MART 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. İREM KURT",
            "ASS. DR. HAMİDE SEVDE BAŞ"
        ],
        "topics": [
            "GİS PATOLOJİSİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 68,
        "date": "2026-03-05",
        "dateString": "5 MART 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. HAMİDE SEVDE BAŞ GENEL PATOLOJİ (473-480)"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 69,
        "date": "2026-03-10",
        "dateString": "10 MART 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "DOÇ. DR. TÜRKAN İKİZCELİ TİROİD NODÜLLERİNDE RADYOLOJİK YAKLAŞIM"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 70,
        "date": "2026-03-11",
        "dateString": "11 MART 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. ÖZKAN DEMİR",
            "ASS. DR. SİNEM KİLİM"
        ],
        "topics": [
            "MAKALE",
            "ÜROPATOLOJİ",
            "OLGU"
        ]
    },
    {
        "id": 71,
        "date": "2026-03-12",
        "dateString": "12 MART 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. ERAY TUNALI GENEL PATOLOJİ (480-483)"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 72,
        "date": "2026-03-17",
        "dateString": "17 MART 2026 | SALI",
        "time": "11:00",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "RAMAZAN BAYRAMI HAFTASI"
        ]
    },
    {
        "id": 73,
        "date": "2026-03-18",
        "dateString": "18 MART 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "RAMAZAN BAYRAMI HAFTASI"
        ]
    },
    {
        "id": 74,
        "date": "2026-03-19",
        "dateString": "19 MART 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "RAMAZAN BAYRAMI AREFESİ"
        ]
    },
    {
        "id": 75,
        "date": "2026-03-24",
        "dateString": "24 MART 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "PROF. DR. DİLEK YAVUZER GİS NÖROENDOKRİN LEZYONLARI"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 76,
        "date": "2026-03-25",
        "dateString": "25 MART 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. ZEYNEP ASGEROVA",
            "ASS. DR. EZGİNUR SOLAR"
        ],
        "topics": [
            "AKCİĞER PATOLOJİSİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 77,
        "date": "2026-03-26",
        "dateString": "26 MART 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. EZGİNUR SOLAR(JİNEKOPATOLOJİ)",
            "ASS. DR. FURKAN ÖZOĞLU GENEL PATOLOJİ"
        ],
        "topics": [
            "MAKROSKOPİ",
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 78,
        "date": "2026-03-27",
        "dateString": "27 MART 2026 | CUMA",
        "time": "11:00",
        "speakers": [
            "DR. FATİH MERT DOĞUKAN"
        ],
        "topics": [
            "SEMİNER",
            "HİPOFİZ"
        ]
    },
    {
        "id": 79,
        "date": "2026-04-01",
        "dateString": "1 NİSAN 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. ESMA SARIOĞLU",
            "ASS. DR. NAGİHAN CEZAYİRLİ"
        ],
        "topics": [
            "YUMUŞAK DOKU PATOLOJİSİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 80,
        "date": "2026-04-02",
        "dateString": "2 NİSAN 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. İREM KURT GENEL PATOLOJİ"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 81,
        "date": "2026-04-07",
        "dateString": "7 NİSAN 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "PROF. DR. FÜGEN AKER MSS DEMİYELİNİZASYON HASTALIKLARI"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 82,
        "date": "2026-04-08",
        "dateString": "8 NİSAN 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "DR. ALİ MIZRAK TÜKRÜK BEZİ LEZYONLARINDA SİTOLOJİ",
            "ASS. DR. ERAY TUNALI",
            "ASS. DR. ESMA SARIOĞLU"
        ],
        "topics": [
            "SEMİNER",
            "MAKALE",
            "DERİ PATOLOJİSİ",
            "OLGU"
        ]
    },
    {
        "id": 83,
        "date": "2026-04-09",
        "dateString": "9 NİSAN 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. SİNEM KİLİM GENEL PATOLOJİ"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 84,
        "date": "2026-04-14",
        "dateString": "14 NİSAN 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "PROF. DR. SITKI TUZLALI MEME KARSİNOMLARINDA DÜŞÜK HER 2"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 85,
        "date": "2026-04-15",
        "dateString": "15 NİSAN 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. FURKAN ÖZOĞLU",
            "ASS. DR. ÖZKAN DEMİR"
        ],
        "topics": [
            "BAŞ BOYUN PATOLOJİSİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 86,
        "date": "2026-04-16",
        "dateString": "16 NİSAN 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. RUMEYSA ŞAHİN GENEL PATOLOJİ"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 87,
        "date": "2026-04-21",
        "dateString": "21 NİSAN 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "DOÇ. DR. GÜLİSTAN GÜMRÜKÇÜ BÖBREK BİYOPSİ PATOLOJİ YAKLAŞIMI"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 88,
        "date": "2026-04-22",
        "dateString": "22 NİSAN 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. TAYYİBE DEMİRDELEN"
        ],
        "topics": [
            "MAKALE",
            "NÖROPATOLOJİ",
            "OLGU"
        ]
    },
    {
        "id": 89,
        "date": "2026-04-23",
        "dateString": "23 NİSAN 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "23 NİSAN ULUSAL EGEMENLİK VE ÇOCUK BAYRAMI RESMİ TATİL"
        ]
    },
    {
        "id": 90,
        "date": "2026-04-28",
        "dateString": "28 NİSAN 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "PROF. DR. AYDIN SAV SİNİR SİSTEMİNİN ALFABESİ"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 91,
        "date": "2026-04-29",
        "dateString": "29 NİSAN 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. İREM KURT",
            "ASS. DR. NAGİHAN CEZAYİRLİ"
        ],
        "topics": [
            "MAKALE",
            "OLGU",
            "HEMATOPATOLOJİ"
        ]
    },
    {
        "id": 92,
        "date": "2026-04-30",
        "dateString": "30 NİSAN 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. HAMİDE SEVDE BAŞ(ÜROPATOLOJİ)",
            "ASS. DR. ERCE BELGİN GENEL PATOLOJİ"
        ],
        "topics": [
            "MAKROSKOPİ",
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 93,
        "date": "2026-05-05",
        "dateString": "5 MAYIS 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "PROF. DR. SERGÜLEN DERVİŞOĞLU KEMİK TÜMÖR PATOLOJİLERİ"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 94,
        "date": "2026-05-06",
        "dateString": "6 MAYIS 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. RUMEYSA ŞAHİN",
            "ASS. DR. SİNEM KİLİM"
        ],
        "topics": [
            "MEME PATOLOJİSİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 95,
        "date": "2026-05-07",
        "dateString": "7 MAYIS 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. ÖZKAN DEMİR GENEL PATOLOJİ"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 96,
        "date": "2026-05-12",
        "dateString": "12 MAYIS 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "PROF. DR. ŞULE POTUROĞLU İNFLAMATUAR BAĞIRSAK HASTALIĞI TANI VE TAKİBİNİN TEMEL PRENSİPLERİ"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 97,
        "date": "2026-05-13",
        "dateString": "13 MAYIS 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. ERCE BELGİN",
            "ASS. DR. EZGİNUR SOLAR"
        ],
        "topics": [
            "JİNEKOPATOLOJİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 98,
        "date": "2026-05-14",
        "dateString": "14 MAYIS 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. EZGİNUR SOLAR GENEL PATOLOJİ"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 99,
        "date": "2026-05-19",
        "dateString": "19 MAYIS 2026 | SALI",
        "time": "11:00",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "19 MAYIS ATATÜRK’Ü ANMA, GENÇLİK VE SPOR BAYRAMI"
        ]
    },
    {
        "id": 100,
        "date": "2026-05-20",
        "dateString": "20 MAYIS 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. ERAY TUNALI",
            "ASS. DR. HAMİDE SEVDE BAŞ"
        ],
        "topics": [
            "ENDOKRİN SİSTEM PATOLOJİSİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 101,
        "date": "2026-05-21",
        "dateString": "21 MAYIS 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR.  NAGİHAN CEZAYİRLİ GENEL PATOLOJİ"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 102,
        "date": "2026-05-26",
        "dateString": "26 MAYIS 2026 | SALI",
        "time": "11:00",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "KURBAN BAYRAMI RESMİ TATİLİ"
        ]
    },
    {
        "id": 103,
        "date": "2026-05-27",
        "dateString": "27 MAYIS 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "KURBAN BAYRAMI RESMİ TATİLİ"
        ]
    },
    {
        "id": 104,
        "date": "2026-05-28",
        "dateString": "28 MAYIS 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [],
        "topics": [
            "SEMİNER",
            "KURBAN BAYRAMI RESMİ TATİLİ"
        ]
    },
    {
        "id": 105,
        "date": "2026-06-02",
        "dateString": "2 HAZİRAN 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "PROF. DR. HALİDE NUR ÜRER- ADLİ PATOLOJİ"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 106,
        "date": "2026-06-03",
        "dateString": "3 HAZİRAN 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. İREM KURT",
            "ASS. DR. HAMİDE SEVDE BAŞ"
        ],
        "topics": [
            "SİTOPATOLOJİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 107,
        "date": "2026-06-04",
        "dateString": "4 HAZİRAN 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. FURKAN  ÖZOĞLU( HEPATOPANKREATOBİLİER PATOLOJİ)",
            "ASS. DR. ERAY TUNALI GENEL PATOLOJİ"
        ],
        "topics": [
            "MAKROSKOPİ",
            "GENEL PATOLOJİ"
        ]
    },
    {
        "id": 108,
        "date": "2026-06-09",
        "dateString": "9 HAZİRAN 2026 | SALI",
        "time": "11:00",
        "speakers": [
            "DR. SAİME GÜL BARUT MİDE ENDOSKOPİK BİYOPSİLERİNE TEMEL YAKLAŞIM"
        ],
        "topics": [
            "SEMİNER"
        ]
    },
    {
        "id": 109,
        "date": "2026-06-10",
        "dateString": "10 HAZİRAN 2026 | ÇARŞAMBA",
        "time": "08:45",
        "speakers": [
            "ASS. DR. ÖZKAN DEMİR",
            "ASS. DR. SİNEM KİLİM"
        ],
        "topics": [
            "GİS PATOLOJİSİ",
            "MAKALE",
            "OLGU"
        ]
    },
    {
        "id": 110,
        "date": "2026-06-11",
        "dateString": "11 HAZİRAN 2026 | PERŞEMBE",
        "time": "11:00",
        "speakers": [
            "ASS. DR. FURKAN ÖZOĞLU GENEL PATOLOJİ"
        ],
        "topics": [
            "GENEL PATOLOJİ"
        ]
    }
];


// =============================================
// SUPABASE BAĞLANTISI
// =============================================
const SUPABASE_URL = 'https://xcrjvgslbfvrgnesrups.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhjcmp2Z3NsYmZ2cmduZXNydXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNzQyMTcsImV4cCI6MjA4OTk1MDIxN30.oLhipdNmbJg8-G4o1_OU7vcybqLmyNrn2c0FUh0JzNw';
// Supabase CDN v2 global adı 'supabase' olarak gelir (window.supabase.createClient)
let _sbClient = null;
try {
    if (window.supabase && window.supabase.createClient) {
        _sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    }
} catch(e) { console.warn('Supabase init failed:', e); }
const supabaseClient = _sbClient;

async function fetchDataFromSupabase() {
    if (!supabaseClient) return null;
    try {
        const { data, error } = await supabaseClient
            .from('schedule_events')
            .select('*')
            .order('date', { ascending: true });
        if (error) { console.error('Supabase fetch error:', error); return null; }
        return data.map(r => ({
            id:         r.id,
            date:       r.date,
            dateString: r.date_string || r.date,
            time:       r.time,
            category:   r.category || 'lab',
            image_url:  r.image_url,
            speakers:   Array.isArray(r.speakers) ? r.speakers : JSON.parse(r.speakers || '[]'),
            topics:     Array.isArray(r.topics)   ? r.topics   : JSON.parse(r.topics   || '[]'),
        }));
    } catch(e) { console.error('Fetch error:', e); return null; }
}

// Eksik değişkenler (önceki düzenlemede silindi)
let currentWeekOffset = 0;
let baseDate = new Date();
let isAdmin = localStorage.getItem('isAdmin') === 'true';
let activeTab = 'lab';

// appData başlangıçta mockData, Supabase'den gelince güncellenir
let appData = [...mockData];

const container = document.getElementById('scheduleContainer');
const btnPrevWeek = document.getElementById('prevWeek');
const btnNextWeek = document.getElementById('nextWeek');
const weekRangeDisplay = document.getElementById('weekRangeDisplay');

// Admin Elements
const adminLoginBtn = document.getElementById('adminLoginBtn');
const adminLogoutBtn = document.getElementById('adminLogoutBtn');
const addEventBtn = document.getElementById('addEventBtn');
const loginModal = document.getElementById('loginModal');
const editModal = document.getElementById('editModal');

function getWeekRange(dateObj, offsetWeeks) {
    const date = new Date(dateObj);
    const day = date.getDay();
    const diffToMonday = date.getDate() - day + (day === 0 ? -6 : 1);
    
    const monday = new Date(date.setDate(diffToMonday));
    monday.setDate(monday.getDate() + (offsetWeeks * 7));
    
    const sunday = new Date(monday);
    sunday.setDate(sunday.getDate() + 6); // Cuma'dan Pazar'a çekildi
    
    return { start: monday, end: sunday };
}

function populateMonthSelect() {
    const monthDropdownBtn  = document.getElementById('monthDropdownBtn');
    const monthDropdownList = document.getElementById('monthDropdownList');
    const weekDropdown      = document.getElementById('weekDropdown');
    const weekDropdownBtn   = document.getElementById('weekDropdownBtn');
    const weekDropdownList  = document.getElementById('weekDropdownList');
    if(!monthDropdownBtn) return;

    const uniqueMonths = new Set();
    appData.forEach(ev => {
        const d = new Date(ev.date);
        if (!isNaN(d.getTime())) {
            uniqueMonths.add(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`);
        }
    });
    const sortedMonths = Array.from(uniqueMonths).sort();
    const monthNames = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
    const shortMon   = ["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"];

    monthDropdownList.innerHTML = '';
    sortedMonths.forEach(mStr => {
        const [y, m] = mStr.split('-');
        const item = document.createElement('div');
        item.className = 'custom-dropdown-item';
        item.textContent = `${monthNames[parseInt(m)-1]} ${y}`;
        item.addEventListener('click', () => {
            monthDropdownList.style.display = 'none';
            monthDropdownBtn.innerHTML = `📅 ${monthNames[parseInt(m)-1]} ${y} <i class="fa-solid fa-chevron-down" style="font-size:0.7rem;"></i>`;
            buildWeekList(mStr);
        });
        monthDropdownList.appendChild(item);
    });

    monthDropdownBtn.addEventListener('click', e => {
        e.stopPropagation();
        const isOpen = monthDropdownList.style.display === 'block';
        closeAll();
        monthDropdownList.style.display = isOpen ? 'none' : 'block';
    });

    function buildWeekList(targetMonthStr) {
        weekDropdownList.innerHTML = '';
        const monthEvents = appData.filter(ev => ev.date.startsWith(targetMonthStr));
        monthEvents.sort((a,b) => new Date(a.date) - new Date(b.date));
        const seenWeeks = new Set();
        monthEvents.forEach(ev => {
            const { start, end } = getWeekRange(new Date(ev.date), 0);
            const wKey = start.toISOString().split('T')[0];
            if (!seenWeeks.has(wKey)) {
                seenWeeks.add(wKey);
                const label = `${start.getDate()} ${shortMon[start.getMonth()]} – ${end.getDate()} ${shortMon[end.getMonth()]}`;
                const item = document.createElement('div');
                item.className = 'custom-dropdown-item';
                item.textContent = label;
                item.addEventListener('click', () => {
                    baseDate = new Date(wKey);
                    currentWeekOffset = 0;
                    renderSchedule();
                    closeAll();
                    setTimeout(() => {
                        monthDropdownBtn.innerHTML = '📅 Tarih Seç <i class="fa-solid fa-chevron-down" style="font-size:0.7rem;"></i>';
                        if(weekDropdown) weekDropdown.style.display = 'none';
                    }, 300);
                });
                weekDropdownList.appendChild(item);
            }
        });
        if(weekDropdown) weekDropdown.style.display = 'block';
    }

    if(weekDropdownBtn) {
        weekDropdownBtn.addEventListener('click', e => {
            e.stopPropagation();
            const isOpen = weekDropdownList.style.display === 'block';
            closeAll();
            weekDropdownList.style.display = isOpen ? 'none' : 'block';
        });
    }

    document.addEventListener('click', closeAll);

    function closeAll() {
        if(monthDropdownList) monthDropdownList.style.display = 'none';
        if(weekDropdownList)  weekDropdownList.style.display  = 'none';
    }
}

async function init() {
    refreshAdminUI();
    
    // Supabase'den veri çekmeyi dene
    const sbData = await fetchDataFromSupabase();
    if (sbData && sbData.length > 0) {
        appData = sbData;
    }
    // Eğer Supabase boşsa veya bağlanamazsa mockData kalır

    // Güncel haftayı belirle:
    // Pazartesi-Cuma → bu haftayı göster
    // Cumartesi veya Pazar → bir sonraki haftayı göster (Cuma gecesi otomatik geçiş)
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0=Pazar, 6=Cumartesi
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        // Hafta sonu → bir sonraki Pazartesi'ye atla
        const daysUntilMonday = dayOfWeek === 0 ? 1 : 2;
        now.setDate(now.getDate() + daysUntilMonday);
    }
    baseDate = now;

    // Gece yarısı otomatik hafta geçişi için zamanlayıcı
    function scheduleAutoRefresh() {
        const n = new Date();
        const midnight = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1, 0, 0, 5); // gece 00:00:05
        const msUntilMidnight = midnight - n;
        setTimeout(() => {
            // Sayfayı yenilemek yerine sadece baseDate'i güncelle
            const today = new Date();
            const d = today.getDay();
            if (d === 0 || d === 6) {
                const skip = d === 0 ? 1 : 2;
                today.setDate(today.getDate() + skip);
            }
            baseDate = today;
            currentWeekOffset = 0;
            renderSchedule();
            scheduleAutoRefresh(); // Bir sonraki gece yarısı için tekrar planla
        }, msUntilMidnight);
    }
    scheduleAutoRefresh();

    populateMonthSelect();
    renderSchedule();
    setupEventListeners();
    setupAdminListeners();
}

function refreshAdminUI() {
    if (isAdmin) {
        if(adminLoginBtn) adminLoginBtn.style.display = 'none';
        if(adminLogoutBtn) adminLogoutBtn.style.display = 'block';
        if(addEventBtn) addEventBtn.style.display = 'block';
    } else {
        if(adminLoginBtn) adminLoginBtn.style.display = 'block';
        if(adminLogoutBtn) adminLogoutBtn.style.display = 'none';
        if(addEventBtn) addEventBtn.style.display = 'none';
    }
}

function renderSchedule() {
    if(!container) return;
    container.innerHTML = `<div class="loading-state"><div class="spinner"></div></div>`;
    
    setTimeout(() => {
        const { start, end } = getWeekRange(baseDate, currentWeekOffset);
        
        const startCheck = new Date(start); startCheck.setHours(0,0,0,0);
        const endCheck = new Date(end); endCheck.setHours(23,59,59,999);
        
        const currentWeekData = appData.filter(session => {
            const sd = new Date(session.date);
            const inWeek = sd >= startCheck && sd <= endCheck;
            const inTab = (session.category || 'lab') === activeTab;
            return inWeek && inTab;
        });

        if (currentWeekData.length === 0) {
            container.innerHTML = `<div style="text-align:center; color:var(--text-muted); width: 100%; padding: 4rem 0; font-size:1.1rem;">Bu haftaya ait eğitim kaydı bulunamadı.</div>`;
        } else {
            let html = '';
            // Sort by date and time
            currentWeekData.sort((a,b) => new Date(a.date) - new Date(b.date));
            currentWeekData.forEach(session => {
                html += generateGlassCard(session);
            });
            container.innerHTML = html;
        }
        
        updateWeekText(start, end);
    }, 150);
}

function generateGlassCard(session) {
    let adminActions = '';
    if (isAdmin) {
        adminActions = `
            <div class="admin-card-actions">
                <button class="admin-circle-btn edit" onclick="openEditModal(${session.id})" title="Düzenle"><i class="fa-solid fa-pen"></i></button>
                <button class="admin-circle-btn delete" onclick="deleteSession(${session.id})" title="Sil"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    }

    const spks = session.speakers || [];
    const tpcs = session.topics || [];
    const maxLen = Math.max(spks.length, tpcs.length);
    let contentHtml = '';

    for (let i = 0; i < maxLen; i++) {
        let blockHtml = '';
        if(spks[i]) blockHtml += `<div class="speaker-line">${spks[i]}</div>`;
        if(tpcs[i]) blockHtml += `<div class="card-topics">${tpcs[i]}</div>`;
        
        contentHtml += `<div style="width:100%; text-align:center; display:flex; flex-direction:column; gap:8px;">${blockHtml}</div>`;
        
        if (i < maxLen - 1) {
            contentHtml += `<div class="divider" style="margin: 1.5rem 0;"></div>`;
        }
    }
    
    // Eğer hiç konuşmacı veya konu yoksa ama veri varsa boş kalmasın diye fallback
    if (maxLen === 0) {
        contentHtml = `<div class="card-topics">Program Detayı Bekleniyor</div>`;
    }

    // Geçmiş toplantı kontrolü
    const now = new Date();
    const sessionDateTime = new Date(`${session.date}T${session.time}`);
    const isPast = sessionDateTime < now;
    const pastClass = isPast ? 'is-past' : '';

    let imageHtml = '';
    if (session.image_url) {
        imageHtml = `
            <div class="card-image-container" style="width:100%; height:220px; margin-bottom:1.5rem; border-radius:15px; overflow:hidden; border:1px solid var(--glass-border); background:rgba(0,0,0,0.2);">
                <img src="${session.image_url}" style="width:100%; height:100%; object-fit:cover; display:block;" 
                     alt="Toplantı Görseli" 
                     onerror="this.src='https://via.placeholder.com/400x220/0d1b2e/14f1f2?text=Görsel+Yüklenemedi'">
            </div>
        `;
    }

    return `
        <div class="glass-card ${pastClass}" data-id="${session.id}">
            ${adminActions}
            ${imageHtml}
            <div class="card-date" style="margin-bottom: 1rem;">${session.dateString || session.date}</div>
            
            <div class="card-time-pill" style="margin-bottom: 2rem;">
                <i class="fa-regular fa-clock"></i> SAAT: ${session.time}
            </div>
            
            ${contentHtml}
        </div>
    `;
}

function updateWeekText(start, end) {
    if(!weekRangeDisplay) return;
    const months = ["OCAK", "ŞUBAT", "MART", "NİSAN", "MAYIS", "HAZİRAN", "TEMMUZ", "AĞUSTOS", "EYLÜL", "EKİM", "KASIM", "ARALIK"];
    const startStr = `${start.getDate()} ${months[start.getMonth()]}`;
    const endStr = `${end.getDate()} ${months[end.getMonth()]} ${end.getFullYear()}`;
    weekRangeDisplay.textContent = `${startStr} - ${endStr}`;
}

function setupEventListeners() {
    if(btnPrevWeek) btnPrevWeek.addEventListener('click', () => {
        currentWeekOffset--;
        renderSchedule();
    });

    if(btnNextWeek) btnNextWeek.addEventListener('click', () => {
        currentWeekOffset++;
        renderSchedule();
    });

    // Tab Event Listeners
    const tabLab = document.getElementById('tabLab');
    const tabOuter = document.getElementById('tabOuter');
    
    if (tabLab && tabOuter) {
        tabLab.addEventListener('click', () => {
            activeTab = 'lab';
            tabLab.classList.add('active');
            tabOuter.classList.remove('active');
            renderSchedule();
        });
        tabOuter.addEventListener('click', () => {
            activeTab = 'outer';
            tabOuter.classList.add('active');
            tabLab.classList.remove('active');
            renderSchedule();
        });
    }
}

// === ADMIN LOGIC ===
function setupAdminListeners() {
    // Login
    if(adminLoginBtn) adminLoginBtn.addEventListener('click', () => {
        if(loginModal) loginModal.style.display = 'flex';
        const pwField = document.getElementById('adminPassword');
        if(pwField) pwField.value = '';
        const errField = document.getElementById('loginError');
        if(errField) errField.style.display = 'none';
    });
    
    const closeLgn = document.getElementById('closeLoginBtn');
    if(closeLgn) closeLgn.addEventListener('click', () => { if(loginModal) loginModal.style.display = 'none'; });
    
    const subLgn = document.getElementById('loginSubmitBtn');
    if(subLgn) subLgn.addEventListener('click', () => {
        const pw = document.getElementById('adminPassword').value;
        if(pw === '1234qwer') {
            isAdmin = true;
            localStorage.setItem('isAdmin', 'true');
            if(loginModal) loginModal.style.display = 'none';
            refreshAdminUI();
            renderSchedule();
        } else {
            document.getElementById('loginError').style.display = 'block';
        }
    });

    // Logout
    if(adminLogoutBtn) adminLogoutBtn.addEventListener('click', () => {
        isAdmin = false;
        localStorage.removeItem('isAdmin');
        refreshAdminUI();
        renderSchedule();
    });

    // Add Modal close
    const clEdit = document.getElementById('closeEditBtn');
    if(clEdit) clEdit.addEventListener('click', () => { if(editModal) editModal.style.display = 'none' });
    
    // Add Event Button
    if(addEventBtn) addEventBtn.addEventListener('click', () => {
        document.getElementById('editEventId').value = '';
        document.getElementById('modalTitle').textContent = 'Yeni Eğitim Ekle';
        document.getElementById('eventDate').value = baseDate.toISOString().split('T')[0];
        document.getElementById('eventTime').value = '08:45';
        document.getElementById('eventSpeakers').value = '';
        document.getElementById('eventTopics').value = '';
        document.getElementById('eventImageFile').value = '';
        if(editModal) editModal.style.display = 'flex';
    });

    // Save Event Button
    const saveEv = document.getElementById('saveEventBtn');
    if(saveEv) saveEv.addEventListener('click', async () => {
        const id = document.getElementById('editEventId').value;
        const dateVal = document.getElementById('eventDate').value;
        const timeVal = document.getElementById('eventTime').value;
        const speakersText = document.getElementById('eventSpeakers').value;
        const topicsText = document.getElementById('eventTopics').value;
        const categoryVal = document.getElementById('eventType').value;
        let imageUrlVal = document.getElementById('eventImageUrl').value;
        const imageFile = document.getElementById('eventImageFile').files[0];

        // Fotoğraf yükleme işlemi (eğer yeni bir dosya seçildiyse)
        if (imageFile) {
            if (supabaseClient) {
                const fileExt = imageFile.name.split('.').pop();
                const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
                const filePath = `uploads/${fileName}`;

                const { data: uploadData, error: uploadError } = await supabaseClient.storage
                    .from('event-images')
                    .upload(filePath, imageFile);

                if (uploadError) {
                    console.error('Fotoğraf yükleme hatası:', uploadError.message);
                    if (uploadError.message.includes('bucket')) {
                        alert('Hata: Supabase panelinde "event-images" adında "Public" bir Bucket oluşturmanız gerekiyor.');
                        return;
                    }
                } else {
                    const { data: urlData } = supabaseClient.storage
                        .from('event-images')
                        .getPublicUrl(filePath);
                    imageUrlVal = urlData.publicUrl;
                }
            }
        }
        
        const speakersArr = speakersText.split(',').map(s => s.trim()).filter(s => s);
        const topicsArr = topicsText.split(',').map(s => s.trim()).filter(s => s);
        
        const dateObj = new Date(dateVal);
        const months = ["OCAK", "ŞUBAT", "MART", "NİSAN", "MAYIS", "HAZİRAN", "TEMMUZ", "AĞUSTOS", "EYLÜL", "EKİM", "KASIM", "ARALIK"];
        const days = ["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"];
        const dateStr = `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()} | ${days[dateObj.getDay()]}`;

        if(id) {
            // Supabase'de güncelle
            if(supabaseClient) {
                const { error } = await supabaseClient.from('schedule_events').update({
                    date: dateVal,
                    date_string: dateStr,
                    time: timeVal,
                    speakers: speakersArr,
                    topics: topicsArr,
                    category: categoryVal,
                    image_url: imageUrlVal
                }).eq('id', id);
                if(error) { alert('Güncelleme hatası: ' + error.message); return; }
            }
            const ev = appData.find(e => e.id == id);
            if(ev) { ev.date=dateVal; ev.dateString=dateStr; ev.time=timeVal; ev.speakers=speakersArr; ev.topics=topicsArr; ev.category=categoryVal; ev.image_url=imageUrlVal; }
        } else {
            // Supabase'e ekle
            if(supabaseClient) {
                const { data, error } = await supabaseClient.from('schedule_events').insert({
                    date: dateVal,
                    date_string: dateStr,
                    time: timeVal,
                    speakers: speakersArr,
                    topics: topicsArr,
                    category: categoryVal,
                    image_url: imageUrlVal
                }).select().single();
                if(error) { alert('Kaydetme hatası: ' + error.message); return; }
                appData.push({ id: data.id, date: dateVal, dateString: dateStr, time: timeVal, speakers: speakersArr, topics: topicsArr, category: categoryVal, image_url: imageUrlVal });
            } else {
                const newId = appData.length > 0 ? Math.max(...appData.map(e => e.id)) + 1 : 1;
                appData.push({ id: newId, date: dateVal, dateString: dateStr, time: timeVal, speakers: speakersArr, topics: topicsArr, category: categoryVal, image_url: imageUrlVal });
            }
        }
        
        if(editModal) editModal.style.display = 'none';
        renderSchedule();
        populateMonthSelect();
    });
}

function openEditModal(id) {
    const ev = appData.find(e => e.id == id);
    if(!ev) return;
    
    document.getElementById('modalTitle').textContent = 'EĞİTİMİ DÜZENLE';
    document.getElementById('editEventId').value = ev.id;
    document.getElementById('eventDate').value = ev.date;
    document.getElementById('eventTime').value = ev.time;
    document.getElementById('eventSpeakers').value = (ev.speakers || []).join(', ');
    document.getElementById('eventTopics').value = (ev.topics || []).join(', ');
    document.getElementById('eventImageUrl').value = ev.image_url || '';
    document.getElementById('eventImageFile').value = '';
    document.getElementById('eventType').value = ev.category || 'lab';
    
    if(editModal) editModal.style.display = 'flex';
}

// Make accessible to onclick
window.openEditModal = openEditModal;
window.deleteSession = async function(id) {
    if(confirm('Eğitimi programdan silmek istediğinize emin misiniz?')) {
        if(supabaseClient) {
            const { error } = await supabaseClient.from('schedule_events').delete().eq('id', id);
            if(error) { alert('Silme hatası: ' + error.message); return; }
        }
        appData = appData.filter(e => e.id != id);
        renderSchedule();
    }
};

function saveData() {
    // Artık Supabase kullanıyoruz, bu fonksiyon yedek olarak kalır
}

// PWA Logic Context 
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const btn = document.getElementById('installPwaBtn');
    if(btn) btn.style.display = 'block';
    
    if(btn) {
        btn.addEventListener('click', async () => {
            btn.style.display = 'none';
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log("Install prompt outcome:", outcome);
            deferredPrompt = null;
        });
    }
});

document.addEventListener('DOMContentLoaded', init);
