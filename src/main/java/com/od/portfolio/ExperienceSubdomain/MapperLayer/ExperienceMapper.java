package com.od.portfolio.ExperienceSubdomain.MapperLayer;

import com.od.portfolio.ExperienceSubdomain.DataAccessLayer.Experience;
import com.od.portfolio.ExperienceSubdomain.PresentationLayer.ExperienceRequestDTO;
import com.od.portfolio.ExperienceSubdomain.PresentationLayer.ExperienceResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface ExperienceMapper {
    ExperienceResponseDTO entityToResponseDTO(Experience experience);
    Experience requestDTOToEntity(ExperienceRequestDTO requestDTO);

    void updateEntityFromDTO(ExperienceRequestDTO requestDTO, @MappingTarget Experience experience);
}
