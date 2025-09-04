package com.rishabhraj.airesumeanalyzer.controller;

import com.rishabhraj.airesumeanalyzer.entity.Resume;
import com.rishabhraj.airesumeanalyzer.entity.User;
import com.rishabhraj.airesumeanalyzer.repository.ResumeRepository;
import com.rishabhraj.airesumeanalyzer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin
public class ResumeController {

    @Autowired
    private ResumeRepository resumeRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/analyze")
    public ResponseEntity<?> analyzeResume(
            @RequestParam("file") MultipartFile file,
            Authentication authentication) {

        try {
            User user = null;

            // Handle both authenticated and anonymous users
            if (authentication != null) {
                String email = authentication.getName();
                Optional<User> userOpt = userRepository.findByEmail(email);
                if (userOpt.isPresent()) {
                    user = userOpt.get();
                }
            }

            // For anonymous users, create a temporary user or use null
            if (user == null) {
                // Check if anonymous user already exists
                Optional<User> existingAnonymous = userRepository.findByEmail("anonymous@example.com");
                if (existingAnonymous.isPresent()) {
                    user = existingAnonymous.get();
                } else {
                    // Create a temporary anonymous user for testing
                    user = new User();
                    user.setName("Anonymous User");
                    user.setEmail("anonymous@example.com");
                    user.setPassword("defaultpassword"); // Set a default password to avoid null constraint
                    user.setRole(User.Role.USER);
                    user = userRepository.save(user);
                }
            }

            // Save resume to database
            Resume resume = new Resume();
            resume.setUser(user);
            resume.setFileName(file.getOriginalFilename());
            resume.setParsedData("{}"); // Placeholder for parsed data
            resume.setResumeScore(85); // Mock score
            resume.setPredictedField("Software Development");
            resume.setUserLevel("Intermediate");
            resume.setActualSkills("Java, Python, SQL");
            resume.setRecommendedSkills("Spring Boot, React, Docker");
            resume.setRecommendedCourses("Advanced Java, Microservices");

            Resume savedResume = resumeRepository.save(resume);

            // Mock analysis response
            Map<String, Object> analysis = new HashMap<>();
            analysis.put("id", savedResume.getId());
            analysis.put("score", savedResume.getResumeScore());
            analysis.put("predictedField", savedResume.getPredictedField());
            analysis.put("userLevel", savedResume.getUserLevel());
            analysis.put("recommendedSkills", savedResume.getRecommendedSkills().split(", "));
            analysis.put("recommendedCourses", savedResume.getRecommendedCourses().split(", "));
            analysis.put("feedback", "Your resume looks great! Consider adding more quantifiable achievements.");

            return ResponseEntity.ok(analysis);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to analyze resume: " + e.getMessage());
        }
    }

    @GetMapping("/history")
    public ResponseEntity<?> getResumeHistory(Authentication authentication) {
        String email = authentication.getName();
        Optional<User> userOpt = userRepository.findByEmail(email);

        if (!userOpt.isPresent()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        List<Resume> resumes = resumeRepository.findByUser(userOpt.get());
        return ResponseEntity.ok(resumes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getResume(@PathVariable Long id, Authentication authentication) {
        String email = authentication.getName();
        Optional<User> userOpt = userRepository.findByEmail(email);

        if (!userOpt.isPresent()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        Optional<Resume> resumeOpt = resumeRepository.findById(id);
        if (!resumeOpt.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Resume resume = resumeOpt.get();
        if (!resume.getUser().getId().equals(userOpt.get().getId())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        return ResponseEntity.ok(resume);
    }
}
