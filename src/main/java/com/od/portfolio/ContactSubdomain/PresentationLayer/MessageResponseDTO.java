package com.od.portfolio.ContactSubdomain.PresentationLayer;

import java.time.LocalDateTime;

public record MessageResponseDTO(
        Integer id,
        String senderName,
        String senderEmail,
        String subject,
        String content,
        LocalDateTime sentAt
) {}