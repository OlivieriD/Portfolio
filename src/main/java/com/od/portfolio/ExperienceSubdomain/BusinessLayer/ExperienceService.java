package com.od.portfolio.ExperienceSubdomain.BusinessLayer;

import com.od.portfolio.ExperienceSubdomain.PresentationLayer.ExperienceRequestDTO;
import com.od.portfolio.ExperienceSubdomain.PresentationLayer.ExperienceResponseDTO;

import java.util.List;

public interface ExperienceService {
    List<ExperienceResponseDTO> getAllExperiences();
    ExperienceResponseDTO addExperience(ExperienceRequestDTO dto);
    ExperienceResponseDTO updateExperience(Integer id, ExperienceRequestDTO dto);
    void deleteExperience(Integer id);
}
