import React, { useEffect, useState } from 'react';
import { EducationService } from '../../services/EducationService';
import { useLanguage } from '../../hooks/useLanguage';

const EducationView = () => {
    const [edu, setEdu] = useState([]);
    const { tData } = useLanguage();

    useEffect(() => {
        EducationService.getAll().then(res => setEdu(res.data)).catch(console.error);
    }, []);

    return (
        <div className="education-grid">
            {edu.map(item => (
                <div key={item.id} className="education-card">
                    <h4>{item.school}</h4>
                    <p><strong>{tData(item.degreeEn, item.degreeFr)}</strong></p>
                    <p className="date">{item.startDate} - {item.endDate}</p>
                </div>
            ))}
        </div>
    );
};

export default EducationView;