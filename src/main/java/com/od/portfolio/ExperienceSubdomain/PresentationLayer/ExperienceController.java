package com.od.portfolio.ExperienceSubdomain.PresentationLayer;

import com.od.portfolio.ExperienceSubdomain.BusinessLayer.ExperienceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/experiences")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ExperienceController {

    private final ExperienceService experienceService;

    @GetMapping
    public ResponseEntity<List<ExperienceResponseDTO>> getAll() {
        return ResponseEntity.ok(experienceService.getAllExperiences());
    }

    @PostMapping
    @PreAuthorize("hasAuthority('SCOPE_admin')")
    public ResponseEntity<ExperienceResponseDTO> create(@RequestBody ExperienceRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(experienceService.addExperience(dto));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('SCOPE_admin')")
    public ResponseEntity<ExperienceResponseDTO> update(@PathVariable Integer id, @RequestBody ExperienceRequestDTO dto) {
        return ResponseEntity.ok(experienceService.updateExperience(id, dto));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('SCOPE_admin')")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        experienceService.deleteExperience(id);
        return ResponseEntity.noContent().build();
    }
}
