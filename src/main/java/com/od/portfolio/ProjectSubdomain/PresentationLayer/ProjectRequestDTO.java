package com.od.portfolio.ProjectSubdomain.PresentationLayer;

import jakarta.validation.constraints.NotBlank;
import java.util.List;

public record ProjectRequestDTO(
        @NotBlank(message = "English title is required") String titleEn,
        @NotBlank(message = "French title is required") String titleFr,
        @NotBlank(message = "English description is required") String descriptionEn,
        @NotBlank(message = "French description is required") String descriptionFr,
        String imageUrl,
        String githubLink,
        String liveLink,
        List<String> technologies
) {}