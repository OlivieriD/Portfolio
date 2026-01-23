package com.od.portfolio.ExperienceSubdomain.PresentationLayer;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

public record ExperienceRequestDTO(
        @NotBlank(message = "Company is required") String company,
        @NotBlank(message = "English role is required") String roleEn,
        @NotBlank(message = "French role is required") String roleFr,
        String descriptionEn,
        String descriptionFr,
        @NotNull(message = "Start date is required") LocalDate startDate,
        LocalDate endDate,
        String location
) {}