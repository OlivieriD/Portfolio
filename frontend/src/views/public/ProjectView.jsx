import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectService } from '../../services/ProjectService';
import { useLanguage } from '../../hooks/useLanguage';
import { ExternalLink, Github } from 'lucide-react';

const ProjectView = ({ limit }) => {
    const [projects, setProjects] = useState([]);
    const { t } = useTranslation();
    const { tData } = useLanguage();

    useEffect(() => {
        ProjectService.getAll()
            .then(res => {
                const sorted = res.data.sort((a, b) => a.id - b.id);
                setProjects(limit ? sorted.slice(0, limit) : sorted);
            })
            .catch(err => console.error("Error fetching projects:", err));
    }, [limit]);

    return (
        <div className="projects-list">
            {projects.length > 0 ? (
                projects.map((project, index) => (
                    <div key={project.id} className={`project-row ${index % 2 === 0 ? 'left' : 'right'}`}>
                        {project.imageUrl && (
                            <div className="project-image-container">
                                <img src={project.imageUrl} alt={tData(project.titleEn, project.titleFr)} className="project-image" />
                            </div>
                        )}
                        <div className="project-content">
                            <h3 className="project-title">{tData(project.titleEn, project.titleFr)}</h3>
                            <p className="project-description">{tData(project.descriptionEn, project.descriptionFr)}</p>
                            {project.technologies && project.technologies.length > 0 && (
                                <div className="tech-tags">
                                   {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            )}
                            <div className="project-links">
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <Github size={18} />
                                        <span>GitHub</span>
                                    </a>
                                )}
                                {project.liveLink && (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <ExternalLink size={18} />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                            </div>
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