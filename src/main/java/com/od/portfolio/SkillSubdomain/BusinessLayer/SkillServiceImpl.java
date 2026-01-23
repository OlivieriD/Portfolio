package com.od.portfolio.SkillSubdomain.BusinessLayer;

import com.od.portfolio.SkillSubdomain.DataAccessLayer.Skill;
import com.od.portfolio.SkillSubdomain.DataAccessLayer.SkillRepository;
import com.od.portfolio.SkillSubdomain.MapperLayer.SkillMapper;
import com.od.portfolio.SkillSubdomain.PresentationLayer.SkillRequestDTO;
import com.od.portfolio.SkillSubdomain.PresentationLayer.SkillResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SkillServiceImpl implements SkillService {

    private final SkillRepository repository;
    private final SkillMapper mapper;

    @Override
    public List<SkillResponseDTO> getAll() {
        return repository.findAll()
                .stream()
                .map(mapper::entityToResponseDTO)
                .toList();
    }

    @Override
    public SkillResponseDTO add(SkillRequestDTO dto) {
        Skill skill = mapper.requestDTOToEntity(dto);
        return mapper.entityToResponseDTO(repository.save(skill));
    }

    @Override
    public SkillResponseDTO update(Integer id, SkillRequestDTO dto) {
        Skill existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Skill not found with id: " + id));

        mapper.updateEntityFromDTO(dto, existing);
        return mapper.entityToResponseDTO(repository.save(existing));
    }

    @Override
    public void delete(Integer id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Skill not found with id: " + id);
        }
        repository.deleteById(id);
    }
}