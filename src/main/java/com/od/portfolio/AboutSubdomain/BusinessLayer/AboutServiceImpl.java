package com.od.portfolio.AboutSubdomain.BusinessLayer;

import com.od.portfolio.AboutSubdomain.DataAccessLayer.About;
import com.od.portfolio.AboutSubdomain.DataAccessLayer.AboutRepository;
import com.od.portfolio.AboutSubdomain.MapperLayer.AboutMapper;
import com.od.portfolio.AboutSubdomain.PresentationLayer.AboutRequestDTO;
import com.od.portfolio.AboutSubdomain.PresentationLayer.AboutResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AboutServiceImpl implements AboutService {

    private final AboutRepository aboutRepository;
    private final AboutMapper aboutMapper;

    @Override
    public AboutResponseDTO getAbout() {
        About about = aboutRepository.findById(1)
                .orElseThrow(() -> new RuntimeException("About section not found"));
        return aboutMapper.entityToResponseDTO(about);
    }

    @Override
    public AboutResponseDTO updateAbout(AboutRequestDTO dto) {
        About about = aboutRepository.findById(1)
                .orElseThrow(() -> new RuntimeException("About section not found"));
        aboutMapper.updateEntityFromDTO(dto, about);
        return aboutMapper.entityToResponseDTO(aboutRepository.save(about));
    }
}
