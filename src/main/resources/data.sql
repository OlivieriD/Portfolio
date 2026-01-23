-- Dummy Experience
INSERT INTO experience (company, role_en, role_fr, description_en, description_fr, start_date, location)
VALUES ('Tech Corp', 'Software Engineer', 'Ingénieur Logiciel', 'Developed N-tier apps.', 'Développé des apps N-tier.', '2023-01-01', 'Montreal');

-- Dummy Projects
INSERT INTO projects (title_en, title_fr, description_en, description_fr, image_url)
VALUES ('Portfolio V1', 'Portfolio V1', 'My first site.', 'Mon premier site.', 'https://via.placeholder.com/150');

-- Dummy Skills
INSERT INTO skills (name, proficiency, category) VALUES ('Java', 90, 'Backend');
INSERT INTO skills (name, proficiency, category) VALUES ('React', 85, 'Frontend');

-- Dummy Testimonials
INSERT INTO testimonials (author_name, content, approved)
VALUES ('Jane Doe', 'Incredible developer!', true);

-- Dummy Education
INSERT INTO education (school_en, school_fr, degree_en, degree_fr, start_date, gpa)
VALUES ('University of Technology', 'Université de Technologie', 'Bachelors', 'Baccalauréat', '2019-09-01', 3.8);