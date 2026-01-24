import React from 'react';
import { useTranslation } from 'react-i18next';
import ExperienceView from './ExperienceView';
import '../../styles/HomeView.css';

const ExperiencePage = () => {
    const { t } = useTranslation();
    
    return (
        <div className="home-container">
            <header className="hero">
                <h1>{t('experience_title')}</h1>
                <p className="hero-subtitle">{t('experience_subtitle')}</p>
            </header>

            <section className="section-wrapper" id="experience">
                <div className="section-content">
                    <ExperienceView />
                </div>
            </section>
        </div>
    );
};

export default ExperiencePage;
