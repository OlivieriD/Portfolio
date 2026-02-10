package com.od.portfolio.SkillSubdomain.PresentationLayer;

import com.od.portfolio.SkillSubdomain.BusinessLayer.SkillService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/skills")
@RequiredArgsConstructor
public class SkillController {
    private final SkillService skillService;

    @GetMapping
    public List<SkillResponseDTO> getAll() { return skillService.getAll(); }

    @PostMapping
    public SkillResponseDTO create(@Valid @RequestBody SkillRequestDTO dto) { return skillService.add(dto); }

    @PutMapping("/{id}")
    public SkillResponseDTO update(@PathVariable Integer id, @Valid @RequestBody SkillRequestDTO dto) { return skillService.update(id, dto); }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) { skillService.delete(id); }
}