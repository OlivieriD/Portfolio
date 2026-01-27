import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FolderOpen , Lightbulb , Briefcase, GraduationCap, Mail, MessageSquareQuote  } from 'lucide-react';

const HomeView = () => {
    const { t } = useTranslation();
    
    const sections = [
        {
            id: 'projects',
            title: t('projects_title'),
            icon: FolderOpen ,
            path: '/projects',
            bgClass: 'bg-white'
        },
        {
            id: 'skills',
            title: t('skills_title'),
            icon: Lightbulb ,
            path: '/skills',
            bgClass: 'bg-gray'
        },
        {
            id: 'experience',
            title: t('experience_title'),
            icon: Briefcase,
            path: '/experience',
            bgClass: 'bg-white'
        },
        {
            id: 'education',
            title: t('education_title'),
            icon: GraduationCap,
            path: '/education',
            bgClass: 'bg-gray'
        },
        {
            id: 'contact',
            title: t('contact_title'),
            icon: Mail,
            path: '/contact',
            bgClass: 'bg-white'
        },
        {
            id: 'testimonials',
            title: t('testimonials_title'),
            icon: MessageSquareQuote,
            path: '/testimonials',
            bgClass: 'bg-gray'
        }
    ];
    
    return (
        <div className="home-container">
            <header className="hero">
                <h1>{t('home_title')}</h1>
                <p className="hero-subtitle">{t('home_subtitle')}</p>
            </header>

            <section className="sections-grid">
                {sections.map((section) => {
                    const IconComponent = section.icon;
                    return (
                        <Link 
                            key={section.id}
                            to={section.path} 
                            className={`section-card ${section.bgClass}`}
                        >
                            <div className="section-icon">
                                <IconComponent size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="section-title">{section.title}</h3>
                            <span className="view-more-text">{t('view_more')}</span>
                        </Link>
                    );
                })}
            </section>
        </div>
    );
};

export default HomeView;