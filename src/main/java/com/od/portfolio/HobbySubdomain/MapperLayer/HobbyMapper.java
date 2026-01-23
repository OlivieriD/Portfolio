package com.od.portfolio.HobbySubdomain.MapperLayer;

import com.od.portfolio.HobbySubdomain.DataAccessLayer.Hobby;
import com.od.portfolio.HobbySubdomain.PresentationLayer.HobbyRequestDTO;
import com.od.portfolio.HobbySubdomain.PresentationLayer.HobbyResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface HobbyMapper {
    HobbyResponseDTO entityToResponseDTO(Hobby hobby);
    Hobby requestDTOToEntity(HobbyRequestDTO dto);
    void updateEntityFromDTO(HobbyRequestDTO dto, @MappingTarget Hobby hobby);
}