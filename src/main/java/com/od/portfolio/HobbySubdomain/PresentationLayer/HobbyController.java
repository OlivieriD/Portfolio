package com.od.portfolio.HobbySubdomain.PresentationLayer;

import com.od.portfolio.HobbySubdomain.BusinessLayer.HobbyService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/hobbies")
@RequiredArgsConstructor
public class HobbyController {
    private final HobbyService hobbyService;

    @GetMapping
    public List<HobbyResponseDTO> getAll() { return hobbyService.getAll(); }

    @PostMapping
    @PreAuthorize("hasAuthority('SCOPE_admin')")
    public HobbyResponseDTO create(@RequestBody HobbyRequestDTO dto) { return hobbyService.add(dto); }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('SCOPE_admin')")
    public HobbyResponseDTO update(@PathVariable Integer id, @RequestBody HobbyRequestDTO dto) { return hobbyService.update(id, dto); }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('SCOPE_admin')")
    public void delete(@PathVariable Integer id) { hobbyService.delete(id); }
}
