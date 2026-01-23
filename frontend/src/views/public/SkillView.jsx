import React, { useEffect, useState } from 'react';
import { SkillService } from '../../services/SkillService';

const SkillView = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        SkillService.getAll().then(res => setSkills(res.data)).catch(console.error);
    }, []);

    return (
        <div className="skills-container">
            {skills.map(skill => (
                <div key={skill.id} className="skill-badge">
                    {skill.name} <span className="level">{skill.level}/10</span>
                </div>
            ))}
        </div>
    );
};

export default SkillView;