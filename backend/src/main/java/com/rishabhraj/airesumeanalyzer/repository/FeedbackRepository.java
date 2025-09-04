package com.rishabhraj.airesumeanalyzer.repository;

import com.rishabhraj.airesumeanalyzer.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}
