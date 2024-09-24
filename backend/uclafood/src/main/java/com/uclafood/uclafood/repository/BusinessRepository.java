package com.uclafood.uclafood.repository;
import java.util.List;

import com.uclafood.uclafood.model.Business;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessRepository extends JpaRepository<Business, Long> {
    List<Business> findAllByCategory(String category);
}
