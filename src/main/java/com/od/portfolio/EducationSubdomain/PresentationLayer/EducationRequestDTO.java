package com.od.portfolio.EducationSubdomain.PresentationLayer;

import jakarta.validation.constraints.NotBlank;
import java.time.LocalDate;

public record EducationRequestDTO(
        @NotBlank String schoolEn,
        @NotBlank String schoolFr,
        @NotBlank String degreeEn,
        @NotBlank String degreeFr,
        String fieldOfStudyEn,
        String fieldOfStudyFr,
        LocalDate startDate,
        LocalDate endDate,
        Double gpa
) {}