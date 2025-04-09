package com.klu.controller;

import com.klu.entity.SkillApp;
import com.klu.service.SkillShareService;
import com.klu.repo.SkillShareRepo;
import com.klu.security.JwtUtil; // ✅ Make sure this is your JwtUtil package
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class SkillController {

    @Autowired
    private SkillShareService skillService;

    @Autowired
    private SkillShareRepo skillRepo;

    @Autowired
    private JwtUtil jwtUtil;

    // 🔹 Register user
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody SkillApp user) {
        SkillApp registeredUser = skillService.register(user);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    // 🔹 Login user (with JWT token)
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody SkillApp loginData) {
        SkillApp user = skillService.login(loginData.getEmail(), loginData.getPassword());
        if (user == null) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("message", "Invalid email or password");
            return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
        }

        String token = jwtUtil.generateToken(user.getEmail());

        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("user", user);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 🔹 Get all users
    @GetMapping
    public ResponseEntity<List<SkillApp>> getAllUsers() {
        List<SkillApp> users = skillRepo.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    // 🔹 Get user by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        Optional<SkillApp> optionalUser = skillRepo.findById(id);
        if (optionalUser.isPresent()) {
            return new ResponseEntity<>(optionalUser.get(), HttpStatus.OK);
        } else {
            Map<String, Object> error = new HashMap<>();
            error.put("message", "User not found");
            return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
        }
    }

    // 🔹 Update user
    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody SkillApp updatedUser) {
        Optional<SkillApp> optionalUser = skillRepo.findById(id);
        if (optionalUser.isPresent()) {
            SkillApp user = optionalUser.get();
            user.setName(updatedUser.getName());
            user.setEmail(updatedUser.getEmail());
            if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
                user.setPassword(updatedUser.getPassword());
            }
            SkillApp savedUser = skillRepo.save(user);
            return new ResponseEntity<>(savedUser, HttpStatus.OK);
        } else {
            Map<String, Object> error = new HashMap<>();
            error.put("message", "User not found");
            return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
        }
    }

    // 🔹 Delete user
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        if (!skillRepo.existsById(id)) {
            Map<String, Object> error = new HashMap<>();
            error.put("message", "User not found");
            return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
        }
        skillRepo.deleteById(id);
        Map<String, Object> response = new HashMap<>();
        response.put("message", "User deleted successfully");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
