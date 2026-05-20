package com.od.portfolio.TestimonialSubdomain.PresentationLayer;

import com.od.portfolio.TestimonialSubdomain.BusinessLayer.TestimonialService;
import com.od.portfolio.TestimonialSubdomain.DataAccessLayer.Testimonial;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/testimonials")
@RequiredArgsConstructor
public class TestimonialController {
    private final TestimonialService testimonialService;

    @GetMapping("/public") // Public view: only approved
    public List<TestimonialResponseDTO> getPublicTestimonials() {
        return testimonialService.getAllApproved();
    }

    @GetMapping // Admin view: all testimonials
    public List<TestimonialResponseDTO> getAll() {
        return testimonialService.getAll();
    }

    @PostMapping // Public submission
    public ResponseEntity<TestimonialResponseDTO> submit(@RequestBody TestimonialRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(testimonialService.create(dto));
    }

    @PatchMapping("/{id}/approve") // Admin approval toggle
    public ResponseEntity<TestimonialResponseDTO> updateStatus(@PathVariable Integer id, @RequestParam Testimonial.ApprovalStatus status) {
        return ResponseEntity.ok(testimonialService.updateApprovalStatus(id, status));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        testimonialService.delete(id);
        return ResponseEntity.noContent().build();
    }
}