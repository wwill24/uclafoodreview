package com.uclafood.uclafood.service;

import com.uclafood.uclafood.model.Reviews;
import com.uclafood.uclafood.repository.ReviewsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewsService {
    @Autowired
    private ReviewsRepository ReviewsRepository;

    public Reviews createReview(Reviews review) throws Exception {
      return ReviewsRepository.save(review);
    }
}
