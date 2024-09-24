package com.uclafood.uclafood.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.uclafood.uclafood.repository.BusinessRepository;
import com.uclafood.uclafood.model.Business;

@Service
public class BusinessService {
    @Autowired
    private BusinessRepository businessRepository;

    public List<Business> getBusinesses() {
        return businessRepository.findAll();
    }

    public List<Business> getDiningHalls() {
        return businessRepository.findAllByCategory("Dining Halls");
    }

    public List<Business> getFoodTrucks() {
        return businessRepository.findAllByCategory("Food Trucks");
    }

    public List<Business> getRestaurants() {
        return businessRepository.findAllByCategory("Restaurants");
    }
}
