package com.od.portfolio.HobbySubdomain.PresentationLayer;

public record HobbyResponseDTO(
        Integer id,
        String nameEn,
        String nameFr,
        String descriptionEn,
        String descriptionFr,
        String iconUrl) {}
