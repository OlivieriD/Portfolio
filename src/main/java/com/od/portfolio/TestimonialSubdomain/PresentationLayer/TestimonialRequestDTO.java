package com.od.portfolio.TestimonialSubdomain.PresentationLayer;

import jakarta.validation.constraints.NotBlank;

public record TestimonialRequestDTO(
        @NotBlank String authorName,
        @NotBlank String content,
        boolean isApproved
) {}