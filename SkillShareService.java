package com.klu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.klu.entity.SkillApp;
import com.klu.repo.SkillShareRepo;

@Service
public class SkillShareService {
    @Autowired
    private SkillShareRepo userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder; // ✅ Inject shared encoder

    public SkillApp register(SkillApp user) {
        user.setPassword(passwordEncoder.encode(user.getPassword())); // ✅ Use shared encoder
        return userRepository.save(user);
    }

    public SkillApp login(String email, String rawPassword) {
        SkillApp user = userRepository.findByEmail(email)
                     .orElseThrow(() -> new RuntimeException("User not found"));

        if (passwordEncoder.matches(rawPassword, user.getPassword())) { // ✅ Match encoded password
            return user;
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
}
