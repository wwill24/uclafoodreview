package com.uclafood.uclafood.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.uclafood.uclafood.model.Reviews;
import com.uclafood.uclafood.service.ReviewsService;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin
public class ReviewController {
    @Autowired
    private ReviewsService reviewService;

    @PostMapping("/createReview") 
    public Reviews createReview(@RequestBody Reviews payload) throws Exception{
        System.out.println(payload);
        return reviewService.createReview(payload);
    }

    @GetMapping("/getReviews")
    public List<Reviews> getReviews(@RequestParam Integer businessID) throws Exception {
        return reviewService.getReviews(businessID);
    }
}
