import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SkillService } from '../../services/SkillService';

const SkillView = ({ limit }) => {
    const [skills, setSkills] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        SkillService.getAll().then(res => {
            const sorted = res.data.sort((a, b) => new Date(b.id) - new Date(a.id));
            setSkills(limit ? sorted.slice(0, limit) : sorted);
        }).catch(console.error);
    }, [limit]);

    return (
        <div className="skills-container">
            {skills.length > 0 ? (
                skills.map(skill => (
                    <div key={skill.id} className="skill-badge">
                        {skill.name} 
                        {skill.proficiency && <span className="skill-level"> • {skill.proficiency}%</span>}
                    </div>
                ))
            ) : (
                <p className="empty-state-text">{t('skills_empty')}</p>
            )}
        </div>
    );
};

export default SkillView;