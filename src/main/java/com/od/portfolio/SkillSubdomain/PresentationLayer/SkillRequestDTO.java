package com.od.portfolio.SkillSubdomain.PresentationLayer;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public record SkillRequestDTO(
        @NotBlank String name,
        @Min(0) @Max(100) Integer proficiency,
        @NotBlank String category) {}
