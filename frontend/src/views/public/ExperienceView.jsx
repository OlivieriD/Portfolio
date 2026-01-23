import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { useLanguage } from '../../hooks/useLanguage';

const ExperienceView = () => {
    const [experiences, setExperiences] = useState([]);
    const { tData } = useLanguage();

    useEffect(() => {
        axiosInstance.get('/experience')
            .then(res => setExperiences(res.data))
            .catch(err => console.error("Error fetching experience:", err));
    }, []);

    return (
        <div className="experience-list">
            {experiences.length > 0 ? (
                experiences.map(exp => (
                    <div key={exp.id} className="experience-card">
                        <h3>{exp.company}</h3>
                        <p className="role">{tData(exp.roleEn, exp.roleFr)}</p>
                        <p className="description">{tData(exp.descriptionEn, exp.descriptionFr)}</p>
                        <span className="date-tag">{exp.startDate} - {exp.endDate || 'Present'}</span>
                    </div>
                ))
            ) : (
                <p>No experiences found.</p>
            )}
        </div>
    );
};

export default ExperienceView;