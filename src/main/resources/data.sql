-- Work Experience Data
INSERT INTO experiences (company, role_en, role_fr, description_en, description_fr, start_date, end_date, location)
SELECT 'Lulu Bistro', 'Waiter, Host, Busboy', 'Serveur, Hôte, Commis de Busboy', 
 'Table-side order and service, floor plan reservations and seating management, client greeting at the front desk, table dish removal, and cleaning. Over 3 years of customer service experience developing strong communication and leadership skills.', 
 'Service à table, gestion des réservations et des places, accueil des clients, nettoyage. Plus de 3 ans d''expérience dans le service à la clientèle.', 
 '2023-04-01', NULL, 'Boucherville, QC'
WHERE NOT EXISTS (SELECT 1 FROM experiences WHERE company = 'Lulu Bistro' AND role_en = 'Waiter, Host, Busboy' AND start_date = '2023-04-01');

INSERT INTO experiences (company, role_en, role_fr, description_en, description_fr, start_date, end_date, location)
SELECT 'Trévi', 'Technical Advisor, Clerk', 'Conseiller Technique, Commis', 
 'Technical advisor in pool equipment, floor clerk, managed inventory, and organized backstore. Gained expertise in customer relations and operational management.', 
 'Conseiller technique en équipement de piscine, gestion d''inventaire et organisation de l''arrière-magasin.', 
 '2020-06-01', '2022-11-30', 'Boucherville, QC'
WHERE NOT EXISTS (SELECT 1 FROM experiences WHERE company = 'Trévi' AND role_en = 'Technical Advisor, Clerk' AND start_date = '2020-06-01');

-- Projects Data
INSERT INTO projects (title_en, title_fr, description_en, description_fr, image_url, github_link, live_link)
SELECT 'External Client Project', 'Projet Client Externe', 
 'Leading a 5-member team to deliver a full-stack microservice-based web application with user portals, electronic signatures, document uploading, role-based access, and financial reports. September 2025 - February 2026. Technologies: Java, Spring Boot, React, MySQL, Docker, Auth0, Google Analytics API, Digital Ocean deployment.', 
 'Direction d''une équipe de 5 membres pour livrer une application web microservices avec portails utilisateur, signatures électroniques et rapports financiers. Technologies: Java, Spring Boot, React, MySQL, Docker.', 
 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23A8DADC"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="%23FFFFFF"%3EClient Project%3C/text%3E%3C/svg%3E', 
 'https://github.com/LCDCI/Les-Constructions-Dominic-Cyr', 
 'https://constructions-dominiccyr.com/'
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title_en = 'External Client Project');

INSERT INTO projects (title_en, title_fr, description_en, description_fr, image_url, github_link, live_link)
SELECT 'Champlain Pet Clinic', 'Clinique Animale Champlain', 
 'Full-stack web application developed in collaboration with a 44-member team, focusing on customer profile microservice. September 2025 - November 2025. Technologies: Java, Spring Boot, React, MongoDB, Bootstrap, Docker, Postman.', 
 'Application web full-stack développée en collaboration avec une équipe de 44 membres sur le microservice de profil client. Technologies: Java, Spring Boot, React, MongoDB.', 
 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%238FBDD4"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="%23FFFFFF"%3EPet Clinic%3C/text%3E%3C/svg%3E', 
 'https://github.com/cgerard321/champlain_petclinic', 
 'https://petclinic.benmusicgeek.synology.me/home'
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title_en = 'Champlain Pet Clinic');

INSERT INTO projects (title_en, title_fr, description_en, description_fr, image_url, github_link, live_link)
SELECT 'E-Commerce Application', 'Application E-Commerce', 
 'Full CRUD e-commerce web application using PHP Laravel framework. April 2025 - May 2025. Features include database migration, Blade templating, role-based access control, and product management capabilities.', 
 'Application e-commerce complète avec système CRUD utilisant Laravel. Avril 2025 - Mai 2025. Inclut migration de base de données, accès basé sur les rôles et gestion des produits.', 
 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23D4D9E0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="%235A6C7D"%3EE-Commerce%3C/text%3E%3C/svg%3E', 
 'https://github.com/OlivieriD/Mini-ecommerce', 
 NULL
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title_en = 'E-Commerce Application');

INSERT INTO projects (title_en, title_fr, description_en, description_fr, image_url, github_link, live_link)
SELECT 'Tic Tac Toe Game', 'Jeu Morpion', 
 'Interactive Tic-Tac-Toe game developed using WPF and C#. November 2024. Demonstrates expert proficiency in C#, object-oriented design, and rigorous testing practices with dynamic user interface.', 
 'Jeu Morpion interactif développé avec WPF et C#. Novembre 2024. Démontre la maîtrise de la conception orientée objet et des pratiques de test.', 
 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23E8ECEF"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="%235A6C7D"%3ETic Tac Toe%3C/text%3E%3C/svg%3E', 
 'https://github.com/OlivieriD/Tic-Tac-Toe-game', 
 NULL
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title_en = 'Tic Tac Toe Game');

-- Project Technologies
INSERT INTO project_technologies (project_id, technology) SELECT 1, 'Java' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 1 AND technology = 'Java');
INSERT INTO project_technologies (project_id, technology) SELECT 1, 'Spring Boot' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 1 AND technology = 'Spring Boot');
INSERT INTO project_technologies (project_id, technology) SELECT 1, 'React' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 1 AND technology = 'React');
INSERT INTO project_technologies (project_id, technology) SELECT 1, 'MySQL' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 1 AND technology = 'MySQL');
INSERT INTO project_technologies (project_id, technology) SELECT 1, 'Docker' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 1 AND technology = 'Docker');
INSERT INTO project_technologies (project_id, technology) SELECT 1, 'Auth0' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 1 AND technology = 'Auth0');
INSERT INTO project_technologies (project_id, technology) SELECT 1, 'Google Analytics API' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 1 AND technology = 'Google Analytics API');
INSERT INTO project_technologies (project_id, technology) SELECT 1, 'Digital Ocean' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 1 AND technology = 'Digital Ocean');

INSERT INTO project_technologies (project_id, technology) SELECT 2, 'Java' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 2 AND technology = 'Java');
INSERT INTO project_technologies (project_id, technology) SELECT 2, 'Spring Boot' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 2 AND technology = 'Spring Boot');
INSERT INTO project_technologies (project_id, technology) SELECT 2, 'React' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 2 AND technology = 'React');
INSERT INTO project_technologies (project_id, technology) SELECT 2, 'MongoDB' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 2 AND technology = 'MongoDB');
INSERT INTO project_technologies (project_id, technology) SELECT 2, 'Bootstrap' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 2 AND technology = 'Bootstrap');
INSERT INTO project_technologies (project_id, technology) SELECT 2, 'Docker' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 2 AND technology = 'Docker');
INSERT INTO project_technologies (project_id, technology) SELECT 2, 'Postman' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 2 AND technology = 'Postman');

INSERT INTO project_technologies (project_id, technology) SELECT 3, 'PHP' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 3 AND technology = 'PHP');
INSERT INTO project_technologies (project_id, technology) SELECT 3, 'Laravel' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 3 AND technology = 'Laravel');
INSERT INTO project_technologies (project_id, technology) SELECT 3, 'MySQL' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 3 AND technology = 'MySQL');
INSERT INTO project_technologies (project_id, technology) SELECT 3, 'Blade' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 3 AND technology = 'Blade');
INSERT INTO project_technologies (project_id, technology) SELECT 3, 'HTML/CSS' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 3 AND technology = 'HTML/CSS');

INSERT INTO project_technologies (project_id, technology) SELECT 4, 'C#' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 4 AND technology = 'C#');
INSERT INTO project_technologies (project_id, technology) SELECT 4, 'WPF' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 4 AND technology = 'WPF');
INSERT INTO project_technologies (project_id, technology) SELECT 4, 'Git' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 4 AND technology = 'Git');
INSERT INTO project_technologies (project_id, technology) SELECT 4, 'OOP' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 4 AND technology = 'OOP');
INSERT INTO project_technologies (project_id, technology) SELECT 4, 'Testing' WHERE NOT EXISTS (SELECT 1 FROM project_technologies WHERE project_id = 4 AND technology = 'Testing');

-- Skills Data
INSERT INTO skills (name, proficiency, category) SELECT 'C#', 85, 'Programming' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'C#');
INSERT INTO skills (name, proficiency, category) SELECT 'Java', 85, 'Programming' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Java');
INSERT INTO skills (name, proficiency, category) SELECT 'SQL', 85, 'Database' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'SQL');
INSERT INTO skills (name, proficiency, category) SELECT 'T-SQL', 85, 'Database' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'T-SQL');
INSERT INTO skills (name, proficiency, category) SELECT 'JavaScript', 85, 'Programming' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'JavaScript');
INSERT INTO skills (name, proficiency, category) SELECT 'HTML', 85, 'Frontend' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'HTML');
INSERT INTO skills (name, proficiency, category) SELECT 'CSS', 85, 'Frontend' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'CSS');
INSERT INTO skills (name, proficiency, category) SELECT 'React', 85, 'Frontend' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'React');
INSERT INTO skills (name, proficiency, category) SELECT 'Python', 70, 'Programming' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Python');
INSERT INTO skills (name, proficiency, category) SELECT 'PHP', 75, 'Programming' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'PHP');
INSERT INTO skills (name, proficiency, category) SELECT 'Node.js', 70, 'Backend' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Node.js');
INSERT INTO skills (name, proficiency, category) SELECT 'Bootstrap', 70, 'Frontend' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Bootstrap');
INSERT INTO skills (name, proficiency, category) SELECT 'Kotlin', 65, 'Programming' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Kotlin');
INSERT INTO skills (name, proficiency, category) SELECT 'C++', 65, 'Programming' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'C++');
INSERT INTO skills (name, proficiency, category) SELECT 'Spring Boot', 85, 'Framework' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Spring Boot');
INSERT INTO skills (name, proficiency, category) SELECT 'Azure DevOps', 85, 'DevOps' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Azure DevOps');
INSERT INTO skills (name, proficiency, category) SELECT 'CI/CD Pipeline', 80, 'DevOps' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'CI/CD Pipeline');
INSERT INTO skills (name, proficiency, category) SELECT 'Docker', 80, 'DevOps' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Docker');
INSERT INTO skills (name, proficiency, category) SELECT 'Git', 85, 'Tools' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Git');
INSERT INTO skills (name, proficiency, category) SELECT 'Visual Studio Code', 85, 'Tools' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Visual Studio Code');
INSERT INTO skills (name, proficiency, category) SELECT 'Visual Studio 2022', 80, 'Tools' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Visual Studio 2022');
INSERT INTO skills (name, proficiency, category) SELECT 'JetBrains Suite', 80, 'Tools' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'JetBrains Suite');
INSERT INTO skills (name, proficiency, category) SELECT 'Postman', 80, 'Tools' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Postman');
INSERT INTO skills (name, proficiency, category) SELECT 'Jira', 75, 'Tools' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Jira');
INSERT INTO skills (name, proficiency, category) SELECT 'PlantUML', 75, 'Tools' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'PlantUML');
INSERT INTO skills (name, proficiency, category) SELECT 'Canva', 70, 'Tools' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Canva');
INSERT INTO skills (name, proficiency, category) SELECT 'MySQL', 85, 'Database' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'MySQL');
INSERT INTO skills (name, proficiency, category) SELECT 'PostgreSQL', 75, 'Database' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'PostgreSQL');
INSERT INTO skills (name, proficiency, category) SELECT 'SSMS', 80, 'Database' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'SSMS');
INSERT INTO skills (name, proficiency, category) SELECT 'MongoDB', 75, 'Database' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'MongoDB');
INSERT INTO skills (name, proficiency, category) SELECT 'H2', 70, 'Database' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'H2');
INSERT INTO skills (name, proficiency, category) SELECT 'MySQL Workbench', 80, 'Database' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'MySQL Workbench');
INSERT INTO skills (name, proficiency, category) SELECT 'PhpMyAdmin', 75, 'Database' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'PhpMyAdmin');
INSERT INTO skills (name, proficiency, category) SELECT 'SCRUM', 85, 'Methodology' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'SCRUM');
INSERT INTO skills (name, proficiency, category) SELECT 'Agile Development', 85, 'Methodology' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Agile Development');
INSERT INTO skills (name, proficiency, category) SELECT 'System Analysis and Design', 80, 'Methodology' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'System Analysis and Design');
INSERT INTO skills (name, proficiency, category) SELECT 'Object-Oriented Programming', 85, 'Concepts' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Object-Oriented Programming');
INSERT INTO skills (name, proficiency, category) SELECT 'Reactive Programming', 75, 'Concepts' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Reactive Programming');
INSERT INTO skills (name, proficiency, category) SELECT 'Full-stack Development', 85, 'Concepts' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Full-stack Development');
INSERT INTO skills (name, proficiency, category) SELECT 'RESTful Microservices', 80, 'Concepts' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'RESTful Microservices');
INSERT INTO skills (name, proficiency, category) SELECT 'Unit Testing', 80, 'Testing' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Unit Testing');
INSERT INTO skills (name, proficiency, category) SELECT 'Integration Testing', 75, 'Testing' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Integration Testing');
INSERT INTO skills (name, proficiency, category) SELECT 'Repository Testing', 70, 'Testing' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Repository Testing');
INSERT INTO skills (name, proficiency, category) SELECT 'Service Testing', 75, 'Testing' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Service Testing');
INSERT INTO skills (name, proficiency, category) SELECT 'AWS', 70, 'Cloud' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'AWS');
INSERT INTO skills (name, proficiency, category) SELECT 'Azure', 75, 'Cloud' WHERE NOT EXISTS (SELECT 1 FROM skills WHERE name = 'Azure');

-- Testimonials Data
INSERT INTO testimonials (author_name, content, approved)
SELECT 'Team Lead - Client Project', 'Olivier demonstrated exceptional leadership and technical expertise while leading our microservices project. His ability to communicate complex concepts and manage team dynamics resulted in a successful delivery ahead of schedule.', true
WHERE NOT EXISTS (SELECT 1 FROM testimonials WHERE author_name = 'Team Lead - Client Project' AND content = 'Olivier demonstrated exceptional leadership and technical expertise while leading our microservices project. His ability to communicate complex concepts and manage team dynamics resulted in a successful delivery ahead of schedule.');

INSERT INTO testimonials (author_name, content, approved)
SELECT 'Professor - Champlain College', 'Outstanding student with strong grasp of software engineering principles. Olivier''s dedication to SCRUM methodologies and quality testing practices sets him apart from peers.', true
WHERE NOT EXISTS (SELECT 1 FROM testimonials WHERE author_name = 'Professor - Champlain College' AND content = 'Outstanding student with strong grasp of software engineering principles. Olivier''s dedication to SCRUM methodologies and quality testing practices sets him apart from peers.');

INSERT INTO testimonials (author_name, content, approved)
SELECT 'Peer Developer - Pet Clinic Project', 'Working with Olivier on the microservices project was productive. Great teamwork, solid understanding of Spring Boot and React, and always willing to help teammates troubleshoot issues.', true
WHERE NOT EXISTS (SELECT 1 FROM testimonials WHERE author_name = 'Peer Developer - Pet Clinic Project' AND content = 'Working with Olivier on the microservices project was productive. Great teamwork, solid understanding of Spring Boot and React, and always willing to help teammates troubleshoot issues.');

INSERT INTO testimonials (author_name, content, approved)
SELECT 'Manager - Lulu Bistro', 'Olivier is a reliable and professional team member with excellent customer service skills and initiative. Shows strong organizational abilities and leadership potential in his roles.', true
WHERE NOT EXISTS (SELECT 1 FROM testimonials WHERE author_name = 'Manager - Lulu Bistro' AND content = 'Olivier is a reliable and professional team member with excellent customer service skills and initiative. Shows strong organizational abilities and leadership potential in his roles.');

-- Education Data
INSERT INTO education (school_en, school_fr, degree_en, degree_fr, field_of_study_en, field_of_study_fr, start_date, end_date, gpa)
SELECT 'Champlain College', 'Collège Champlain', 'Diploma in Computer Science', 'Diplôme en Informatique', 'Computer Science', 'Informatique', '2022-09-01', '2026-05-31', NULL
WHERE NOT EXISTS (SELECT 1 FROM education WHERE school_en = 'Champlain College' AND degree_en = 'Diploma in Computer Science');

INSERT INTO education (school_en, school_fr, degree_en, degree_fr, field_of_study_en, field_of_study_fr, start_date, end_date, gpa)
SELECT 'Collège Charles-Lemoyne', 'Collège Charles-Lemoyne', 'Diploma', 'Diplôme', 'Arts et multimédia - PE+ Program', 'Arts et multimédia - Programme PE+', '2017-09-01', '2022-06-30', NULL
WHERE NOT EXISTS (SELECT 1 FROM education WHERE school_en = 'Collège Charles-Lemoyne' AND degree_en = 'Diploma');

-- Hobbies Data
INSERT INTO hobbies (name_en, name_fr, description_en, description_fr, icon_url)
SELECT 'Hockey', 'Hockey', 'Passionate about ice hockey and staying active on the ice.', 'Passionné de hockey sur glace et activités sportives.', '🏒'
WHERE NOT EXISTS (SELECT 1 FROM hobbies WHERE name_en = 'Hockey');

INSERT INTO hobbies (name_en, name_fr, description_en, description_fr, icon_url)
SELECT 'Golf', 'Golf', 'Enjoy playing golf and the outdoors.', 'Amateur de golf et des activités en plein air.', '⛳'
WHERE NOT EXISTS (SELECT 1 FROM hobbies WHERE name_en = 'Golf');

INSERT INTO hobbies (name_en, name_fr, description_en, description_fr, icon_url)
SELECT 'Football', 'Football', 'Interest in American football and soccer.', 'Intérêt pour le football américain et le soccer.', '🏈'
WHERE NOT EXISTS (SELECT 1 FROM hobbies WHERE name_en = 'Football');

INSERT INTO hobbies (name_en, name_fr, description_en, description_fr, icon_url)
SELECT 'Soccer', 'Soccer', 'Active player and enthusiast of soccer.', 'Joueur actif et enthousiaste du soccer.', '⚽'
WHERE NOT EXISTS (SELECT 1 FROM hobbies WHERE name_en = 'Soccer');

INSERT INTO hobbies (name_en, name_fr, description_en, description_fr, icon_url)
SELECT 'Baseball', 'Baseball', 'Baseball fan and occasional player.', 'Amateur de baseball et joueur occasionnel.', '⚾'
WHERE NOT EXISTS (SELECT 1 FROM hobbies WHERE name_en = 'Baseball');

-- About Section Data
INSERT INTO about (content_en, content_fr)
SELECT 'I am a Computer Science student with over 5 years of customer service experience, skilled in team leadership and effective communication, looking for a 3-month internship starting March 2026. I aim to merge my technical expertise with strong interpersonal skills to make a meaningful impact on colleagues and employers.',
 'Je suis un étudiant en informatique avec plus de 5 ans d''expérience en service à la clientèle, compétent en leadership d''équipe et en communication efficace, à la recherche d''un stage de 3 mois débutant en mars 2026. Je vise à fusionner mon expertise technique avec de solides compétences interpersonnelles pour avoir un impact significatif sur mes collègues et employeurs.'
WHERE NOT EXISTS (SELECT 1 FROM about);
