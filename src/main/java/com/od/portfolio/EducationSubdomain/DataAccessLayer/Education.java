package com.od.portfolio.EducationSubdomain.DataAccessLayer;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "education")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Education {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String schoolEn;
    private String schoolFr;
    private String degreeEn;
    private String degreeFr;
    private String fieldOfStudyEn;
    private String fieldOfStudyFr;
    private LocalDate startDate;
    private LocalDate endDate;
    private Double gpa;
}