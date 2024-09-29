package com.uclafood.uclafood.service;

import com.uclafood.uclafood.model.Reviews;
import com.uclafood.uclafood.repository.ReviewsRepository;

import jakarta.transaction.Transactional;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewsService {
    @Autowired
    private ReviewsRepository ReviewsRepository;

    public Reviews createReview(Reviews review) throws Exception {
      return ReviewsRepository.save(review);
    }

    public List<Reviews> getReviews(Integer businessID) throws Exception {
      return ReviewsRepository.findAllByBusinessId(businessID);
    }

    public void addUpvoteReview(Integer reviewId) {
      ReviewsRepository.incrementUpvotes(reviewId);
    }

    public void subUpvoteReview(Integer reviewId) {
      ReviewsRepository.decrementUpvotes(reviewId);
    }
}
