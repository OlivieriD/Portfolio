package com.od.portfolio.SkillSubdomain.PresentationLayer;

public record SkillResponseDTO(
        Integer id,
        String name,
        Integer proficiency,
        String category) {}
