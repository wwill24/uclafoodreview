package com.uclafood.uclafood.repository;

import java.util.List;

import com.uclafood.uclafood.model.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewsRepository extends JpaRepository<Reviews, Long>{
    List<Reviews> findAllByBusinessId(Integer businessID);
}
