package com.od.portfolio.ContactSubdomain.PresentationLayer;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record MessageRequestDTO(
        @NotBlank(message = "Name is required") String senderName,
        @NotBlank(message = "Email is required") @Email String senderEmail,
        String subject,
        @NotBlank(message = "Message content is required") String content
) {}