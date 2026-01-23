package com.od.portfolio.SkillSubdomain.MapperLayer;

import com.od.portfolio.SkillSubdomain.DataAccessLayer.Skill;
import com.od.portfolio.SkillSubdomain.PresentationLayer.SkillRequestDTO;
import com.od.portfolio.SkillSubdomain.PresentationLayer.SkillResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface SkillMapper {
    SkillResponseDTO entityToResponseDTO(Skill skill);
    Skill requestDTOToEntity(SkillRequestDTO dto);
    void updateEntityFromDTO(SkillRequestDTO dto, @MappingTarget Skill skill);
}