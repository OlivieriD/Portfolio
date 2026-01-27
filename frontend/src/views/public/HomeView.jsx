import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FolderOpen , Lightbulb , Briefcase, GraduationCap, Mail, MessageSquareQuote, Trophy, Flag, CircleDot, Medal, Target } from 'lucide-react';
import { AboutService } from '../../services/AboutService';
import { HobbyService } from '../../services/HobbyService';
import { useLanguage } from '../../hooks/useLanguage';

const HomeView = () => {
    const { t } = useTranslation();
    const { currentLang } = useLanguage();
    const [aboutContent, setAboutContent] = useState('');
    const [hobbies, setHobbies] = useState([]);
    
    // Map hobby names to lucide-react icons
    const getHobbyIcon = (hobbyName) => {
        const iconMap = {
            'Hockey': Trophy,
            'Golf': Flag,
            'Football': Target,
            'Soccer': CircleDot,
            'Baseball': Medal,
        };
        return iconMap[hobbyName] || null;
    };
    
    useEffect(() => {
        AboutService.getAbout()
            .then(res => {
                const content = currentLang === 'fr' ? res.data.contentFr : res.data.contentEn;
                setAboutContent(content);
            })
            .catch(err => console.error("Error fetching about:", err));
    }, [currentLang]);

        useEffect(() => {
            HobbyService.getAll()
                .then(res => {
                    setHobbies(res.data);
                })
                .catch(err => console.error("Error fetching hobbies:", err));
        }, []);
    
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
            </header>

            <section className="about-section">
                <p className="about-text">
                    {aboutContent}
                </p>
            </section>

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

            {hobbies.length > 0 && (
                <section className="hobbies-section">
                    <h2 className="hobbies-title">{t('hobbies_title') || 'Hobbies & Interests'}</h2>
                    <div className="hobbies-grid">
                        {hobbies.map((hobby) => {
                            const HobbyIcon = getHobbyIcon(currentLang === 'fr' ? hobby.nameFr : hobby.nameEn);
                            return (
                                <div key={hobby.id} className="hobby-card">
                                    <div className="hobby-icon-wrapper">
                                        {HobbyIcon ? (
                                            <HobbyIcon size={48} />
                                        ) : (
                                            <span className="hobby-emoji">{hobby.iconUrl}</span>
                                        )}
                                    </div>
                                    <h3 className="hobby-name">{currentLang === 'fr' ? hobby.nameFr : hobby.nameEn}</h3>
                                    <p className="hobby-description">
                                        {currentLang === 'fr' ? hobby.descriptionFr : hobby.descriptionEn}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}
        </div>
    );
};

export default HomeView;