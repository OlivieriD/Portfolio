import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SkillService } from '../../services/SkillService';

const SkillView = () => {
    const [skills, setSkills] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        SkillService.getAll().then(res => setSkills(res.data)).catch(console.error);
    }, []);

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