import React from 'react';
import { useTranslation } from 'react-i18next';
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
                    <ProjectView />
                </div>
            </section>

            <section className="section-wrapper" id="skills">
                <h2>{t('skills_title')}</h2>
                <div className="section-content">
                    <SkillView />
                </div>
            </section>

            <section className="section-wrapper" id="experience">
                <h2>{t('experience_title')}</h2>
                <div className="section-content">
                    <ExperienceView />
                </div>
            </section>

            <section className="section-wrapper" id="education">
                <h2>{t('education_title')}</h2>
                <div className="section-content">
                    <EducationView />
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