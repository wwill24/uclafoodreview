package com.uclafood.uclafood.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uclafood.uclafood.model.Business;
import com.uclafood.uclafood.service.BusinessService;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/getBusiness")
@CrossOrigin
public class BusinessController {
    @Autowired
    private BusinessService businessService;

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
}
