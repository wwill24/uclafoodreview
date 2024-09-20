package com.uclafood.uclafood.repository;

import com.uclafood.uclafood.model.Otp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OtpRepository extends JpaRepository<Otp, Long> {
    
}
