package com.uclafood.uclafood.repository;

import com.uclafood.uclafood.model.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewsRepository extends JpaRepository<Reviews, Long>{
    
}
