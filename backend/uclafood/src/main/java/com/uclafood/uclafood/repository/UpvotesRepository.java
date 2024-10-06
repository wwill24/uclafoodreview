package com.uclafood.uclafood.repository;

import com.uclafood.uclafood.model.Upvote;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UpvotesRepository extends JpaRepository<Upvote, Long> {
  Upvote findByReviewId(Long reviewId);
  void deleteByReviewId(Long reviewId);
}
