import React from 'react';
import { useTranslation } from 'react-i18next';
import SkillView from './SkillView';
import '../../styles/HomeView.css';

const SkillsPage = () => {
    const { t } = useTranslation();
    
    return (
        <div className="home-container">
            <header className="hero">
                <h1>{t('skills_title')}</h1>
                <p className="hero-subtitle">{t('skills_subtitle')}</p>
            </header>

            <section className="section-wrapper" id="skills">
                <div className="section-content">
                    <SkillView />
                </div>
            </section>
        </div>
    );
};

export default SkillsPage;
