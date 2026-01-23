package com.od.portfolio.HobbySubdomain.BusinessLayer;

import com.od.portfolio.HobbySubdomain.PresentationLayer.HobbyRequestDTO;
import com.od.portfolio.HobbySubdomain.PresentationLayer.HobbyResponseDTO;

import java.util.List;

public interface HobbyService {
    List<HobbyResponseDTO> getAll();
    HobbyResponseDTO add(HobbyRequestDTO dto);
    HobbyResponseDTO update(Integer id, HobbyRequestDTO dto);
    void delete(Integer id);
}
