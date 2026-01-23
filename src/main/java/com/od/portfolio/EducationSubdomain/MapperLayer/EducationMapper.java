package com.od.portfolio.EducationSubdomain.MapperLayer;

import com.od.portfolio.EducationSubdomain.DataAccessLayer.Education;
import com.od.portfolio.EducationSubdomain.PresentationLayer.EducationRequestDTO;
import com.od.portfolio.EducationSubdomain.PresentationLayer.EducationResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface EducationMapper {
    EducationResponseDTO entityToResponseDTO(Education education);
    Education requestDTOToEntity(EducationRequestDTO dto);
    void updateEntityFromDTO(EducationRequestDTO dto, @MappingTarget Education education);
}