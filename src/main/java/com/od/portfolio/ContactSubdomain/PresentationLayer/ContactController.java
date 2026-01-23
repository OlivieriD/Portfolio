package com.od.portfolio.ContactSubdomain.PresentationLayer;

import com.od.portfolio.ContactSubdomain.BusinessLayer.MessageService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/messages")
@RequiredArgsConstructor
public class ContactController {

    private final MessageService messageService;

    @PostMapping
    public ResponseEntity<Void> sendMessage(@Valid @RequestBody MessageRequestDTO dto) {
        messageService.saveMessage(dto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping
    @PreAuthorize("hasAuthority('SCOPE_admin')")
    public ResponseEntity<List<MessageResponseDTO>> getAllMessages() {
        return ResponseEntity.ok(messageService.getAllMessages());
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('SCOPE_admin')")
    public ResponseEntity<Void> deleteMessage(@PathVariable Integer id) {
        messageService.deleteMessage(id);
        return ResponseEntity.noContent().build();
    }
}