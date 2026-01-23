package com.od.portfolio.EducationSubdomain.PresentationLayer;

import com.od.portfolio.EducationSubdomain.BusinessLayer.EducationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/education")
@RequiredArgsConstructor
public class EducationController {
    private final EducationService educationService;

    @GetMapping
    public List<EducationResponseDTO> getAll() {
        return educationService.getAll();
    }

    @PostMapping
    @PreAuthorize("hasAuthority('SCOPE_admin')")
    public ResponseEntity<EducationResponseDTO> create(@RequestBody EducationRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(educationService.add(dto));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('SCOPE_admin')")
    public ResponseEntity<EducationResponseDTO> update(@PathVariable Integer id, @RequestBody EducationRequestDTO dto) {
        return ResponseEntity.ok(educationService.update(id, dto));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('SCOPE_admin')")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        educationService.delete(id);
        return ResponseEntity.noContent().build();
    }
}