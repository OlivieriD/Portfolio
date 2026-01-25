import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axiosInstance from '../../api/axiosInstance';
import { sanitizeObjectStrings, isValidEmail, sanitizeString } from '../../utils/sanitize';

const ContactView = () => {
    const { t } = useTranslation();
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        senderName: '', senderEmail: '', subject: '', content: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Basic validation
        if (!isValidEmail(formData.senderEmail) || !sanitizeString(formData.senderName)) {
            setStatus(t('contact_error'));
            return;
        }
        const safePayload = sanitizeObjectStrings(formData);
        try {
            await axiosInstance.post('/messages', safePayload);
            setStatus(t('contact_success'));
            setFormData({ senderName: '', senderEmail: '', subject: '', content: '' });
        } catch (err) {
            setStatus(t('contact_error'));
        }
    };

    return (
        <div className="contact-card">
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">{t('contact_name')}</label>
                    <input
                        id="name"
                        type="text"
                        placeholder={t('contact_name_placeholder')}
                        value={formData.senderName}
                        onChange={(e) => setFormData({...formData, senderName: e.target.value})}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">{t('contact_email')}</label>
                    <input
                        id="email"
                        type="email"
                        placeholder={t('contact_email_placeholder')}
                        value={formData.senderEmail}
                        onChange={(e) => setFormData({...formData, senderEmail: e.target.value})}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="subject">{t('contact_subject')}</label>
                    <input
                        id="subject"
                        type="text"
                        placeholder={t('contact_subject_placeholder')}
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="message">{t('contact_message')}</label>
                    <textarea
                        id="message"
                        placeholder={t('contact_message_placeholder')}
                        value={formData.content}
                        onChange={(e) => setFormData({...formData, content: e.target.value})}
                        required
                        rows="6"
                    />
                </div>
                
                <button className="pastel-button" type="submit">{t('contact_submit')}</button>
                {status && <p className={status.includes('Error') || status.includes('Erreur') ? 'error-msg' : 'success-msg'}>{status}</p>}
            </form>
        </div>
    );
};

export default ContactView;