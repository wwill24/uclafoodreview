package com.uclafood.uclafood.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.uclafood.uclafood.model.Reviews;
import com.uclafood.uclafood.service.ReviewsService;

import com.uclafood.uclafood.service.BusinessService;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

@RestController
@CrossOrigin
@RequestMapping("reviews")
public class ReviewsController {
    @Autowired
    private ReviewsService reviewService;

    @Autowired
    private BusinessService businessService;

    @PostMapping 
    public void createReview(@RequestBody Reviews payload) throws Exception{
        reviewService.createReview(payload);
        Long businessID = payload.getBusinessId().longValue();
        Float rating = payload.getRating();
        
        businessService.updateRating(businessID, rating);

        // Upvote upvote = new Upvote();
        // upvote.setUserID(review.getUserId());
        // upvote.setReviewID(review.getId());

        // upvotesService.createUpvote(upvote);
    }

    @GetMapping
    public List<Reviews> getReviews(@RequestParam Integer businessID) throws Exception {
        return reviewService.getReviews(businessID);
    }

    @GetMapping("/user/{userid}")
    public List<Reviews> getReviewsForUser(@PathVariable Long userid){
        return reviewService.getReviewsByUser(userid);
    }

    @PutMapping("/upvote/{id}")
    public ResponseEntity<String> upvoteReview(@PathVariable Integer id) {
        try {
            reviewService.upvoteReview(id);
            return ResponseEntity.ok("Upvote successful!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Upvote failed.");
        }
    }

    @PutMapping("/downvote/{id}")
    public ResponseEntity<String> downvoteReview(@PathVariable Integer id) {
        try {
            reviewService.downvoteReview(id);
            return ResponseEntity.ok("Upvote removed successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Upvote remove failed.");
        }
    }
}
