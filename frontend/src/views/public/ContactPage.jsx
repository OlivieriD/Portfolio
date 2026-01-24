import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactView from './ContactView';
import '../../styles/HomeView.css';

const ContactPage = () => {
    const { t } = useTranslation();
    
    return (
        <div className="home-container">
            <header className="hero">
                <h1>{t('contact_title')}</h1>
                <p className="hero-subtitle">{t('contact_subtitle')}</p>
            </header>

            <section className="section-wrapper" id="contact">
                <div className="section-content">
                    <ContactView />
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
