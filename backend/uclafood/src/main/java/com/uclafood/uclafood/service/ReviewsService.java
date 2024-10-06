package com.uclafood.uclafood.service;

import com.uclafood.uclafood.model.Reviews;
import com.uclafood.uclafood.repository.ReviewsRepository;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewsService {
    @Autowired
    private ReviewsRepository ReviewsRepository;

    @Transactional
    public Reviews createReview(Reviews review) throws Exception {
      return ReviewsRepository.save(review);
    }

    public List<Reviews> getReviews(Integer businessID) throws Exception {
      return ReviewsRepository.findAllByBusinessId(businessID);
    }

    public List<Reviews> getReviewsByUser(Long userId) {
      List<Reviews> reviews = ReviewsRepository.findAll();

      List<Reviews> filteredReviewsById = reviews.stream()
                                           .filter(review -> review.getUserId().equals(userId))
                                           .collect(Collectors.toList());

      return filteredReviewsById;
    }

    public void upvoteReview(Integer reviewId) {
      ReviewsRepository.incrementUpvotes(reviewId);
    }

    public void downvoteReview(Integer reviewId) {
      ReviewsRepository.decrementUpvotes(reviewId);
    }
}
