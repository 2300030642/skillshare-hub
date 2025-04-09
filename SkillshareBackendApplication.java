package com.klu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.klu") // ✅ Ensures all sub-packages are scanned
public class SkillshareBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(SkillshareBackendApplication.class, args);
    }
}
