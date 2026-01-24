import React from 'react';
import { useTranslation } from 'react-i18next';
import EducationView from './EducationView';
import '../../styles/HomeView.css';

const EducationPage = () => {
    const { t } = useTranslation();
    
    return (
        <div className="home-container">
            <header className="hero">
                <h1>{t('education_title')}</h1>
                <p className="hero-subtitle">{t('education_subtitle')}</p>
            </header>

            <section className="section-wrapper" id="education">
                <div className="section-content">
                    <EducationView />
                </div>
            </section>
        </div>
    );
};

export default EducationPage;
