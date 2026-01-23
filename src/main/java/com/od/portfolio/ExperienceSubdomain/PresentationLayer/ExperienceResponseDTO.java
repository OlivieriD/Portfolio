package com.od.portfolio.ExperienceSubdomain.PresentationLayer;

import java.time.LocalDate;

public record ExperienceResponseDTO(
        Integer id,
        String company,
        String roleEn,
        String roleFr,
        String descriptionEn,
        String descriptionFr,
        LocalDate startDate,
        LocalDate endDate,
        String location
) {}
