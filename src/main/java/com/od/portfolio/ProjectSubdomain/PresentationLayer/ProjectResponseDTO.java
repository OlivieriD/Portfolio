package com.od.portfolio.ProjectSubdomain.PresentationLayer;

import java.util.List;

public record ProjectResponseDTO(
        Integer id,
        String titleEn,
        String titleFr,
        String descriptionEn,
        String descriptionFr,
        String imageUrl,
        String githubLink,
        String liveLink,
        List<String> technologies
) {}