package com.od.portfolio.TestimonialSubdomain.BusinessLayer;

import com.od.portfolio.TestimonialSubdomain.DataAccessLayer.Testimonial;
import com.od.portfolio.TestimonialSubdomain.DataAccessLayer.TestimonialRepository;
import com.od.portfolio.TestimonialSubdomain.MapperLayer.TestimonialMapper;
import com.od.portfolio.TestimonialSubdomain.PresentationLayer.TestimonialRequestDTO;
import com.od.portfolio.TestimonialSubdomain.PresentationLayer.TestimonialResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TestimonialServiceImpl implements TestimonialService {
    private final TestimonialRepository repository;
    private final TestimonialMapper mapper;

    public List<TestimonialResponseDTO> getAllApproved() {
        return repository.findAllByApprovalStatus(Testimonial.ApprovalStatus.APPROVED)
                .stream()
                .map(mapper::entityToResponseDTO)
                .toList();
    }

    public List<TestimonialResponseDTO> getAll() {
        return repository.findAll().stream().map(mapper::entityToResponseDTO).toList();
    }

    public TestimonialResponseDTO create(TestimonialRequestDTO dto) {
        Testimonial t = mapper.requestDTOToEntity(dto);
        t.setApprovalStatus(Testimonial.ApprovalStatus.PENDING);
        return mapper.entityToResponseDTO(repository.save(t));
    }

    public TestimonialResponseDTO updateApprovalStatus(Integer id, Testimonial.ApprovalStatus status) {
        Testimonial t = repository.findById(id).orElseThrow();
        t.setApprovalStatus(status);
        return mapper.entityToResponseDTO(repository.save(t));
    }

    public void delete(Integer id) { 
        repository.deleteById(id); 
    }
}