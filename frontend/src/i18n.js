import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: { 
            translation: {
                // Navigation
                nav_home: "Home",
                nav_projects: "Projects",
                nav_skills: "Skills",
                nav_experience: "Experience",
                nav_education: "Education",
                nav_contact: "Contact",
                
                // Home Page
                home_title: "My Portfolio",
                home_subtitle: "Welcome to my professional portfolio",
                
                // Projects
                projects_title: "Projects",
                projects_subtitle: "Explore my latest work and projects",
                projects_empty: "No projects to display yet.",
                
                // Skills
                skills_title: "Skills",
                skills_subtitle: "My technical expertise and competencies",
                skills_empty: "No skills to display yet.",
                
                // Experience
                experience_title: "Experience",
                experience_subtitle: "My professional background and work history",
                experience_empty: "No experiences found.",
                experience_present: "Present",
                
                // Education
                education_title: "Education",
                education_subtitle: "My educational qualifications and learning journey",
                education_empty: "No education records found.",
                
                // Contact
                contact_title: "Contact",
                contact_subtitle: "Get in touch with me",
                contact_name: "Name",
                contact_email: "Email",
                contact_subject: "Subject",
                contact_message: "Message",
                contact_name_placeholder: "Your name",
                contact_email_placeholder: "your.email@example.com",
                contact_subject_placeholder: "Message subject",
                contact_message_placeholder: "Your message here...",
                contact_submit: "Send Message",
                contact_success: "Message Sent!",
                contact_error: "Error sending message.",
                
                // Common
                loading: "Loading Portfolio...",
                technologies: "Technologies",
                view_project: "View Project",
                github: "GitHub",
                live_demo: "Live Demo"
            }
        },
        fr: { 
            translation: {
                // Navigation
                nav_home: "Accueil",
                nav_projects: "Projets",
                nav_skills: "Compétences",
                nav_experience: "Expérience",
                nav_education: "Éducation",
                nav_contact: "Contact",
                
                // Home Page
                home_title: "Mon Portfolio",
                home_subtitle: "Bienvenue sur mon portfolio professionnel",
                
                // Projects
                projects_title: "Projets",
                projects_subtitle: "Découvrez mes derniers travaux et projets",
                projects_empty: "Aucun projet à afficher pour le moment.",
                
                // Skills
                skills_title: "Compétences",
                skills_subtitle: "Mon expertise technique et mes compétences",
                skills_empty: "Aucune compétence à afficher pour le moment.",
                
                // Experience
                experience_title: "Expérience",
                experience_subtitle: "Mon parcours professionnel et mon historique de travail",
                experience_empty: "Aucune expérience trouvée.",
                experience_present: "Actuellement",
                
                // Education
                education_title: "Éducation",
                education_subtitle: "Mes qualifications éducatives et mon parcours d'apprentissage",
                education_empty: "Aucun enregistrement d'éducation trouvé.",
                
                // Contact
                contact_title: "Contact",
                contact_subtitle: "Contactez-moi",
                contact_name: "Nom",
                contact_email: "Courriel",
                contact_subject: "Sujet",
                contact_message: "Message",
                contact_name_placeholder: "Votre nom",
                contact_email_placeholder: "votre.email@exemple.com",
                contact_subject_placeholder: "Sujet du message",
                contact_message_placeholder: "Votre message ici...",
                contact_submit: "Envoyer le message",
                contact_success: "Message envoyé!",
                contact_error: "Erreur lors de l'envoi du message.",
                
                // Common
                loading: "Chargement du portfolio...",
                technologies: "Technologies",
                view_project: "Voir le projet",
                github: "GitHub",
                live_demo: "Démo en direct"
            }
        }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

export default i18n;