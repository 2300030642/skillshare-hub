package com.klu.repo;

import com.klu.entity.SkillApp;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface SkillShareRepo extends JpaRepository<SkillApp, Long> {
    Optional<SkillApp> findByEmail(String email);
}
