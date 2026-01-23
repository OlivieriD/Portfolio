package com.od.portfolio.ProjectSubdomain.BusinessLayer;

import com.od.portfolio.ProjectSubdomain.DataAccessLayer.Project;
import com.od.portfolio.ProjectSubdomain.DataAccessLayer.ProjectRepository;
import com.od.portfolio.ProjectSubdomain.MapperLayer.ProjectMapper;
import com.od.portfolio.ProjectSubdomain.PresentationLayer.ProjectRequestDTO;
import com.od.portfolio.ProjectSubdomain.PresentationLayer.ProjectResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository repository;
    private final ProjectMapper mapper;

    @Override
    public List<ProjectResponseDTO> getAllProjects() {
        return repository.findAll()
                .stream()
                .map(mapper::entityToResponseDTO)
                .toList();
    }

    @Override
    public ProjectResponseDTO addProject(ProjectRequestDTO dto) {
        Project project = mapper.requestDTOToEntity(dto);
        return mapper.entityToResponseDTO(repository.save(project));
    }

    @Override
    public ProjectResponseDTO updateProject(Integer id, ProjectRequestDTO dto) {
        Project existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id: " + id));

        mapper.updateEntityFromDTO(dto, existing);
        return mapper.entityToResponseDTO(repository.save(existing));
    }

    @Override
    public void deleteProject(Integer id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Cannot delete: Project not found with id: " + id);
        }
        repository.deleteById(id);
    }
}