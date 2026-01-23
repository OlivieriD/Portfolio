package com.od.portfolio.ProjectSubdomain.BusinessLayer;

import com.od.portfolio.ProjectSubdomain.PresentationLayer.ProjectRequestDTO;
import com.od.portfolio.ProjectSubdomain.PresentationLayer.ProjectResponseDTO;
import java.util.List;

public interface ProjectService {
    List<ProjectResponseDTO> getAllProjects();
    ProjectResponseDTO addProject(ProjectRequestDTO dto);
    ProjectResponseDTO updateProject(Integer id, ProjectRequestDTO dto);
    void deleteProject(Integer id);
}