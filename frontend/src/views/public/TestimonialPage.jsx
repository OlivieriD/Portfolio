import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TestimonialService } from '../../services/TestimonialService';
import TestimonialView from './TestimonialView';
import '../../styles/TestimonialPage.css';
import { sanitizeObjectStrings, sanitizeString } from '../../utils/sanitize';

const TestimonialPage = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ authorName: '', content: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Validation: require minimal lengths
            if (!sanitizeString(formData.authorName) || !sanitizeString(formData.content, { maxLen: 5000 })) {
                throw new Error('Invalid input');
            }
            const safePayload = sanitizeObjectStrings(formData);
            await TestimonialService.create(safePayload);
            setSuccess(true);
            setFormData({ authorName: '', content: '' });
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            setError(t('testimonials_submission_error'));
            console.error("Error submitting testimonial:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home-container">
            <header className="hero">
                <h1>{t('testimonials_title')}</h1>
                <p className="hero-subtitle">{t('testimonials_subtitle')}</p>
            </header>

            <section className="section-wrapper" id="testimonials">
                <div className="section-content">
                    <TestimonialView />
                </div>
            </section>

            <section className="testimonial-form-section">
                <div className="form-container">
                    <h2>{t('testimonials_form_title')}</h2>
                    <p className="form-subtitle">{t('testimonials_form_subtitle')}</p>

                    {success && (
                        <div className="form-success">
                            <p>{t('testimonials_submission_success')}</p>
                        </div>
                    )}

                    {error && (
                        <div className="form-error">
                            <p>{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="testimonial-form">
                        <div className="form-group">
                            <label htmlFor="authorName">{t('testimonials_form_name')} *</label>
                            <input
                                id="authorName"
                                type="text"
                                name="authorName"
                                value={formData.authorName}
                                onChange={handleChange}
                                required
                                placeholder={t('testimonials_form_name_placeholder')}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">{t('testimonials_form_content')} *</label>
                            <textarea
                                id="content"
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                required
                                placeholder={t('testimonials_form_content_placeholder')}
                                rows="5"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="testimonial-submit-btn"
                        >
                            {loading ? t('testimonials_form_submitting') : t('testimonials_form_submit')}
                        </button>
                    </form>

                    <p className="form-note">{t('testimonials_form_note')}</p>
                </div>
            </section>
        </div>
    );
};

export default TestimonialPage;
