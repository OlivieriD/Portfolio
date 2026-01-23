package com.od.portfolio.EducationSubdomain.PresentationLayer;

import java.time.LocalDate;

public record EducationResponseDTO(
        Integer id,
        String schoolEn,
        String schoolFr,
        String degreeEn,
        String degreeFr,
        String fieldOfStudyEn,
        String fieldOfStudyFr,
        LocalDate startDate,
        LocalDate endDate,
        Double gpa
) {}