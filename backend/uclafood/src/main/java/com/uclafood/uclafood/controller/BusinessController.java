package com.uclafood.uclafood.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.uclafood.uclafood.model.Business;
import com.uclafood.uclafood.service.BusinessService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/businesses")
@CrossOrigin
public class BusinessController {
    @Autowired
    private BusinessService businessService;

    @PostMapping
    public void createBusiness() {
        businessService.createBusiness();
    }

    @GetMapping("/dining-halls")
    public List<Business> getDiningHalls() {
        return businessService.getDiningHalls();
    }

    @GetMapping("/food-trucks")
    public List<Business> getFoodTrucks() {
        return businessService.getFoodTrucks();
    }

    @GetMapping("/restaurants")
    public List<Business> getRestaurants() {
        return businessService.getRestaurants();
    }

    @GetMapping
    public Business getBusinessID(@RequestParam String businessName) throws Exception{
        return businessService.getBusinessID(businessName);
    }

    @GetMapping("/top")
    public List<Business> getTopNBusinesses(@RequestParam Integer n){
        return businessService.getTopNBusinesses(n);
    }

    @PutMapping("/review-count/{id}")
    public ResponseEntity<String> incrementReviewCount(@PathVariable Integer id){
        try {
            businessService.incrementReviewCount(id);
            return ResponseEntity.ok("Review count increment successful!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Review count did not increment");
        }
    }
}
