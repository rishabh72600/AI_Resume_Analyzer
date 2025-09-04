-- MySQL Schema for AI Resume Analyzer (Normalized)

-- Create database
CREATE DATABASE IF NOT EXISTS ai_resume_analyzer;
USE ai_resume_analyzer;

-- Users table for authentication
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL, -- Encrypted
    role ENUM('USER', 'ADMIN') DEFAULT 'USER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Resumes table
CREATE TABLE resumes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    parsed_data JSON, -- Store parsed resume data as JSON
    resume_score INT,
    predicted_field VARCHAR(255),
    user_level VARCHAR(255),
    actual_skills TEXT,
    recommended_skills TEXT,
    recommended_courses TEXT,
    ip_address VARCHAR(50),
    location JSON, -- Store city, state, country as JSON
    device_info JSON, -- Store OS, browser, etc.
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Feedback table
CREATE TABLE feedback (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT,
    name VARCHAR(255),
    email VARCHAR(255),
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comments TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Indexes for performance
CREATE INDEX idx_resumes_user_id ON resumes(user_id);
CREATE INDEX idx_resumes_predicted_field ON resumes(predicted_field);
CREATE INDEX idx_feedback_user_id ON feedback(user_id);
CREATE INDEX idx_feedback_rating ON feedback(rating);

-- Insert default admin user (password: admin123 encrypted)
INSERT INTO users (name, email, password, role) VALUES
('Admin', 'admin@resume-analyzer.com', '$2a$10$exampleHashedPassword', 'ADMIN');
