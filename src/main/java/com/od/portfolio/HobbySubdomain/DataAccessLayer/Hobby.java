package com.od.portfolio.HobbySubdomain.DataAccessLayer;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "hobbies")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Hobby {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nameEn;
    private String nameFr;
    private String descriptionEn;
    private String descriptionFr;
    private String iconUrl;
}