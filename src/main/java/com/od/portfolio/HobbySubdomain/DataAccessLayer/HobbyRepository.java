package com.od.portfolio.HobbySubdomain.DataAccessLayer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HobbyRepository extends JpaRepository<Hobby, Integer> {}