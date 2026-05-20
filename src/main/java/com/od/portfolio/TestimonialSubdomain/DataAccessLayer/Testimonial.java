package com.od.portfolio.TestimonialSubdomain.DataAccessLayer;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "testimonials")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Testimonial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name = "author_name")
    private String authorName;
    
    @Column(name = "content")
    private String content;

    @Enumerated(EnumType.STRING)
    @Column(name = "approval_status", length = 50)
    @Builder.Default
    private ApprovalStatus approvalStatus = ApprovalStatus.PENDING;

    public enum ApprovalStatus {
        APPROVED, PENDING, REFUSED
    }
}
