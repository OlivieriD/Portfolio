package com.od.portfolio.HobbySubdomain.PresentationLayer;

public record HobbyRequestDTO(
        String nameEn,
        String nameFr,
        String descriptionEn,
        String descriptionFr,
        String iconUrl) {}
