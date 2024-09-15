package com.uclafood.uclafood.repository;

import com.uclafood.uclafood.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}