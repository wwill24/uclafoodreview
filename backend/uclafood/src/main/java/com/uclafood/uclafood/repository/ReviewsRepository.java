package com.uclafood.uclafood.repository;

import java.util.List;

import com.uclafood.uclafood.model.Reviews;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewsRepository extends JpaRepository<Reviews, Long>{
    List<Reviews> findAllByBusinessId(Integer businessID);

    @Modifying
    @Transactional
    @Query("UPDATE Reviews r SET r.upvotes = r.upvotes + 1 WHERE r.id = :reviewId")
    void incrementUpvotes(@Param("reviewId") Integer reviewId);

    @Modifying
    @Transactional
    @Query("UPDATE Reviews r SET r.upvotes = r.upvotes - 1 WHERE r.id = :reviewId")
    void decrementUpvotes(@Param("reviewId") Integer reviewId);
}
