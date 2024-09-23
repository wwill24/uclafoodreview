package com.uclafood.uclafood.repository;

import com.uclafood.uclafood.model.Business;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessRepository extends JpaRepository<Business, Long> {
    
}
