import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Download, Eye } from 'lucide-react';
import { ResumeService } from '../../services/ResumeService';

const ResumeSection = () => {
    const { t, i18n } = useTranslation();
    const [resumeInfo, setResumeInfo] = useState(null);
    const currentLanguage = i18n.language || 'en';

    useEffect(() => {
        ResumeService.getInfo()
            .then(res => setResumeInfo(res.data))
            .catch((err) => {
                console.error("Resume info error:", err);
                setResumeInfo(null);
            });
    }, []);

    // Get language-specific data
    const getLanguageSpecificData = () => {
        if (!resumeInfo) return null;
        
        const lang = currentLanguage === 'fr' ? 'fr' : 'en';
        return {
            title: resumeInfo[`title${lang.toUpperCase()}`] || t('resume_title'),
            description: resumeInfo[`description${lang.toUpperCase()}`] || t('resume_description'),
            filename: resumeInfo[`filename${lang.toUpperCase()}`] || resumeInfo.filename,
            fileType: resumeInfo[`fileType${lang.toUpperCase()}`] || resumeInfo.fileType,
        };
    };

    // Return dummy component if not found
    if (!resumeInfo) {
        return (
            <div style={{ padding: '1rem', color: '#888', fontStyle: 'italic' }}>
                {t('no_resume_available') || 'Resume currently unavailable.'}
            </div>
        );
    }

    const langData = getLanguageSpecificData();

    return (
        <div className="resume-section" style={{ textAlign: 'center', margin: '2rem 0', padding: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <FileText size={24} />
                <h3 style={{ margin: 0 }}>{langData.title}</h3>
            </div>
            <p>{langData.description}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                <a 
                    href={ResumeService.getViewUrl(currentLanguage)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pastel-button flex items-center gap-2"
                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    <Eye size={18} /> {t('view_resume') || 'View'}
                </a>
                <a 
                    href={ResumeService.getDownloadUrl(currentLanguage)} 
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
