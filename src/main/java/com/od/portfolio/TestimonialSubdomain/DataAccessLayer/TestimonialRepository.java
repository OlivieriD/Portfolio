package com.od.portfolio.TestimonialSubdomain.DataAccessLayer;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TestimonialRepository extends JpaRepository<Testimonial, Integer> {
    List<Testimonial> findAllByApprovalStatus(Testimonial.ApprovalStatus status);
}