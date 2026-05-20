package com.od.portfolio.TestimonialSubdomain.PresentationLayer;

import jakarta.validation.constraints.NotBlank;
import com.od.portfolio.TestimonialSubdomain.DataAccessLayer.Testimonial;

public record TestimonialRequestDTO(
        @NotBlank String authorName,
        @NotBlank String content,
        Testimonial.ApprovalStatus approvalStatus
) {}