-- Dummy Experience Data
INSERT INTO experience (company, role_en, role_fr, description_en, description_fr, start_date, end_date, location)
VALUES 
('Tech Innovations Inc.', 'Senior Software Engineer', 'Ingénieur Logiciel Senior', 
 'Led development of microservices architecture serving 10M+ users. Implemented CI/CD pipelines and reduced deployment time by 60%.', 
 'Dirigé le développement d''une architecture de microservices desservant plus de 10 millions d''utilisateurs.', 
 '2022-01-15', NULL, 'San Francisco, CA'),
 
('Digital Solutions Ltd.', 'Full Stack Developer', 'Développeur Full Stack', 
 'Built responsive web applications using React and Spring Boot. Collaborated with cross-functional teams to deliver features on time.', 
 'Construit des applications web réactives utilisant React et Spring Boot.', 
 '2020-06-01', '2021-12-31', 'Montreal, QC'),
 
('StartUp Hub', 'Junior Developer', 'Développeur Junior', 
 'Developed RESTful APIs and frontend components. Participated in code reviews and agile development processes.', 
 'Développé des APIs RESTful et des composants frontend.', 
 '2019-03-01', '2020-05-31', 'Toronto, ON');

-- Dummy Projects Data
INSERT INTO projects (title_en, title_fr, description_en, description_fr, image_url, github_link, live_link)
VALUES 
('E-Commerce Platform', 'Plateforme E-Commerce', 
 'A full-featured online shopping platform with payment integration, inventory management, and real-time notifications.', 
 'Une plateforme de shopping en ligne complète avec intégration de paiement et gestion d''inventaire.', 
 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23A8DADC"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="%23FFFFFF"%3EE-Commerce%3C/text%3E%3C/svg%3E', 
 'https://github.com/example/ecommerce', 
 'https://demo-ecommerce.example.com'),
 
('Task Management App', 'Application de Gestion de Tâches', 
 'A collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.', 
 'Un outil de gestion de tâches collaboratif avec mises à jour en temps réel.', 
 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%238FBDD4"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="%23FFFFFF"%3ETask Manager%3C/text%3E%3C/svg%3E', 
 'https://github.com/example/taskmanager', 
 'https://demo-tasks.example.com'),
 
('Weather Dashboard', 'Tableau de Bord Météo', 
 'Interactive weather dashboard displaying forecasts, historical data, and weather alerts using modern data visualization.', 
 'Tableau de bord météo interactif affichant les prévisions et les données historiques.', 
 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23D4D9E0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="%235A6C7D"%3EWeather App%3C/text%3E%3C/svg%3E', 
 'https://github.com/example/weather', 
 'https://demo-weather.example.com'),
 
('Portfolio CMS', 'CMS Portfolio', 
 'Content management system for portfolio websites with drag-and-drop page builder and SEO optimization.', 
 'Système de gestion de contenu pour sites portfolio avec constructeur de pages.', 
 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23E8ECEF"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="%235A6C7D"%3EPortfolio CMS%3C/text%3E%3C/svg%3E', 
 'https://github.com/example/cms', 
 'https://demo-cms.example.com'),
 
('Social Media Analytics', 'Analytique Médias Sociaux', 
 'Analytics dashboard for tracking social media engagement, growth trends, and audience insights across multiple platforms.', 
 'Tableau de bord d''analyse pour suivre l''engagement sur les médias sociaux.', 
 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23A8DADC"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="%23FFFFFF"%3EAnalytics%3C/text%3E%3C/svg%3E', 
 'https://github.com/example/analytics', 
 'https://demo-analytics.example.com'),
 
('Recipe Finder', 'Trouveur de Recettes', 
 'Recipe search engine with ingredient-based filtering, nutrition information, and meal planning capabilities.', 
 'Moteur de recherche de recettes avec filtrage par ingrédients et informations nutritionnelles.', 
 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%238FBDD4"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="%23FFFFFF"%3ERecipes%3C/text%3E%3C/svg%3E', 
 'https://github.com/example/recipes', 
 'https://demo-recipes.example.com');

-- Project Technologies
INSERT INTO project_technologies (project_id, technology) VALUES
(1, 'React'), (1, 'Spring Boot'), (1, 'PostgreSQL'), (1, 'Stripe API'), (1, 'Docker'),
(2, 'React'), (2, 'Node.js'), (2, 'MongoDB'), (2, 'Socket.io'), (2, 'Redux'),
(3, 'Vue.js'), (3, 'Express'), (3, 'Chart.js'), (3, 'OpenWeather API'), (3, 'Tailwind CSS'),
(4, 'React'), (4, 'Spring Boot'), (4, 'MySQL'), (4, 'AWS S3'), (4, 'Material-UI'),
(5, 'Angular'), (5, 'Python'), (5, 'Django'), (5, 'Redis'), (5, 'D3.js'),
(6, 'React Native'), (6, 'Firebase'), (6, 'Spoonacular API'), (6, 'TypeScript');

-- Dummy Skills Data
INSERT INTO skills (name, proficiency, category) VALUES 
('Java', 90, 'Backend'),
('Spring Boot', 85, 'Backend'),
('Python', 80, 'Backend'),
('Node.js', 85, 'Backend'),
('React', 90, 'Frontend'),
('Vue.js', 75, 'Frontend'),
('Angular', 70, 'Frontend'),
('TypeScript', 85, 'Frontend'),
('JavaScript', 95, 'Frontend'),
('HTML/CSS', 90, 'Frontend'),
('PostgreSQL', 85, 'Database'),
('MongoDB', 80, 'Database'),
('MySQL', 80, 'Database'),
('Redis', 70, 'Database'),
('Docker', 85, 'DevOps'),
('Kubernetes', 70, 'DevOps'),
('AWS', 75, 'DevOps'),
('Git', 90, 'Tools'),
('Jenkins', 75, 'DevOps'),
('REST API', 90, 'Backend');

-- Dummy Testimonials Data
INSERT INTO testimonials (author_name, content, approved)
VALUES 
('Sarah Johnson', 'Outstanding developer! Delivered our project ahead of schedule with exceptional quality. Highly recommend for any complex web development needs.', true),
('Michael Chen', 'Professional, reliable, and incredibly skilled. The attention to detail and problem-solving abilities are top-notch.', true),
('Emily Rodriguez', 'Working with this developer was a pleasure. Great communication, creative solutions, and excellent code quality throughout the project.', true),
('David Thompson', 'Exceeded all expectations! The final product was even better than we envisioned. Will definitely work together again.', true);

-- Dummy Education Data
INSERT INTO education (school_en, school_fr, degree_en, degree_fr, field_of_study_en, field_of_study_fr, start_date, end_date, gpa)
VALUES 
('Massachusetts Institute of Technology', 'Institut de Technologie du Massachusetts', 
 'Master of Science', 'Maîtrise en Sciences', 
 'Computer Science', 'Informatique', 
 '2020-09-01', '2022-05-15', 3.9),
 
('University of California, Berkeley', 'Université de Californie, Berkeley', 
 'Bachelor of Science', 'Baccalauréat en Sciences', 
 'Software Engineering', 'Génie Logiciel', 
 '2016-09-01', '2020-05-20', 3.8),
 
('Online Certification', 'Certification en Ligne', 
 'Full Stack Web Development', 'Développement Web Full Stack', 
 'MERN Stack', 'Stack MERN', 
 '2019-01-01', '2019-06-30', NULL);

-- Dummy Hobbies Data
INSERT INTO hobbies (name_en, name_fr, description_en, description_fr, icon_url)
VALUES 
('Photography', 'Photographie', 'Capturing moments and landscapes through the lens.', 'Capturer des moments et des paysages à travers l''objectif.', '📷'),
('Open Source', 'Open Source', 'Contributing to open source projects and community.', 'Contribuer aux projets open source et à la communauté.', '💻'),
('Hiking', 'Randonnée', 'Exploring nature trails and mountain peaks.', 'Explorer les sentiers naturels et les sommets montagneux.', '🏔️'),
('Gaming', 'Jeux Vidéo', 'Strategy and puzzle games enthusiast.', 'Passionné de jeux de stratégie et de puzzle.', '🎮');