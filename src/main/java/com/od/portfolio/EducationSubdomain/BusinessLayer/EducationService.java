package com.od.portfolio.EducationSubdomain.BusinessLayer;

import com.od.portfolio.EducationSubdomain.PresentationLayer.EducationRequestDTO;
import com.od.portfolio.EducationSubdomain.PresentationLayer.EducationResponseDTO;
import java.util.List;

public interface EducationService {
    List<EducationResponseDTO> getAll();
    EducationResponseDTO add(EducationRequestDTO dto);
    EducationResponseDTO update(Integer id, EducationRequestDTO dto);
    void delete(Integer id);
}