import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SkillService } from '../../services/SkillService';
import { Code, Database, Cloud, Wrench, BookOpen, Layers, Workflow, TestTube, Globe } from 'lucide-react';

const SkillView = ({ limit }) => {
    const [skills, setSkills] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        SkillService.getAll().then(res => {
            const sorted = res.data.sort((a, b) => (b.proficiency || 0) - (a.proficiency || 0));
            setSkills(limit ? sorted.slice(0, limit) : sorted);
        }).catch(console.error);
    }, [limit]);

    const getIconForCategory = (category) => {
        const categoryLower = category?.toLowerCase() || '';
        if (categoryLower.includes('programming') || categoryLower.includes('frontend')) return Code;
        if (categoryLower.includes('database')) return Database;
        if (categoryLower.includes('cloud') || categoryLower.includes('devops')) return Cloud;
        if (categoryLower.includes('tools')) return Wrench;
        if (categoryLower.includes('framework')) return Layers;
        if (categoryLower.includes('methodology')) return BookOpen;
        if (categoryLower.includes('concepts')) return Workflow;
        if (categoryLower.includes('testing')) return TestTube;
        return Globe;
    };

    return (
        <div className="skills-grid">
            {skills.length > 0 ? (
                skills.map(skill => {
                    const IconComponent = getIconForCategory(skill.category);
                    return (
                        <div key={skill.id} className="skill-card">
                            <div className="skill-icon">
                                <IconComponent size={36} strokeWidth={1.5} />
                            </div>
                            <h4 className="skill-name">{skill.name}</h4>
                            {skill.category && <span className="skill-category">{skill.category}</span>}
                        </div>
                    );
                })
            ) : (
                <p className="empty-state-text">{t('skills_empty')}</p>
            )}
        </div>
    );
};

export default SkillView;