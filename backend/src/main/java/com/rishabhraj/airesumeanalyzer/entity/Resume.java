package com.rishabhraj.airesumeanalyzer.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "resumes")
@Data
public class Resume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "file_name", nullable = false)
    private String fileName;

    @Column(name = "parsed_data", columnDefinition = "JSON")
    private String parsedData; // JSON string

    @Column(name = "resume_score")
    private Integer resumeScore;

    @Column(name = "predicted_field")
    private String predictedField;

    @Column(name = "user_level")
    private String userLevel;

    @Column(name = "actual_skills", columnDefinition = "TEXT")
    private String actualSkills;

    @Column(name = "recommended_skills", columnDefinition = "TEXT")
    private String recommendedSkills;

    @Column(name = "recommended_courses", columnDefinition = "TEXT")
    private String recommendedCourses;

    @Column(name = "ip_address")
    private String ipAddress;

    @Column(name = "location", columnDefinition = "JSON")
    private String location; // JSON string

    @Column(name = "device_info", columnDefinition = "JSON")
    private String deviceInfo; // JSON string

    private LocalDateTime timestamp = LocalDateTime.now();
}
