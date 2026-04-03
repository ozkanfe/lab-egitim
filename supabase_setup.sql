-- Haseki Patoloji Eğitim Programı - Tablo Oluştur
CREATE TABLE IF NOT EXISTS schedule_events (
  id        BIGSERIAL PRIMARY KEY,
  date      TEXT NOT NULL,
  date_string TEXT,
  time      TEXT NOT NULL,
  category  TEXT DEFAULT 'lab',
  image_url TEXT,
  speakers  JSONB DEFAULT '[]',
  topics    JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Herkes okuyabilsin (anon read)
ALTER TABLE schedule_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Herkes okuyabilir" ON schedule_events
  FOR SELECT USING (true);

CREATE POLICY "Herkes yazabilir" ON schedule_events
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Herkes guncelleyebilir" ON schedule_events
  FOR UPDATE USING (true);

CREATE POLICY "Herkes silebilir" ON schedule_events
  FOR DELETE USING (true);
