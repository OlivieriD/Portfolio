import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ExperienceView from './ExperienceView';
import EducationView from './EducationView';
import SkillView from './SkillView';
import ProjectView from './ProjectView';
import ContactView from './ContactView';

const HomeView = () => {
    const { t } = useTranslation();
    
    return (
        <div className="home-container">
            <header className="hero">
                <h1>{t('home_title')}</h1>
                <p className="hero-subtitle">{t('home_subtitle')}</p>
            </header>

            <section className="section-wrapper" id="projects">
                <h2>{t('projects_title')}</h2>
                <div className="section-content">
                    <ProjectView limit={1} />
                </div>
                <div className="view-more-container">
                    <Link to="/projects" className="view-more-btn">{t('view_more')}</Link>
                </div>
            </section>

            <section className="section-wrapper" id="skills">
                <h2>{t('skills_title')}</h2>
                <div className="section-content">
                    <SkillView limit={1} />
                </div>
                <div className="view-more-container">
                    <Link to="/skills" className="view-more-btn">{t('view_more')}</Link>
                </div>
            </section>

            <section className="section-wrapper" id="experience">
                <h2>{t('experience_title')}</h2>
                <div className="section-content">
                    <ExperienceView limit={1} />
                </div>
                <div className="view-more-container">
                    <Link to="/experience" className="view-more-btn">{t('view_more')}</Link>
                </div>
            </section>

            <section className="section-wrapper" id="education">
                <h2>{t('education_title')}</h2>
                <div className="section-content">
                    <EducationView limit={1} />
                </div>
                <div className="view-more-container">
                    <Link to="/education" className="view-more-btn">{t('view_more')}</Link>
                </div>
            </section>

            <section className="section-wrapper" id="contact">
                <h2>{t('contact_title')}</h2>
                <div className="section-content">
                    <ContactView />
                </div>
            </section>
        </div>
    );
};

export default HomeView;