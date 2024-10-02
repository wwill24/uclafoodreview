package com.uclafood.uclafood.repository;
import java.util.List;

import com.uclafood.uclafood.model.Business;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BusinessRepository extends JpaRepository<Business, Long> {
    List<Business> findAllByCategory(String category);
    Business findByBusinessName(String businessName);

    @Query("SELECT b FROM Business b ORDER BY b.rating DESC")
    List<Business> findTop5ByRating();

    @Modifying
    @Transactional
    @Query("UPDATE Business b SET b.reviewCount = b.reviewCount + 1 WHERE b.id = :businessId")
    void addReviewCount(@Param("businessId") Integer businessId); 
}
