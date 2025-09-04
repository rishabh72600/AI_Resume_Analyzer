package com.rishabhraj.airesumeanalyzer.repository;

import com.rishabhraj.airesumeanalyzer.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
}
