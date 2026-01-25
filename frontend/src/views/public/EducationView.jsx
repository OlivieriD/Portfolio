import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EducationService } from '../../services/EducationService';
import { useLanguage } from '../../hooks/useLanguage';

const EducationView = ({ limit }) => {
    const [edu, setEdu] = useState([]);
    const { t } = useTranslation();
    const { tData } = useLanguage();

    useEffect(() => {
        EducationService.getAll().then(res => {
            const sorted = res.data.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
            setEdu(limit ? sorted.slice(0, limit) : sorted);
        }).catch(console.error);
    }, [limit]);

    return (
        <div className="education-grid">
            {edu.length > 0 ? (
                edu.map(item => (
                    <div key={item.id} className="education-card">
                        <h4>{tData(item.schoolEn, item.schoolFr)}</h4>
                        <p><strong>{tData(item.degreeEn, item.degreeFr)}</strong></p>
                        {item.fieldOfStudyEn && <p>{tData(item.fieldOfStudyEn, item.fieldOfStudyFr)}</p>}
                        <p className="date">{item.startDate} - {item.endDate}</p>
                        {item.gpa && <p className="date">GPA: {item.gpa}</p>}
                    </div>
                ))
            ) : (
                <p className="empty-state-text">{t('education_empty')}</p>
            )}
        </div>
    );
};

export default EducationView;