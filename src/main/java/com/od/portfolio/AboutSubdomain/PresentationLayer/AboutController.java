package com.od.portfolio.AboutSubdomain.PresentationLayer;

import com.od.portfolio.AboutSubdomain.BusinessLayer.AboutService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/about")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AboutController {

    private final AboutService aboutService;

    @GetMapping
    public ResponseEntity<AboutResponseDTO> getAbout() {
        return ResponseEntity.ok(aboutService.getAbout());
    }

    @PutMapping
    public ResponseEntity<AboutResponseDTO> updateAbout(@RequestBody AboutRequestDTO dto) {
        return ResponseEntity.ok(aboutService.updateAbout(dto));
    }
}
