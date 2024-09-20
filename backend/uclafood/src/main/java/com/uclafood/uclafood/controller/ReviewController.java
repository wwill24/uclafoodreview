package com.uclafood.uclafood.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
        return reviewService.createReview(payload);
    }
}
