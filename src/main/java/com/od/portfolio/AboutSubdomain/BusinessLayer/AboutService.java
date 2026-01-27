package com.od.portfolio.AboutSubdomain.BusinessLayer;

import com.od.portfolio.AboutSubdomain.PresentationLayer.AboutRequestDTO;
import com.od.portfolio.AboutSubdomain.PresentationLayer.AboutResponseDTO;

public interface AboutService {
    AboutResponseDTO getAbout();
    AboutResponseDTO updateAbout(AboutRequestDTO dto);
}
