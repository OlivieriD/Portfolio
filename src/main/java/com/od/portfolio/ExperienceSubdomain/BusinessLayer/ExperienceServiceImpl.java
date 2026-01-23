package com.od.portfolio.ExperienceSubdomain.BusinessLayer;

import com.od.portfolio.ExperienceSubdomain.DataAccessLayer.Experience;
import com.od.portfolio.ExperienceSubdomain.DataAccessLayer.ExperienceRepository;
import com.od.portfolio.ExperienceSubdomain.MapperLayer.ExperienceMapper;
import com.od.portfolio.ExperienceSubdomain.PresentationLayer.ExperienceRequestDTO;
import com.od.portfolio.ExperienceSubdomain.PresentationLayer.ExperienceResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExperienceServiceImpl implements ExperienceService {

    private final ExperienceRepository experienceRepository;
    private final ExperienceMapper experienceMapper;

    @Override
    public List<ExperienceResponseDTO> getAllExperiences() {
        return experienceRepository.findAll().stream()
                .map(experienceMapper::entityToResponseDTO)
                .toList();
    }

    @Override
    public ExperienceResponseDTO addExperience(ExperienceRequestDTO dto) {
        Experience experience = experienceMapper.requestDTOToEntity(dto);
        return experienceMapper.entityToResponseDTO(experienceRepository.save(experience));
    }

    @Override
    public ExperienceResponseDTO updateExperience(Integer id, ExperienceRequestDTO dto) {
        Experience existing = experienceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Experience not found"));
        experienceMapper.updateEntityFromDTO(dto, existing);
        return experienceMapper.entityToResponseDTO(experienceRepository.save(existing));
    }

    @Override
    public void deleteExperience(Integer id) {
        experienceRepository.deleteById(id);
    }
}