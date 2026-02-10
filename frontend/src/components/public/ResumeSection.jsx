import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Download, Eye } from 'lucide-react';
import { ResumeService } from '../../services/ResumeService';

const ResumeSection = () => {
    const { t } = useTranslation();
    const [resumeInfo, setResumeInfo] = useState(null);

    useEffect(() => {
        ResumeService.getInfo()
            .then(res => setResumeInfo(res.data))
            .catch(() => setResumeInfo(null));
    }, []);

    if (!resumeInfo) return null;

    return (
        <div className="resume-section" style={{ textAlign: 'center', margin: '2rem 0', padding: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <FileText size={24} />
                <h3 style={{ margin: 0 }}>{t('resume_title') || 'Curriculum Vitae'}</h3>
            </div>
            <p>{t('resume_description') || 'View or download my latest resume.'}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                <a 
                    href={ResumeService.getViewUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pastel-button flex items-center gap-2"
                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    <Eye size={18} /> {t('view_resume') || 'View'}
                </a>
                <a 
                    href={ResumeService.getDownloadUrl()} 
                    className="pastel-button flex items-center gap-2"
                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    <Download size={18} /> {t('download_resume') || 'Download'}
                </a>
            </div>
        </div>
    );
};

export default ResumeSection;
