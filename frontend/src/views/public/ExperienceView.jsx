import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axiosInstance from '../../api/axiosInstance';
import { useLanguage } from '../../hooks/useLanguage';

const ExperienceView = ({ limit }) => {
    const [experiences, setExperiences] = useState([]);
    const { t } = useTranslation();
    const { tData } = useLanguage();

    useEffect(() => {
        axiosInstance.get('/experiences')
            .then(res => {
                const sorted = res.data.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
                setExperiences(limit ? sorted.slice(0, limit) : sorted);
            })
            .catch(err => console.error("Error fetching experience:", err));
    }, [limit]);

    return (
        <div className="experience-list">
            {experiences.length > 0 ? (
                experiences.map(exp => (
                    <div key={exp.id} className="experience-card">
                        <h3>{exp.company}</h3>
                        <p className="role">{tData(exp.roleEn, exp.roleFr)}</p>
                        <p className="description">{tData(exp.descriptionEn, exp.descriptionFr)}</p>
                        <p className="location">{exp.location}</p>
                        <span className="date-tag">
                            {new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - {exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : t('experience_present')}
                        </span>
                    </div>
                ))
            ) : (
                <p className="empty-state-text">{t('experience_empty')}</p>
            )}
        </div>
    );
};

export default ExperienceView;