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

    // Legacy single-language methods (backward compatible)
    public Resume uploadResume(MultipartFile file) throws IOException {
        Resume resume = resumeRepository.findFirstByOrderByIdDesc()
                .orElse(Resume.builder().build());

        resume.setFilename(file.getOriginalFilename());
        resume.setFileType(file.getContentType());
        resume.setData(file.getBytes());
        return resumeRepository.save(resume);
    }

    public Optional<Resume> getLatestResume() {
        return resumeRepository.findFirstByOrderByIdDesc();
    }

    public void deleteResume() {
        resumeRepository.deleteAll();
    }

    // Bilingual methods
    public Resume uploadBilingual(MultipartFile fileEn, MultipartFile fileFr, String titleEn, String descriptionEn, String titleFr, String descriptionFr) throws IOException {
        Resume resume = resumeRepository.findFirstByOrderByIdDesc()
                .orElse(Resume.builder().build());

        if (fileEn != null) {
            resume.setFilenameEn(fileEn.getOriginalFilename());
            resume.setFileTypeEn(fileEn.getContentType());
            resume.setDataEn(fileEn.getBytes());
        }
        if (fileFr != null) {
            resume.setFilenameFr(fileFr.getOriginalFilename());
            resume.setFileTypeFr(fileFr.getContentType());
            resume.setDataFr(fileFr.getBytes());
        }

        resume.setTitleEn(titleEn);
        resume.setDescriptionEn(descriptionEn);
        resume.setTitleFr(titleFr);
        resume.setDescriptionFr(descriptionFr);

        return resumeRepository.save(resume);
    }

    public Resume updateMetadata(String titleEn, String descriptionEn, String titleFr, String descriptionFr) {
        Resume resume = resumeRepository.findFirstByOrderByIdDesc()
                .orElse(Resume.builder().build());

        resume.setTitleEn(titleEn);
        resume.setDescriptionEn(descriptionEn);
        resume.setTitleFr(titleFr);
        resume.setDescriptionFr(descriptionFr);

        return resumeRepository.save(resume);
    }

    public void deleteBilingual(String language) {
        Resume resume = resumeRepository.findFirstByOrderByIdDesc().orElse(null);
        if (resume != null) {
            if ("en".equalsIgnoreCase(language)) {
                resume.setFilenameEn(null);
                resume.setFileTypeEn(null);
                resume.setDataEn(null);
                resume.setTitleEn(null);
                resume.setDescriptionEn(null);
            } else if ("fr".equalsIgnoreCase(language)) {
                resume.setFilenameFr(null);
                resume.setFileTypeFr(null);
                resume.setDataFr(null);
                resume.setTitleFr(null);
                resume.setDescriptionFr(null);
            }
            resumeRepository.save(resume);
        }
    }

    public Optional<Resume> getResumeByLanguage(String language) {
        return resumeRepository.findFirstByOrderByIdDesc();
    }
}
