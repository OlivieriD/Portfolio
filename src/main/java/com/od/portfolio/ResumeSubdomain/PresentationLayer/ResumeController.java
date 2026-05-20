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
import java.util.HashMap;
import java.util.Map;

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
    public ResponseEntity<Resource> downloadResume(@RequestParam(value = "lang", defaultValue = "en") String language) {
        return resumeService.getLatestResume()
                .map(resume -> {
                    byte[] data = null;
                    String filename = null;
                    String fileType = null;

                    if ("fr".equalsIgnoreCase(language)) {
                        data = resume.getDataFr();
                        filename = resume.getFilenameFr();
                        fileType = resume.getFileTypeFr();
                    } else {
                        data = resume.getDataEn() != null ? resume.getDataEn() : resume.getData();
                        filename = resume.getFilenameEn() != null ? resume.getFilenameEn() : resume.getFilename();
                        fileType = resume.getFileTypeEn() != null ? resume.getFileTypeEn() : resume.getFileType();
                    }

                    if (data == null) {
                        return ResponseEntity.notFound().<Resource>build();
                    }

                    Resource resource = new ByteArrayResource(data);
                    return ResponseEntity.ok()
                            .contentType(MediaType.parseMediaType(fileType))
                            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                            .header(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, HttpHeaders.CONTENT_DISPOSITION)
                            .body(resource);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/view")
    public ResponseEntity<Resource> viewResume(@RequestParam(value = "lang", defaultValue = "en") String language) {
        return resumeService.getLatestResume()
                .map(resume -> {
                    byte[] data = null;
                    String filename = null;
                    String fileType = null;

                    if ("fr".equalsIgnoreCase(language)) {
                        data = resume.getDataFr();
                        filename = resume.getFilenameFr();
                        fileType = resume.getFileTypeFr();
                    } else {
                        data = resume.getDataEn() != null ? resume.getDataEn() : resume.getData();
                        filename = resume.getFilenameEn() != null ? resume.getFilenameEn() : resume.getFilename();
                        fileType = resume.getFileTypeEn() != null ? resume.getFileTypeEn() : resume.getFileType();
                    }

                    if (data == null) {
                        return ResponseEntity.notFound().<Resource>build();
                    }

                    Resource resource = new ByteArrayResource(data);
                    return ResponseEntity.ok()
                            .contentType(MediaType.parseMediaType(fileType))
                            .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + filename + "\"")
                            .body(resource);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/info")
    public ResponseEntity<?> getResumeInfo() {
        return resumeService.getLatestResume()
                .map(resume -> {
                    Map<String, Object> info = new HashMap<>();
                    info.put("titleEn", resume.getTitleEn());
                    info.put("descriptionEn", resume.getDescriptionEn());
                    info.put("filenameEn", resume.getFilenameEn());
                    info.put("fileTypeEn", resume.getFileTypeEn());
                    
                    info.put("titleFr", resume.getTitleFr());
                    info.put("descriptionFr", resume.getDescriptionFr());
                    info.put("filenameFr", resume.getFilenameFr());
                    info.put("fileTypeFr", resume.getFileTypeFr());

                    // Legacy fields for backward compatibility
                    info.put("filename", resume.getFilename());
                    info.put("fileType", resume.getFileType());
                    
                    return ResponseEntity.ok().body(info);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/upload-bilingual")
    public ResponseEntity<String> uploadBilingual(
            @RequestParam(value = "fileEn", required = false) MultipartFile fileEn,
            @RequestParam(value = "fileFr", required = false) MultipartFile fileFr,
            @RequestParam(value = "titleEn", required = false) String titleEn,
            @RequestParam(value = "descriptionEn", required = false) String descriptionEn,
            @RequestParam(value = "titleFr", required = false) String titleFr,
            @RequestParam(value = "descriptionFr", required = false) String descriptionFr) throws IOException {
        resumeService.uploadBilingual(fileEn, fileFr, titleEn, descriptionEn, titleFr, descriptionFr);
        return ResponseEntity.ok("Resumes uploaded successfully");
    }

    @PutMapping("/metadata")
    public ResponseEntity<?> updateMetadata(
            @RequestParam(value = "titleEn", required = false) String titleEn,
            @RequestParam(value = "descriptionEn", required = false) String descriptionEn,
            @RequestParam(value = "titleFr", required = false) String titleFr,
            @RequestParam(value = "descriptionFr", required = false) String descriptionFr) {
        Resume updated = resumeService.updateMetadata(titleEn, descriptionEn, titleFr, descriptionFr);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Metadata updated successfully");
        return ResponseEntity.ok(response);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteResume() {
        resumeService.deleteResume();
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{language}")
    public ResponseEntity<Void> deleteBilingual(@PathVariable String language) {
        resumeService.deleteBilingual(language);
        return ResponseEntity.noContent().build();
    }

    private record ResumeInfo(String filename, String fileType) {}
}
