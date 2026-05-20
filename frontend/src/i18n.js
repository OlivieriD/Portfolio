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
                about_me_text: "I am a Computer Science student with over 5 years of customer service experience, skilled in team leadership and effective communication, looking for a 3-month internship starting March 2026. I aim to merge my technical expertise with strong interpersonal skills to make a meaningful impact on colleagues and employers.",
                hobbies_title: "Hobbies & Interests",
                
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
                
                // Resume
                resume_title: "Curriculum Vitae",
                resume_description: "View or download my latest resume.",
                view_resume: "View",
                download_resume: "Download",
                no_resume_available: "Resume currently unavailable.",
                resume_title_en: "Resume Title (EN)",
                resume_title_fr: "Resume Title (FR)",
                resume_description_en: "Resume Description (EN)",
                resume_description_fr: "Resume Description (FR)",
                resume_upload_en: "Upload Resume (EN)",
                resume_upload_fr: "Upload Resume (FR)",
                resume_en_label: "English Resume",
                resume_fr_label: "French Resume",
                resume_current_en: "Current English Resume:",
                resume_current_fr: "Current French Resume:",
                resume_no_en: "No English resume uploaded.",
                resume_no_fr: "No French resume uploaded.",
                resume_manage: "Manage Resumes",
                resume_modal_title: "Manage Resumes (English & French)",
                resume_uploaded_list: "Uploaded Resumes",
                resume_deleted_success: "Resume deleted successfully!",
                resume_delete_error: "Failed to delete resume. Please try again.",
                confirm_delete_resume: "Are you sure you want to delete this resume?",
                no_resumes_uploaded: "No resumes uploaded yet",
                admin_form_title: "Title",
                admin_form_description: "Description",
                loading: "Loading Portfolio...",
                technologies: "Technologies",
                view_project: "View Project",
                github: "GitHub",
                live_demo: "Live Demo",
                
                // Admin Table & Actions
                admin_table_actions: "Actions",
                admin_table_edit: "Edit",
                admin_table_delete: "Delete",
                admin_about_section: "About Section",
                
                // Form Labels - Projects
                admin_form_title_en: "Title (EN)",
                admin_form_title_fr: "Title (FR)",
                admin_form_description_en: "Description (EN)",
                admin_form_description_fr: "Description (FR)",
                admin_form_image_url: "Image URL",
                admin_form_github_link: "GitHub Link",
                admin_form_live_link: "Live Link",
                admin_form_technologies: "Technologies (comma-separated)",
                
                // Form Labels - Skills
                admin_form_skill_name: "Skill Name",
                admin_form_proficiency: "Proficiency (0-100)",
                admin_form_category: "Category",
                admin_form_category_frontend: "Frontend",
                admin_form_category_backend: "Backend",
                admin_form_category_database: "Database",
                admin_form_category_devops: "DevOps",
                admin_form_category_tools: "Tools",
                
                // Form Labels - Experience
                admin_form_company: "Company",
                admin_form_role_en: "Role (EN)",
                admin_form_role_fr: "Role (FR)",
                admin_form_start_date: "Start Date",
                admin_form_end_date: "End Date",
                admin_form_location: "Location",
                admin_form_current_position: "Leave empty if current position",
                
                // Form Labels - Education
                admin_form_school_en: "School (EN)",
                admin_form_school_fr: "School (FR)",
                admin_form_degree_en: "Degree (EN)",
                admin_form_degree_fr: "Degree (FR)",
                admin_form_field_of_study_en: "Field of Study (EN)",
                admin_form_field_of_study_fr: "Field of Study (FR)",
                admin_form_gpa: "GPA",
                
                // Form Labels - Hobbies
                admin_form_name_en: "Name (EN)",
                admin_form_name_fr: "Name (FR)",
                admin_form_icon: "Icon",
                
                // Form Labels - Testimonials
                admin_form_author_name: "Author Name",
                admin_form_content: "Content",
                admin_form_approved: "Approved",
                
                // Table Column Headers
                admin_col_title: "Title",
                admin_col_technologies: "Technologies",
                admin_col_name: "Name",
                admin_col_proficiency: "Proficiency",
                admin_col_category: "Category",
                admin_col_company: "Company",
                admin_col_role: "Role",
                admin_col_start_date: "Start Date",
                admin_col_end_date: "End Date",
                admin_col_school: "School",
                admin_col_degree: "Degree",
                admin_col_author: "Author",
                admin_col_subject: "Subject",
                admin_col_sent_at: "Sent At",
                admin_col_sender_name: "Sender Name",
                admin_col_sender_email: "Sender Email",
                admin_col_content: "Content",
                admin_form_required: "*",
                admin_form_select: "Select...",
                
                // About Management
                admin_about_title: "About Section Management",
                admin_about_subtitle: "Edit the about section content in English and French",
                admin_about_content_en: "English Content",
                admin_about_content_fr: "French Content (Contenu Français)",
                admin_about_placeholder_en: "Enter English content for the about section",
                admin_about_placeholder_fr: "Entrez le contenu français pour la section À propos",
                admin_about_save: "Save Changes",
                
                // App Management
                admin_app_welcome: "Welcome, Admin!",
                admin_app_logged_in: "You are logged in as",
                admin_app_resume_management: "Resume Management",
                admin_app_resume_uploaded: "Resume uploaded successfully!",
                admin_app_resume_upload_failed: "Failed to upload resume.",
                admin_app_confirm_delete_resume: "Are you sure you want to delete the current resume?",
                admin_app_resume_deleted: "Resume deleted successfully.",
                admin_app_resume_delete_failed: "Failed to delete resume.",
                admin_app_current_resume: "Current Resume:",
                admin_app_no_resume: "No resume uploaded yet.",
                admin_app_uploading: "Uploading...",
                admin_app_upload_resume: "Upload New Resume",
                admin_app_supported_formats: "Suported formats: PDF, DOC, DOCX",
                admin_app_yes: "Yes",
                admin_app_no: "No",
                
                // Testimonial Approval
                testimonial_approve_title: "Approve Testimonial",
                testimonial_approve_confirm: "Would you like to approve this testimonial?",
                testimonial_approve_btn: "Approve",
                testimonial_reject: "Reject",
                testimonial_approve: "Yes, Approve",
                testimonial_already_approved: "This testimonial is already approved",
                testimonial_status: "Status",
                testimonial_status_yes: "Yes",
                testimonial_status_pending: "Pending",
                testimonial_status_refused: "Refused",
                testimonial_pending: "Pending",
                testimonial_refuse: "Refuse"
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
                about_me_text: "Je suis un étudiant en informatique avec plus de 5 ans d'expérience en service à la clientèle, compétent en leadership d'équipe et en communication efficace, à la recherche d'un stage de 3 mois débutant en mars 2026. Je vise à fusionner mon expertise technique avec de solides compétences interpersonnelles pour avoir un impact significatif sur mes collègues et employeurs.",
                hobbies_title: "Loisirs et intérêts",
                
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
                
                // Resume
                resume_title: "Curriculum Vitae",
                resume_description: "Consultez ou téléchargez mon dernier CV.",
                view_resume: "Consulter",
                download_resume: "Télécharger",
                no_resume_available: "Le CV n'est pas disponible actuellement.",
                resume_title_en: "Titre du CV (EN)",
                resume_title_fr: "Titre du CV (FR)",
                resume_description_en: "Description du CV (EN)",
                resume_description_fr: "Description du CV (FR)",
                resume_upload_en: "Télécharger CV (EN)",
                resume_upload_fr: "Télécharger CV (FR)",
                resume_en_label: "CV Anglais",
                resume_fr_label: "CV Français",
                resume_current_en: "CV Anglais Actuel:",
                resume_current_fr: "CV Français Actuel:",
                resume_no_en: "Aucun CV anglais téléchargé.",
                resume_no_fr: "Aucun CV français téléchargé.",
                resume_manage: "Gérer les CV",
                resume_modal_title: "Gérer les CV (Anglais et Français)",
                resume_uploaded_list: "CV Téléchargés",
                resume_deleted_success: "CV supprimé avec succès!",
                resume_delete_error: "Erreur lors de la suppression du CV. Veuillez réessayer.",
                confirm_delete_resume: "Êtes-vous sûr de vouloir supprimer ce CV?",
                no_resumes_uploaded: "Aucun CV téléchargé pour le moment",
                admin_form_title: "Titre",
                admin_form_description: "Description",
                loading: "Chargement du portfolio...",
                technologies: "Technologies",
                view_project: "Voir le projet",
                github: "GitHub",
                live_demo: "Démo en direct",
                
                // Admin Table & Actions
                admin_table_actions: "Actions",
                admin_table_edit: "Modifier",
                admin_table_delete: "Supprimer",
                admin_about_section: "Section À Propos",
                
                // Form Labels - Projects
                admin_form_title_en: "Titre (EN)",
                admin_form_title_fr: "Titre (FR)",
                admin_form_description_en: "Description (EN)",
                admin_form_description_fr: "Description (FR)",
                admin_form_image_url: "URL de l'image",
                admin_form_github_link: "Lien GitHub",
                admin_form_live_link: "Lien Direct",
                admin_form_technologies: "Technologies (séparées par des virgules)",
                
                // Form Labels - Skills
                admin_form_skill_name: "Nom de la Compétence",
                admin_form_proficiency: "Compétence (0-100)",
                admin_form_category: "Catégorie",
                admin_form_category_frontend: "Frontend",
                admin_form_category_backend: "Backend",
                admin_form_category_database: "Base de Données",
                admin_form_category_devops: "DevOps",
                admin_form_category_tools: "Outils",
                
                // Form Labels - Experience
                admin_form_company: "Entreprise",
                admin_form_role_en: "Poste (EN)",
                admin_form_role_fr: "Poste (FR)",
                admin_form_start_date: "Date de Début",
                admin_form_end_date: "Date de Fin",
                admin_form_location: "Lieu",
                admin_form_current_position: "Laisser vide si poste actuel",
                
                // Form Labels - Education
                admin_form_school_en: "École (EN)",
                admin_form_school_fr: "École (FR)",
                admin_form_degree_en: "Diplôme (EN)",
                admin_form_degree_fr: "Diplôme (FR)",
                admin_form_field_of_study_en: "Domaine d'Étude (EN)",
                admin_form_field_of_study_fr: "Domaine d'Étude (FR)",
                admin_form_gpa: "Moyenne Générale",
                
                // Form Labels - Hobbies
                admin_form_name_en: "Nom (EN)",
                admin_form_name_fr: "Nom (FR)",
                admin_form_icon: "Icône",
                
                // Form Labels - Testimonials
                admin_form_author_name: "Nom de l'Auteur",
                admin_form_content: "Contenu",
                admin_form_approved: "Approuvé",
                
                // Table Column Headers
                admin_col_title: "Titre",
                admin_col_technologies: "Technologies",
                admin_col_name: "Nom",
                admin_col_proficiency: "Compétence",
                admin_col_category: "Catégorie",
                admin_col_company: "Entreprise",
                admin_col_role: "Poste",
                admin_col_start_date: "Date de Début",
                admin_col_end_date: "Date de Fin",
                admin_col_school: "École",
                admin_col_degree: "Diplôme",
                admin_col_author: "Auteur",
                admin_col_subject: "Sujet",
                admin_col_sent_at: "Envoyé le",
                admin_col_sender_name: "Nom de l'Expéditeur",
                admin_col_sender_email: "Email de l'Expéditeur",
                admin_col_content: "Contenu",
                admin_form_required: "*",
                admin_form_select: "Sélectionner...",
                
                // About Management
                admin_about_title: "Gestion de la Section À Propos",
                admin_about_subtitle: "Modifiez le contenu de la section À propos en anglais et en français",
                admin_about_content_en: "Contenu Anglais",
                admin_about_content_fr: "Contenu Français",
                admin_about_placeholder_en: "Entrez le contenu anglais pour la section À propos",
                admin_about_placeholder_fr: "Entrez le contenu français pour la section À propos",
                admin_about_save: "Enregistrer les Modifications",
                
                // App Management
                admin_app_welcome: "Bienvenue, Admin!",
                admin_app_logged_in: "Vous êtes connecté en tant que",
                admin_app_resume_management: "Gestion du CV",
                admin_app_resume_uploaded: "CV téléchargé avec succès!",
                admin_app_resume_upload_failed: "Échec du téléchargement du CV.",
                admin_app_confirm_delete_resume: "Êtes-vous sûr de vouloir supprimer le CV actuel?",
                admin_app_resume_deleted: "CV supprimé avec succès.",
                admin_app_resume_delete_failed: "Échec de la suppression du CV.",
                admin_app_current_resume: "CV Actuel:",
                admin_app_no_resume: "Aucun CV téléchargé.",
                admin_app_uploading: "Téléchargement en cours...",
                admin_app_upload_resume: "Télécharger un Nouveau CV",
                admin_app_supported_formats: "Formats Supportés: PDF, DOC, DOCX",
                admin_app_yes: "Oui",
                admin_app_no: "Non",
                
                // Testimonial Approval
                testimonial_approve_title: "Approuver le Témoignage",
                testimonial_approve_confirm: "Voulez-vous approuver ce témoignage?",
                testimonial_approve_btn: "Approuver",
                testimonial_reject: "Rejeter",
                testimonial_approve: "Oui, Approuver",
                testimonial_already_approved: "Ce témoignage est déjà approuvé",
                testimonial_status: "Statut",
                testimonial_status_yes: "Oui",
                testimonial_status_pending: "En attente",
                testimonial_status_refused: "Refusé",
                testimonial_pending: "En attente",
                testimonial_refuse: "Refuser"
            }
        }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

export default i18n;