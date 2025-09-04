package com.rishabhraj.airesumeanalyzer.repository;

import com.rishabhraj.airesumeanalyzer.entity.Resume;
import com.rishabhraj.airesumeanalyzer.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResumeRepository extends JpaRepository<Resume, Long> {
    List<Resume> findByUser(User user);
}
