package com.od.portfolio.ExperienceSubdomain.DataAccessLayer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienceRepository extends JpaRepository<Experience, Integer> {
}
