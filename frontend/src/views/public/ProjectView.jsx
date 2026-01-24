import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectService } from '../../services/ProjectService';
import { useLanguage } from '../../hooks/useLanguage';

const ProjectView = () => {
    const [projects, setProjects] = useState([]);
    const { t } = useTranslation();
    const { tData } = useLanguage();

    useEffect(() => {
        ProjectService.getAll()
            .then(res => setProjects(res.data))
            .catch(err => console.error("Error fetching projects:", err));
    }, []);

    return (
        <div className="project-grid">
            {projects.length > 0 ? (
                projects.map(project => (
                    <div key={project.id} className="project-card">
                        {project.imageUrl && (
                            <img src={project.imageUrl} alt={tData(project.titleEn, project.titleFr)} className="project-image" />
                        )}
                        <div className="project-info">
                            <h3 className="project-title">{tData(project.titleEn, project.titleFr)}</h3>
                            <p className="project-description">{tData(project.descriptionEn, project.descriptionFr)}</p>
                            {project.technologies && project.technologies.length > 0 && (
                                <div className="tech-tags">
                                   {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <p className="empty-state-text">{t('projects_empty')}</p>
            )}
        </div>
    );
};

export default ProjectView;