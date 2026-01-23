package com.od.portfolio.ExperienceSubdomain.DataAccessLayer;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "experiences")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String company;
    private String roleEn;
    private String roleFr;
    private String descriptionEn;
    private String descriptionFr;
    private LocalDate startDate;
    private LocalDate endDate;
    private String location;
}
