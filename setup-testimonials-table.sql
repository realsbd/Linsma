-- Create testimonials table if it doesn't exist
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  university TEXT NOT NULL,
  country TEXT NOT NULL,
  testimonial TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  is_featured BOOLEAN DEFAULT false,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Check if table is empty and insert sample data if needed
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM testimonials LIMIT 1) THEN
    -- Insert sample testimonials
    INSERT INTO testimonials (name, role, university, country, testimonial, rating, is_featured)
    VALUES
      ('Sarah Johnson', 'Student', 'Oxford University', 'United Kingdom', 'The guidance I received throughout my application process was invaluable. From selecting the right program to securing a scholarship, Linsma was with me every step of the way.', 5, true),
      ('Michael Chen', 'Graduate Student', 'University of Toronto', 'Canada', 'The language preparation program really helped me improve my English skills before starting my studies in Canada. I felt confident and prepared from day one.', 5, true),
      ('Priya Sharma', 'Undergraduate', 'Technical University of Munich', 'Germany', 'I never thought studying in Germany would be possible, but with Linsma''s help, I navigated the application process and secured a place at my dream university.', 5, true),
      ('James Wilson', 'PhD Candidate', 'Stanford University', 'United States', 'The personalized guidance I received for my PhD application was exceptional. Linsma helped me connect with the right professors and craft a compelling research proposal.', 5, true),
      ('Aisha Mohammed', 'Student', 'University of Melbourne', 'Australia', 'From visa application to finding accommodation, Linsma made my transition to studying in Australia smooth and stress-free. I couldn''t have done it without their support.', 4, false),
      ('Carlos Rodriguez', 'Undergraduate', 'University of Barcelona', 'Spain', 'Thanks to Linsma, I was able to navigate the complex Spanish university system and find a program that perfectly matched my academic interests and career goals.', 5, false);
  END IF;
END
$$;
