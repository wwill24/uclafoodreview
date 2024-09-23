package com.uclafood.uclafood.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uclafood.uclafood.model.Business;
import com.uclafood.uclafood.service.BusinessService;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin
public class BusinessController {
    @Autowired
    private BusinessService businessService;

    @GetMapping("/getBusiness")
    public List<Business> getBusinesses() {
        return businessService.getBusinesses();
    }
}
