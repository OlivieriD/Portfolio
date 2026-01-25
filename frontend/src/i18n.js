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
                nav_app_management: "App Management",
                
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
                
                // Testimonials
                nav_testimonials: "Testimonials",
                testimonials_title: "Testimonials",
                testimonials_subtitle: "Hear from people I've worked with and helped",
                testimonials_empty: "No testimonials yet. Be the first to share!",
                testimonials_form_title: "Share Your Feedback",
                testimonials_form_subtitle: "Tell us about your experience working with me",
                testimonials_form_name: "Your Name",
                testimonials_form_name_placeholder: "John Doe",
                testimonials_form_content: "Your Testimonial",
                testimonials_form_content_placeholder: "Share your feedback and experience...",
                testimonials_form_submit: "Submit Testimonial",
                testimonials_form_submitting: "Submitting...",
                testimonials_form_note: "Your testimonial will be reviewed before appearing on the site.",
                testimonials_submission_success: "Thank you! Your testimonial has been submitted and is awaiting approval.",
                testimonials_submission_error: "Error submitting testimonial. Please try again.",
                
                // Admin Dashboard
                admin_title: "Admin Dashboard",
                admin_subtitle: "Manage your portfolio content",
                admin_app_management: "App Management",
                admin_projects: "Projects",
                admin_skills: "Skills",
                admin_experiences: "Experience",
                admin_education: "Education",
                admin_hobbies: "Hobbies",
                admin_testimonials: "Testimonials",
                admin_contacts: "Contact Messages",
                admin_add_new: "+ Add New",
                admin_confirm_delete: "Confirm Delete",
                admin_delete_message: "Are you sure you want to delete this item? This action cannot be undone.",
                admin_delete_btn: "Delete",
                admin_cancel_btn: "Cancel",
                admin_save_btn: "Save",
                admin_edit_modal_title: "Edit",
                admin_add_modal_title: "Add",
                admin_form_error: "Failed to save. Please try again.",
                admin_loading: "Loading...",
                admin_empty_state: "No items found. Click 'Add New' to create one.",
                admin_success: "Operation completed successfully!",
                
                // View More
                view_more: "View More",
                view_all: "View All",
                
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
                nav_app_management: "Gestion de l'application",
                
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
                
                // Testimonials
                nav_testimonials: "Témoignages",
                testimonials_title: "Témoignages",
                testimonials_subtitle: "Entendez parler des personnes avec qui j'ai travaillé",
                testimonials_empty: "Pas encore de témoignages. Soyez le premier à partager!",
                testimonials_form_title: "Partagez Vos Commentaires",
                testimonials_form_subtitle: "Dites-nous comment s'est déroulée votre collaboration",
                testimonials_form_name: "Votre Nom",
                testimonials_form_name_placeholder: "Jean Dupont",
                testimonials_form_content: "Votre Témoignage",
                testimonials_form_content_placeholder: "Partagez vos commentaires et votre expérience...",
                testimonials_form_submit: "Soumettre le Témoignage",
                testimonials_form_submitting: "Soumission en cours...",
                testimonials_form_note: "Votre témoignage sera examiné avant d'apparaître sur le site.",
                testimonials_submission_success: "Merci! Votre témoignage a été soumis et attend l'approbation.",
                testimonials_submission_error: "Erreur lors de la soumission. Veuillez réessayer.",
                
                // Admin Dashboard
                admin_title: "Tableau de Bord Admin",
                admin_subtitle: "Gérez le contenu de votre portfolio",
                admin_app_management: "Gestion de l'Application",
                admin_projects: "Projets",
                admin_skills: "Compétences",
                admin_experiences: "Expérience",
                admin_education: "Éducation",
                admin_hobbies: "Loisirs",
                admin_testimonials: "Témoignages",
                admin_contacts: "Messages de Contact",
                admin_add_new: "+ Ajouter un nouveau",
                admin_confirm_delete: "Confirmer la Suppression",
                admin_delete_message: "Êtes-vous sûr de vouloir supprimer cet élément? Cette action ne peut pas être annulée.",
                admin_delete_btn: "Supprimer",
                admin_cancel_btn: "Annuler",
                admin_save_btn: "Enregistrer",
                admin_edit_modal_title: "Modifier",
                admin_add_modal_title: "Ajouter",
                admin_form_error: "Échec de la sauvegarde. Veuillez réessayer.",
                admin_loading: "Chargement...",
                admin_empty_state: "Aucun élément trouvé. Cliquez sur 'Ajouter un nouveau' pour en créer un.",
                admin_success: "Opération terminée avec succès!",
                
                // View More
                view_more: "Voir plus",
                view_all: "Voir tout",
                
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