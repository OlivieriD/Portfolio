import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';
import { FileText, Trash2 } from 'lucide-react';
import ResumeManagementModal from '../../components/admin/ResumeManagementModal';
import { ResumeService } from '../../services/ResumeService';
import '../../styles/AdminDashboard.css';

const AppManagement = () => {
    const { user } = useAuth0();
    const { t } = useTranslation();
    const [showResumeModal, setShowResumeModal] = useState(false);
    const [resumeInfo, setResumeInfo] = useState(null);
    const [deleteMessage, setDeleteMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchResumeInfo();
    }, []);

    const fetchResumeInfo = async () => {
        try {
            const res = await ResumeService.getInfo();
            setResumeInfo(res.data);
        } catch (err) {
            console.error('Error fetching resume info:', err);
            setResumeInfo(null);
        }
    };

    const handleDeleteResume = async (language) => {
        if (!window.confirm(t('confirm_delete_resume') || `Are you sure you want to delete the ${language.toUpperCase()} resume?`)) {
            return;
        }

        try {
            await ResumeService.deleteBilingual(language);
            setDeleteMessage({ type: 'success', text: t('resume_deleted_success') || `${language.toUpperCase()} resume deleted successfully` });
            fetchResumeInfo(); // Refresh
            setTimeout(() => setDeleteMessage({ type: '', text: '' }), 3000);
        } catch (err) {
            console.error('Error deleting resume:', err);
            setDeleteMessage({ type: 'error', text: t('resume_delete_error') || `Failed to delete ${language.toUpperCase()} resume` });
            setTimeout(() => setDeleteMessage({ type: '', text: '' }), 3000);
        }
    };

    const handleModalSave = () => {
        setShowResumeModal(false);
        fetchResumeInfo(); // Refresh after save
    };

    return (
        <div className="app-management">
            <div className="welcome-card">
                <h1 className="welcome-title">{t('admin_app_welcome')}</h1>
                <p className="welcome-subtitle">
                    {t('admin_app_logged_in')} <strong>{user?.email}</strong>
                </p>
            </div>

            <div className="resume-management-card" style={{ background: 'white', padding: '2rem', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <FileText size={32} color="#457B9D" />
                    <h2 style={{ margin: 0 }}>{t('resume_manage')}</h2>
                </div>
                
                <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                    {t('resume_modal_title')}
                </p>

                {deleteMessage.text && (
                    <div style={{ 
                        padding: '1rem', 
                        borderRadius: '8px', 
                        marginBottom: '1rem', 
                        backgroundColor: deleteMessage.type === 'success' ? '#E1F5FE' : '#FFEBEE',
                        color: deleteMessage.type === 'success' ? '#01579B' : '#B71C1C',
                        fontSize: '0.9rem'
                    }}>
                        {deleteMessage.text}
                    </div>
                )}

                <button 
                    onClick={() => setShowResumeModal(true)}
                    className="pastel-button"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}
                >
                    <FileText size={18} />
                    {t('resume_manage')}
                </button>

                {/* Display uploaded resumes */}
                {resumeInfo ? (
                    <div style={{ marginTop: '2rem' }}>
                        <h3 style={{ borderBottom: '2px solid #E8ECEF', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                            {t('resume_uploaded_list') || 'Uploaded Resumes'}
                        </h3>

                        {/* English Resume */}
                        <div style={{ 
                            padding: '1.5rem', 
                            border: '1px solid #E8ECEF', 
                            borderRadius: '8px', 
                            marginBottom: '1rem',
                            backgroundColor: resumeInfo.filenameEn ? '#F0F7FF' : '#F5F5F5'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#457B9D' }}>
                                        {t('resume_en_label') || 'English Resume'}
                                    </h4>
                                    {resumeInfo.titleEn && (
                                        <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>
                                            {t('admin_form_title')}: {resumeInfo.titleEn}
                                        </p>
                                    )}
                                    {resumeInfo.descriptionEn && (
                                        <p style={{ margin: '0.25rem 0', color: '#666', fontSize: '0.95rem' }}>
                                            {t('admin_form_description')}: {resumeInfo.descriptionEn}
                                        </p>
                                    )}
                                    {resumeInfo.filenameEn && (
                                        <p style={{ margin: '0.25rem 0', color: '#888', fontSize: '0.85rem' }}>
                                            📄 {resumeInfo.filenameEn} ({resumeInfo.fileTypeEn})
                                        </p>
                                    )}
                                    {!resumeInfo.filenameEn && (
                                        <p style={{ margin: '0.25rem 0', color: '#999', fontStyle: 'italic', fontSize: '0.9rem' }}>
                                            {t('resume_no_en') || 'No English resume uploaded'}
                                        </p>
                                    )}
                                </div>
                                {resumeInfo.filenameEn && (
                                    <button
                                        onClick={() => handleDeleteResume('en')}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            background: '#FFEBEE',
                                            color: '#B71C1C',
                                            border: 'none',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            marginLeft: '1rem',
                                            fontSize: '0.9rem',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        <Trash2 size={16} /> {t('admin_table_delete')}
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* French Resume */}
                        <div style={{ 
                            padding: '1.5rem', 
                            border: '1px solid #E8ECEF', 
                            borderRadius: '8px',
                            backgroundColor: resumeInfo.filenameFr ? '#FFF8F0' : '#F5F5F5'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#457B9D' }}>
                                        {t('resume_fr_label') || 'French Resume'}
                                    </h4>
                                    {resumeInfo.titleFr && (
                                        <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>
                                            {t('admin_form_title')}: {resumeInfo.titleFr}
                                        </p>
                                    )}
                                    {resumeInfo.descriptionFr && (
                                        <p style={{ margin: '0.25rem 0', color: '#666', fontSize: '0.95rem' }}>
                                            {t('admin_form_description')}: {resumeInfo.descriptionFr}
                                        </p>
                                    )}
                                    {resumeInfo.filenameFr && (
                                        <p style={{ margin: '0.25rem 0', color: '#888', fontSize: '0.85rem' }}>
                                            📄 {resumeInfo.filenameFr} ({resumeInfo.fileTypeFr})
                                        </p>
                                    )}
                                    {!resumeInfo.filenameFr && (
                                        <p style={{ margin: '0.25rem 0', color: '#999', fontStyle: 'italic', fontSize: '0.9rem' }}>
                                            {t('resume_no_fr') || 'No French resume uploaded'}
                                        </p>
                                    )}
                                </div>
                                {resumeInfo.filenameFr && (
                                    <button
                                        onClick={() => handleDeleteResume('fr')}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            background: '#FFEBEE',
                                            color: '#B71C1C',
                                            border: 'none',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            marginLeft: '1rem',
                                            fontSize: '0.9rem',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        <Trash2 size={16} /> {t('admin_table_delete')}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div style={{ padding: '1.5rem', backgroundColor: '#F5F5F5', borderRadius: '8px', color: '#888', fontStyle: 'italic', marginTop: '1rem' }}>
                        {t('no_resumes_uploaded') || 'No resumes uploaded yet'}
                    </div>
                )}
            </div>

            <ResumeManagementModal 
                isOpen={showResumeModal}
                onClose={() => setShowResumeModal(false)}
                onSave={handleModalSave}
            />
        </div>
    );
};

export default AppManagement;
