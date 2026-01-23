package com.od.portfolio.TestimonialSubdomain.MapperLayer;

import com.od.portfolio.TestimonialSubdomain.DataAccessLayer.Testimonial;
import com.od.portfolio.TestimonialSubdomain.PresentationLayer.TestimonialRequestDTO;
import com.od.portfolio.TestimonialSubdomain.PresentationLayer.TestimonialResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface TestimonialMapper {
    TestimonialResponseDTO entityToResponseDTO(Testimonial testimonial);
    Testimonial requestDTOToEntity(TestimonialRequestDTO dto);
    void updateEntityFromDTO(TestimonialRequestDTO dto, @MappingTarget Testimonial testimonial);
}