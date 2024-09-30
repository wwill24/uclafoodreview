package com.uclafood.uclafood.repository;
import java.util.List;

import com.uclafood.uclafood.model.Business;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BusinessRepository extends JpaRepository<Business, Long> {
    List<Business> findAllByCategory(String category);
    Business findByBusinessName(String businessName);

    @Query("SELECT b FROM Business b ORDER BY b.rating DESC")
    List<Business> findTop5ByRating();
}
