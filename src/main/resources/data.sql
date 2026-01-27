-- Work Experience Data
INSERT INTO experiences (company, role_en, role_fr, description_en, description_fr, start_date, end_date, location)
VALUES 
('Lulu Bistro', 'Waiter, Host, Busboy', 'Serveur, Hôte, Commis de Busboy', 
 'Table-side order and service, floor plan reservations and seating management, client greeting at the front desk, table dish removal, and cleaning. Over 3 years of customer service experience developing strong communication and leadership skills.', 
 'Service à table, gestion des réservations et des places, accueil des clients, nettoyage. Plus de 3 ans d''expérience dans le service à la clientèle.', 
 '2023-04-01', NULL, 'Boucherville, QC'),
 
('Trévi', 'Technical Advisor, Clerk', 'Conseiller Technique, Commis', 
 'Technical advisor in pool equipment, floor clerk, managed inventory, and organized backstore. Gained expertise in customer relations and operational management.', 
 'Conseiller technique en équipement de piscine, gestion d''inventaire et organisation de l''arrière-magasin.', 
 '2020-06-01', '2022-11-30', 'Boucherville, QC');

-- Projects Data
INSERT INTO projects (title_en, title_fr, description_en, description_fr, image_url, github_link, live_link)
VALUES 
('External Client Project', 'Projet Client Externe', 
 'Leading a 5-member team to deliver a full-stack microservice-based web application with user portals, electronic signatures, document uploading, role-based access, and financial reports. September 2025 - February 2026. Technologies: Java, Spring Boot, React, MySQL, Docker, Auth0, Google Analytics API, Digital Ocean deployment.', 
 'Direction d''une équipe de 5 membres pour livrer une application web microservices avec portails utilisateur, signatures électroniques et rapports financiers. Technologies: Java, Spring Boot, React, MySQL, Docker.', 
 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23A8DADC"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="%23FFFFFF"%3EClient Project%3C/text%3E%3C/svg%3E', 
 'https://github.com/LCDCI/Les-Constructions-Dominic-Cyr', 
 'https://constructions-dominiccyr.com/'),
 
('Champlain Pet Clinic', 'Clinique Animale Champlain', 
 'Full-stack web application developed in collaboration with a 44-member team, focusing on customer profile microservice. September 2025 - November 2025. Technologies: Java, Spring Boot, React, MongoDB, Bootstrap, Docker, Postman.', 
 'Application web full-stack développée en collaboration avec une équipe de 44 membres sur le microservice de profil client. Technologies: Java, Spring Boot, React, MongoDB.', 
 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%238FBDD4"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="%23FFFFFF"%3EPet Clinic%3C/text%3E%3C/svg%3E', 
 'https://github.com/cgerard321/champlain_petclinic', 
 'https://petclinic.benmusicgeek.synology.me/home'),

('E-Commerce Application', 'Application E-Commerce', 
 'Full CRUD e-commerce web application using PHP Laravel framework. April 2025 - May 2025. Features include database migration, Blade templating, role-based access control, and product management capabilities.', 
 'Application e-commerce complète avec système CRUD utilisant Laravel. Avril 2025 - Mai 2025. Inclut migration de base de données, accès basé sur les rôles et gestion des produits.', 
 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23D4D9E0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="%235A6C7D"%3EE-Commerce%3C/text%3E%3C/svg%3E', 
 'https://github.com/OlivieriD/Mini-ecommerce', 
 NULL),
 
('Tic Tac Toe Game', 'Jeu Morpion', 
 'Interactive Tic-Tac-Toe game developed using WPF and C#. November 2024. Demonstrates expert proficiency in C#, object-oriented design, and rigorous testing practices with dynamic user interface.', 
 'Jeu Morpion interactif développé avec WPF et C#. Novembre 2024. Démontre la maîtrise de la conception orientée objet et des pratiques de test.', 
 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23E8ECEF"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="%235A6C7D"%3ETic Tac Toe%3C/text%3E%3C/svg%3E', 
 'https://github.com/OlivieriD/Tic-Tac-Toe-game', 
 NULL);

-- Project Technologies
INSERT INTO project_technologies (project_id, technology) VALUES
(1, 'Java'), (1, 'Spring Boot'), (1, 'React'), (1, 'MySQL'), (1, 'Docker'), (1, 'Auth0'), (1, 'Google Analytics API'), (1, 'Digital Ocean'),
(2, 'Java'), (2, 'Spring Boot'), (2, 'React'), (2, 'MongoDB'), (2, 'Bootstrap'), (2, 'Docker'), (2, 'Postman'),
(3, 'PHP'), (3, 'Laravel'), (3, 'MySQL'), (3, 'Blade'), (3, 'HTML/CSS'),
(4, 'C#'), (4, 'WPF'), (4, 'Git'), (4, 'OOP'), (4, 'Testing');

-- Skills Data
INSERT INTO skills (name, proficiency, category) VALUES 
-- Proficient Languages
('C#', 85, 'Programming'),
('Java', 85, 'Programming'),
('SQL', 85, 'Database'),
('T-SQL', 85, 'Database'),
('JavaScript', 85, 'Programming'),
('HTML', 85, 'Frontend'),
('CSS', 85, 'Frontend'),
('React', 85, 'Frontend'),
-- Known Languages
('Python', 70, 'Programming'),
('PHP', 75, 'Programming'),
('Node.js', 70, 'Backend'),
('Bootstrap', 70, 'Frontend'),
('Kotlin', 65, 'Programming'),
('C++', 65, 'Programming'),
-- Technologies & Tools
('Spring Boot', 85, 'Framework'),
('Azure DevOps', 85, 'DevOps'),
('CI/CD Pipeline', 80, 'DevOps'),
('Docker', 80, 'DevOps'),
('Git', 85, 'Tools'),
('Visual Studio Code', 85, 'Tools'),
('Visual Studio 2022', 80, 'Tools'),
('JetBrains Suite', 80, 'Tools'),
('Postman', 80, 'Tools'),
('Jira', 75, 'Tools'),
('PlantUML', 75, 'Tools'),
('Canva', 70, 'Tools'),
-- Databases
('MySQL', 85, 'Database'),
('PostgreSQL', 75, 'Database'),
('SSMS', 80, 'Database'),
('MongoDB', 75, 'Database'),
('H2', 70, 'Database'),
('MySQL Workbench', 80, 'Database'),
('PhpMyAdmin', 75, 'Database'),
-- Methodologies & Concepts
('SCRUM', 85, 'Methodology'),
('Agile Development', 85, 'Methodology'),
('System Analysis and Design', 80, 'Methodology'),
('Object-Oriented Programming', 85, 'Concepts'),
('Reactive Programming', 75, 'Concepts'),
('Full-stack Development', 85, 'Concepts'),
('RESTful Microservices', 80, 'Concepts'),
('Unit Testing', 80, 'Testing'),
('Integration Testing', 75, 'Testing'),
('Repository Testing', 70, 'Testing'),
('Service Testing', 75, 'Testing'),
('AWS', 70, 'Cloud'),
('Azure', 75, 'Cloud');

-- Testimonials Data
INSERT INTO testimonials (author_name, content, approved)
VALUES 
('Team Lead - Client Project', 'Olivier demonstrated exceptional leadership and technical expertise while leading our microservices project. His ability to communicate complex concepts and manage team dynamics resulted in a successful delivery ahead of schedule.', true),
('Professor - Champlain College', 'Outstanding student with strong grasp of software engineering principles. Olivier''s dedication to SCRUM methodologies and quality testing practices sets him apart from peers.', true),
('Peer Developer - Pet Clinic Project', 'Working with Olivier on the microservices project was productive. Great teamwork, solid understanding of Spring Boot and React, and always willing to help teammates troubleshoot issues.', true),
('Manager - Lulu Bistro', 'Olivier is a reliable and professional team member with excellent customer service skills and initiative. Shows strong organizational abilities and leadership potential in his roles.', true);

-- Education Data
INSERT INTO education (school_en, school_fr, degree_en, degree_fr, field_of_study_en, field_of_study_fr, start_date, end_date, gpa)
VALUES 
('Champlain College', 'Collège Champlain', 
 'Diploma in Computer Science', 'Diplôme en Informatique', 
 'Computer Science', 'Informatique', 
 '2022-09-01', '2026-05-31', NULL),
 
('Collège Charles-Lemoyne', 'Collège Charles-Lemoyne', 
 'Diploma', 'Diplôme', 
 'Arts et multimédia - PE+ Program', 'Arts et multimédia - Programme PE+', 
 '2017-09-01', '2022-06-30', NULL);

-- Hobbies Data (Interests from CV)
INSERT INTO hobbies (name_en, name_fr, description_en, description_fr, icon_url)
VALUES 
('Hockey', 'Hockey', 'Passionate about ice hockey and staying active on the ice.', 'Passionné de hockey sur glace et activités sportives.', '🏒'),
('Golf', 'Golf', 'Enjoy playing golf and the outdoors.', 'Amateur de golf et des activités en plein air.', '⛳'),
('Football', 'Football', 'Interest in American football and soccer.', 'Intérêt pour le football américain et le soccer.', '🏈'),
('Soccer', 'Soccer', 'Active player and enthusiast of soccer.', 'Joueur actif et enthousiaste du soccer.', '⚽'),
('Baseball', 'Baseball', 'Baseball fan and occasional player.', 'Amateur de baseball et joueur occasionnel.', '⚾');

-- About Section Data
INSERT INTO about (content_en, content_fr)
VALUES 
('I am a Computer Science student with over 5 years of customer service experience, skilled in team leadership and effective communication, looking for a 3-month internship starting March 2026. I aim to merge my technical expertise with strong interpersonal skills to make a meaningful impact on colleagues and employers.',
 'Je suis un étudiant en informatique avec plus de 5 ans d''expérience en service à la clientèle, compétent en leadership d''équipe et en communication efficace, à la recherche d''un stage de 3 mois débutant en mars 2026. Je vise à fusionner mon expertise technique avec de solides compétences interpersonnelles pour avoir un impact significatif sur mes collègues et employeurs.');