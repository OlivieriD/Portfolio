package com.od.portfolio.HobbySubdomain.BusinessLayer;

import com.od.portfolio.HobbySubdomain.DataAccessLayer.Hobby;
import com.od.portfolio.HobbySubdomain.DataAccessLayer.HobbyRepository;
import com.od.portfolio.HobbySubdomain.MapperLayer.HobbyMapper;
import com.od.portfolio.HobbySubdomain.PresentationLayer.HobbyRequestDTO;
import com.od.portfolio.HobbySubdomain.PresentationLayer.HobbyResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HobbyServiceImpl implements HobbyService {
    private final HobbyRepository repository;
    private final HobbyMapper mapper;

    public List<HobbyResponseDTO> getAll() {
        return repository.findAll().stream().map(mapper::entityToResponseDTO).toList();
    }

    public HobbyResponseDTO add(HobbyRequestDTO dto) {
        return mapper.entityToResponseDTO(repository.save(mapper.requestDTOToEntity(dto)));
    }

    public HobbyResponseDTO update(Integer id, HobbyRequestDTO dto) {
        Hobby existing = repository.findById(id).orElseThrow();
        mapper.updateEntityFromDTO(dto, existing);
        return mapper.entityToResponseDTO(repository.save(existing));
    }

    public void delete(Integer id) { repository.deleteById(id); }
}
