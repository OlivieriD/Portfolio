package com.od.portfolio.TestimonialSubdomain.PresentationLayer;

public record TestimonialResponseDTO(
        Integer id,
        String authorName,
        String content,
        boolean isApproved
) {}