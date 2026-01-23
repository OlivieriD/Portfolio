package com.od.portfolio.ProjectSubdomain.MapperLayer;

import com.od.portfolio.ProjectSubdomain.DataAccessLayer.Project;
import com.od.portfolio.ProjectSubdomain.PresentationLayer.ProjectRequestDTO;
import com.od.portfolio.ProjectSubdomain.PresentationLayer.ProjectResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface ProjectMapper {
    ProjectResponseDTO entityToResponseDTO(Project project);

    Project requestDTOToEntity(ProjectRequestDTO dto);

    void updateEntityFromDTO(ProjectRequestDTO dto, @MappingTarget Project project);
}