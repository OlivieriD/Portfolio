package com.od.portfolio.TestimonialSubdomain.PresentationLayer;

import com.od.portfolio.TestimonialSubdomain.DataAccessLayer.Testimonial;

public record TestimonialResponseDTO(
        Integer id,
        String authorName,
        String content,
        Testimonial.ApprovalStatus approvalStatus
) {}