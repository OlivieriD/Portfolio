package com.od.portfolio.ResumeSubdomain.DataAccessLayer;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ResumeRepository extends JpaRepository<Resume, Integer> {
    Optional<Resume> findFirstByOrderByIdDesc();
}
