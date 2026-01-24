package com.od.portfolio.ProjectSubdomain.DataAccessLayer;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "projects")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String titleEn;
    private String titleFr;

    @Column(columnDefinition = "TEXT")
    private String descriptionEn;
    @Column(columnDefinition = "TEXT")
    private String descriptionFr;

    @Column(columnDefinition = "TEXT")
    private String imageUrl;
    private String githubLink;
    private String liveLink;

    @ElementCollection
    @CollectionTable(name = "project_technologies", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "technology")
    private List<String> technologies;
}