package com.od.portfolio.ProjectSubdomain.PresentationLayer;

import com.od.portfolio.ProjectSubdomain.BusinessLayer.ProjectService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    public ResponseEntity<List<ProjectResponseDTO>> getAll() {
        return ResponseEntity.ok(projectService.getAllProjects());
    }

    @PostMapping
    public ResponseEntity<ProjectResponseDTO> create(@Valid @RequestBody ProjectRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(projectService.addProject(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProjectResponseDTO> update(@PathVariable Integer id, @Valid @RequestBody ProjectRequestDTO dto) {
        return ResponseEntity.ok(projectService.updateProject(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        projectService.deleteProject(id);
        return ResponseEntity.noContent().build();
    }
}