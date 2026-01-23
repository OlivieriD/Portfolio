import React, { useEffect, useState } from 'react';
import { ProjectService } from '../../services/ProjectService';
import { useLanguage } from '../../hooks/useLanguage';

const ProjectView = () => {
    const [projects, setProjects] = useState([]);
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
                            <img src={project.imageUrl} alt={project.titleEn} className="project-image" />
                        )}
                        <div className="project-info">
                            <h3>{tData(project.titleEn, project.titleFr)}</h3>
                            <p>{tData(project.descriptionEn, project.descriptionFr)}</p>
                            <div className="tech-tags">
                               {(project.technologies || []).map(tech => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No projects to display yet.</p>
            )}
        </div>
    );
};

export default ProjectView;