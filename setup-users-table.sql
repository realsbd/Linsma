-- Create users table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  country TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create storage bucket for images if it doesn't exist
-- Note: This needs to be done in the Supabase dashboard or via the Supabase CLI
-- The following is just a placeholder for documentation purposes
-- CREATE BUCKET IF NOT EXISTS images;

-- Insert sample users for testing
INSERT INTO users (email, full_name, country, is_active)
VALUES
  ('john.doe@example.com', 'John Doe', 'United States', TRUE),
  ('jane.smith@example.com', 'Jane Smith', 'United Kingdom', TRUE),
  ('ahmed.hassan@example.com', 'Ahmed Hassan', 'Egypt', TRUE),
  ('maria.garcia@example.com', 'Maria Garcia', 'Spain', TRUE),
  ('liu.wei@example.com', 'Liu Wei', 'China', TRUE),
  ('sato.yuki@example.com', 'Sato Yuki', 'Japan', FALSE),
  ('kim.min@example.com', 'Kim Min', 'South Korea', TRUE),
  ('singh.raj@example.com', 'Raj Singh', 'India', TRUE),
  ('mueller.hans@example.com', 'Hans Mueller', 'Germany', FALSE),
  ('dubois.sophie@example.com', 'Sophie Dubois', 'France', TRUE)
ON CONFLICT (email) DO NOTHING;
