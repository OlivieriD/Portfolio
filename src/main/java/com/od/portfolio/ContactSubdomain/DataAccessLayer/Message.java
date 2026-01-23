package com.od.portfolio.ContactSubdomain.DataAccessLayer;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "messages")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String senderName;

    @Column(nullable = false)
    private String senderEmail;

    private String subject;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    private LocalDateTime sentAt;
}