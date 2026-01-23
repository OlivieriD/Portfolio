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
    private String authorName;
    private String content;
    private Boolean approved = false;
}
