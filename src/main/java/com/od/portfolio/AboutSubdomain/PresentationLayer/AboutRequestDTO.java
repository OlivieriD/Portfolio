package com.od.portfolio.AboutSubdomain.PresentationLayer;

import jakarta.validation.constraints.NotBlank;

public record AboutRequestDTO(
        @NotBlank(message = "English content is required") String contentEn,
        @NotBlank(message = "French content is required") String contentFr
) {}
