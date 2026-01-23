package com.od.portfolio.SkillSubdomain.BusinessLayer;

import com.od.portfolio.SkillSubdomain.PresentationLayer.SkillRequestDTO;
import com.od.portfolio.SkillSubdomain.PresentationLayer.SkillResponseDTO;
import java.util.List;

public interface SkillService {
    List<SkillResponseDTO> getAll();
    SkillResponseDTO add(SkillRequestDTO dto);
    SkillResponseDTO update(Integer id, SkillRequestDTO dto);
    void delete(Integer id);
}