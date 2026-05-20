import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload, Trash2, CheckCircle, AlertCircle } from 'lucide-react';
import { ResumeService } from '../../services/ResumeService';
import '../../styles/AdminModal.css';

const ResumeManagementModal = ({ isOpen, onClose, onSave }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        titleEn: '',
        titleFr: '',
        descriptionEn: '',
        descriptionFr: '',
    });
    const [resumeFiles, setResumeFiles] = useState({
        en: null,
        fr: null,
    });
    const [currentResumes, setCurrentResumes] = useState({
        en: null,
        fr: null,
    });
    const [message, setMessage] = useState({ type: '', text: '' });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen) {
            fetchResumeData();
        }
    }, [isOpen]);

    const fetchResumeData = async () => {
        try {
            const res = await ResumeService.getInfo();
            if (res.data) {
                setCurrentResumes(res.data);
                setFormData({
                    titleEn: res.data.titleEn || '',
                    titleFr: res.data.titleFr || '',
                    descriptionEn: res.data.descriptionEn || '',
                    descriptionFr: res.data.descriptionFr || '',
                });
            }
        } catch (err) {
            console.error('Error fetching resume data:', err);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e, language) => {
        const file = e.target.files[0];
        if (file) {
            setResumeFiles(prev => ({
                ...prev,
                [language]: file
            }));
        }
    };

    const handleDelete = async (language) => {
        if (!window.confirm(t('admin_app_confirm_delete_resume'))) return;

        try {
            await ResumeService.deleteBilingual(language);
            setCurrentResumes(prev => ({
                ...prev,
                [language]: null
            }));
            setResumeFiles(prev => ({
                ...prev,
                [language]: null
            }));
            setMessage({ type: 'success', text: t('admin_app_resume_deleted') });
            setTimeout(() => setMessage({ type: '', text: '' }), 3000);
        } catch (err) {
            setMessage({ type: 'error', text: t('admin_app_resume_delete_failed') });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const uploadPromises = [];

            // Upload files if new ones are selected
            if (resumeFiles.en || resumeFiles.fr) {
                const formDataUpload = new FormData();
                if (resumeFiles.en) formDataUpload.append('fileEn', resumeFiles.en);
                if (resumeFiles.fr) formDataUpload.append('fileFr', resumeFiles.fr);
                uploadPromises.push(ResumeService.uploadBilingual(formDataUpload));
            }

            // Update metadata
            uploadPromises.push(ResumeService.updateMetadata({
                titleEn: formData.titleEn,
                titleFr: formData.titleFr,
                descriptionEn: formData.descriptionEn,
                descriptionFr: formData.descriptionFr,
            }));

            await Promise.all(uploadPromises);
            setMessage({ type: 'success', text: t('admin_success') });
            setResumeFiles({ en: null, fr: null });
            setTimeout(() => {
                fetchResumeData();
                onSave();
            }, 1000);
        } catch (err) {
            console.error('Error saving resume:', err);
            setMessage({ type: 'error', text: t('admin_form_error') });
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{t('resume_modal_title')}</h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                {message.text && (
                    <div style={{ 
                        padding: '1rem', 
                        borderRadius: '8px', 
                        marginBottom: '1rem',
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        backgroundColor: message.type === 'success' ? '#E1F5FE' : '#FFEBEE',
                        color: message.type === 'success' ? '#01579B' : '#B71C1C'
                    }}>
                        {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="modal-form">
                    {/* English Section */}
                    <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #E8ECEF' }}>
                        <h3 style={{ marginTop: 0 }}>{t('resume_en_label')}</h3>
                        
                        <div className="form-group">
                            <label>{t('resume_title_en')}</label>
                            <input
                                type="text"
                                name="titleEn"
                                value={formData.titleEn}
                                onChange={handleInputChange}
                                placeholder="e.g., My Resume"
                            />
                        </div>

                        <div className="form-group">
                            <label>{t('resume_description_en')}</label>
                            <textarea
                                name="descriptionEn"
                                value={formData.descriptionEn}
                                onChange={handleInputChange}
                                placeholder="e.g., Download my latest resume"
                                rows="2"
                            />
                        </div>

                        {currentResumes.en ? (
                            <div style={{ padding: '1rem', border: '1px solid #E8ECEF', borderRadius: '8px', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <p style={{ margin: 0, fontWeight: 'bold' }}>{t('resume_current_en')}</p>
                                    <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                                        {currentResumes.en.filename} ({currentResumes.en.fileType})
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleDelete('en')}
                                    className="delete-button"
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#FFEBEE', color: '#B71C1C', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}
                                >
                                    <Trash2 size={18} /> {t('admin_table_delete')}
                                </button>
                            </div>
                        ) : (
                            <p style={{ fontStyle: 'italic', color: '#888', marginBottom: '1rem' }}>{t('resume_no_en')}</p>
                        )}

                        <label className="pastel-button" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Upload size={18} />
                            {t('resume_upload_en')}
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => handleFileChange(e, 'en')}
                                style={{ display: 'none' }}
                            />
                        </label>
                        {resumeFiles.en && <p style={{ fontSize: '0.875rem', color: '#4CAF50', marginTop: '0.5rem' }}>✓ {resumeFiles.en.name}</p>}
                    </div>

                    {/* French Section */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginTop: 0 }}>{t('resume_fr_label')}</h3>
                        
                        <div className="form-group">
                            <label>{t('resume_title_fr')}</label>
                            <input
                                type="text"
                                name="titleFr"
                                value={formData.titleFr}
                                onChange={handleInputChange}
                                placeholder="ex. Mon CV"
                            />
                        </div>

                        <div className="form-group">
                            <label>{t('resume_description_fr')}</label>
                            <textarea
                                name="descriptionFr"
                                value={formData.descriptionFr}
                                onChange={handleInputChange}
                                placeholder="ex. T\u00e9l\u00e9chargez mon dernier CV"
                                rows="2"
                            />
                        </div>

                        {currentResumes.fr ? (
                            <div style={{ padding: '1rem', border: '1px solid #E8ECEF', borderRadius: '8px', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <p style={{ margin: 0, fontWeight: 'bold' }}>{t('resume_current_fr')}</p>
                                    <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                                        {currentResumes.fr.filename} ({currentResumes.fr.fileType})
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleDelete('fr')}
                                    className="delete-button"
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#FFEBEE', color: '#B71C1C', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}
                                >
                                    <Trash2 size={18} /> {t('admin_table_delete')}
                                </button>
                            </div>
                        ) : (
                            <p style={{ fontStyle: 'italic', color: '#888', marginBottom: '1rem' }}>{t('resume_no_fr')}</p>
                        )}

                        <label className="pastel-button" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Upload size={18} />
                            {t('resume_upload_fr')}
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => handleFileChange(e, 'fr')}
                                style={{ display: 'none' }}
                            />
                        </label>
                        {resumeFiles.fr && <p style={{ fontSize: '0.875rem', color: '#4CAF50', marginTop: '0.5rem' }}>✓ {resumeFiles.fr.name}</p>}
                    </div>

                    <div className="modal-actions">
                        <button type="button" className="cancel-btn" onClick={onClose}>{t('admin_cancel_btn')}</button>
                        <button type="submit" className="save-btn" disabled={loading}>{loading ? t('admin_loading') : t('admin_save_btn')}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResumeManagementModal;
