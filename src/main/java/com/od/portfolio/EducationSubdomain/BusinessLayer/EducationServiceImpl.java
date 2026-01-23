package com.od.portfolio.EducationSubdomain.BusinessLayer;

import com.od.portfolio.EducationSubdomain.DataAccessLayer.Education;
import com.od.portfolio.EducationSubdomain.DataAccessLayer.EducationRepository;
import com.od.portfolio.EducationSubdomain.MapperLayer.EducationMapper;
import com.od.portfolio.EducationSubdomain.PresentationLayer.EducationRequestDTO;
import com.od.portfolio.EducationSubdomain.PresentationLayer.EducationResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EducationServiceImpl implements EducationService {
    private final EducationRepository repository;
    private final EducationMapper mapper;

    public List<EducationResponseDTO> getAll() {
        return repository.findAll().stream().map(mapper::entityToResponseDTO).toList();
    }

    public EducationResponseDTO add(EducationRequestDTO dto) {
        Education edu = mapper.requestDTOToEntity(dto);
        return mapper.entityToResponseDTO(repository.save(edu));
    }

    public EducationResponseDTO update(Integer id, EducationRequestDTO dto) {
        Education existing = repository.findById(id).orElseThrow();
        mapper.updateEntityFromDTO(dto, existing);
        return mapper.entityToResponseDTO(repository.save(existing));
    }

    public void delete(Integer id) { repository.deleteById(id); }
}