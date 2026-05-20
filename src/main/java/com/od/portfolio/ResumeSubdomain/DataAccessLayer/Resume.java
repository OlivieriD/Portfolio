package com.od.portfolio.ResumeSubdomain.DataAccessLayer;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "resumes")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Resume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // English CV fields
    private String titleEn;
    private String descriptionEn;
    private String filenameEn;
    private String fileTypeEn;
    @Column(name = "data_en", columnDefinition = "BYTEA")
    private byte[] dataEn;

    // French CV fields
    private String titleFr;
    private String descriptionFr;
    private String filenameFr;
    private String fileTypeFr;
    @Column(name = "data_fr", columnDefinition = "BYTEA")
    private byte[] dataFr;

    // Legacy single-language fields (for backward compatibility)
    private String filename;
    private String fileType;
    @Column(name = "data", columnDefinition = "BYTEA")
    private byte[] data;
}
