package com.od.portfolio.SkillSubdomain.DataAccessLayer;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "skills")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Integer proficiency;
    private String category;
}
