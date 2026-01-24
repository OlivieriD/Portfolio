import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectView from './ProjectView';
import '../../styles/HomeView.css';

const ProjectsPage = () => {
    const { t } = useTranslation();
    
    return (
        <div className="home-container">
            <header className="hero">
                <h1>{t('projects_title')}</h1>
                <p className="hero-subtitle">{t('projects_subtitle')}</p>
            </header>

            <section className="section-wrapper" id="projects">
                <div className="section-content">
                    <ProjectView />
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
