package com.od.portfolio.ResumeSubdomain.PresentationLayer;

import com.od.portfolio.ResumeSubdomain.BusinessLayer.ResumeService;
import com.od.portfolio.ResumeSubdomain.DataAccessLayer.Resume;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/resume")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ResumeController {

    private final ResumeService resumeService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadResume(@RequestParam("file") MultipartFile file) throws IOException {
        resumeService.uploadResume(file);
        return ResponseEntity.ok("Resume uploaded successfully");
    }

    @GetMapping("/download")
    public ResponseEntity<Resource> downloadResume() {
        return resumeService.getLatestResume()
                .map(resume -> {
                    Resource resource = new ByteArrayResource(resume.getData());
                    return ResponseEntity.ok()
                            .contentType(MediaType.parseMediaType(resume.getFileType()))
                            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resume.getFilename() + "\"")
                            .header(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, HttpHeaders.CONTENT_DISPOSITION)
                            .body(resource);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/view")
    public ResponseEntity<Resource> viewResume() {
        return resumeService.getLatestResume()
                .map(resume -> {
                    Resource resource = new ByteArrayResource(resume.getData());
                    return ResponseEntity.ok()
                            .contentType(MediaType.parseMediaType(resume.getFileType()))
                            .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resume.getFilename() + "\"")
                            .body(resource);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/info")
    public ResponseEntity<?> getResumeInfo() {
        return resumeService.getLatestResume()
                .map(resume -> ResponseEntity.ok().body(new ResumeInfo(resume.getFilename(), resume.getFileType())))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteResume() {
        resumeService.deleteResume();
        return ResponseEntity.noContent().build();
    }

    private record ResumeInfo(String filename, String fileType) {}
}
