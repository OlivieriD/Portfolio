package com.od.portfolio.TestimonialSubdomain.BusinessLayer;

import com.od.portfolio.TestimonialSubdomain.PresentationLayer.TestimonialRequestDTO;
import com.od.portfolio.TestimonialSubdomain.PresentationLayer.TestimonialResponseDTO;
import java.util.List;

public interface TestimonialService {
    List<TestimonialResponseDTO> getAllApproved(); // Public
    List<TestimonialResponseDTO> getAll(); // Admin
    TestimonialResponseDTO create(TestimonialRequestDTO dto);
    TestimonialResponseDTO updateApprovalStatus(Integer id, boolean status);
    void delete(Integer id);
}