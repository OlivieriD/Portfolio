package com.od.portfolio.AboutSubdomain.MapperLayer;

import com.od.portfolio.AboutSubdomain.DataAccessLayer.About;
import com.od.portfolio.AboutSubdomain.PresentationLayer.AboutRequestDTO;
import com.od.portfolio.AboutSubdomain.PresentationLayer.AboutResponseDTO;
import org.springframework.stereotype.Component;

@Component
public class AboutMapper {
    public AboutResponseDTO entityToResponseDTO(About about) {
        return new AboutResponseDTO(about.getId(), about.getContentEn(), about.getContentFr());
    }

    public About requestDTOToEntity(AboutRequestDTO dto) {
        return About.builder()
                .contentEn(dto.contentEn())
                .contentFr(dto.contentFr())
                .build();
    }

    public void updateEntityFromDTO(AboutRequestDTO dto, About about) {
        about.setContentEn(dto.contentEn());
        about.setContentFr(dto.contentFr());
    }
}
