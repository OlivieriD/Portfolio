package com.od.portfolio.ResumeSubdomain.BusinessLayer;

import com.od.portfolio.ResumeSubdomain.DataAccessLayer.Resume;
import com.od.portfolio.ResumeSubdomain.DataAccessLayer.ResumeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class ResumeService {

    private final ResumeRepository resumeRepository;

    public Resume uploadResume(MultipartFile file) throws IOException {
        // Delete previous resume if exists (optional, keeping only one for simplicity)
        resumeRepository.deleteAll();

        Resume resume = Resume.builder()
                .filename(file.getOriginalFilename())
                .fileType(file.getContentType())
                .data(file.getBytes())
                .build();
        return resumeRepository.save(resume);
    }

    public Optional<Resume> getLatestResume() {
        return resumeRepository.findFirstByOrderByIdDesc();
    }

    public void deleteResume() {
        resumeRepository.deleteAll();
    }
}
