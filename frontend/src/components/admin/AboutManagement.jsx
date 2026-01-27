import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AboutService } from '../../services/AboutService';

const AboutManagement = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        contentEn: '',
        contentFr: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        AboutService.getAbout()
            .then(res => {
                setFormData({
                    contentEn: res.data.contentEn,
                    contentFr: res.data.contentFr
                });
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching about:", err);
                setLoading(false);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        
        try {
            await AboutService.updateAbout(formData);
            setMessage(t('admin_success'));
            setTimeout(() => setMessage(''), 3000);
        } catch (err) {
            setMessage(t('admin_form_error'));
            console.error("Error updating about:", err);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <main className="content">
                <div className="loading-state">{t('admin_loading')}</div>
            </main>
        );
    }

    return (
        <main className="content">
            <div className="content-header">
                <div>
                    <h1 className="content-title">About Section Management</h1>
                    <p className="content-subtitle">Edit the about section content in English and French</p>
                </div>
            </div>

            <div className="admin-form-wrapper">
                <form onSubmit={handleSubmit} className="admin-form">
                    <div className="form-group">
                        <label htmlFor="contentEn">English Content</label>
                        <textarea
                            id="contentEn"
                            name="contentEn"
                            value={formData.contentEn}
                            onChange={handleInputChange}
                            required
                            rows="8"
                            placeholder="Enter English content for the about section"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contentFr">French Content (Contenu Français)</label>
                        <textarea
                            id="contentFr"
                            name="contentFr"
                            value={formData.contentFr}
                            onChange={handleInputChange}
                            required
                            rows="8"
                            placeholder="Entrez le contenu français pour la section À propos"
                        />
                    </div>

                    <div className="form-actions">
                        <button 
                            type="submit" 
                            disabled={saving}
                            className="pastel-button"
                        >
                            {saving ? t('admin_loading') : 'Save Changes'}
                        </button>
                    </div>

                    {message && (
                        <div className={message.includes('Error') ? 'error-msg' : 'success-msg'}>
                            {message}
                        </div>
                    )}
                </form>
            </div>
        </main>
    );
};

export default AboutManagement;
