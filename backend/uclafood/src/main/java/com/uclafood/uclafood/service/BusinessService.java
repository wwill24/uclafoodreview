package com.uclafood.uclafood.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Comparator;

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

    public List<Business> getTopNBusinesses(Integer n) {
        List<Business> businesses = businessRepository.findAll();
        List<Business> sortedBusinesses = businesses.stream()
                .sorted(Comparator.comparingDouble(Business::getRating).reversed())
                .limit(n)
                .collect(Collectors.toList());
        return sortedBusinesses;
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

    public Business getBusinessID(String businessName) throws Exception{
        return businessRepository.findByBusinessName(businessName);
    }

    public void incrementReviewCount(Integer id){
        businessRepository.addReviewCount(id);
    }

    public void updateRating(Long id, Float reviewRating){
        Business business = businessRepository.getReferenceById(id);
        Float currentRating = business.getRating();
        Integer reviewCount = business.getReviewCount();

        Float newRating = ((currentRating * reviewCount) + reviewRating)/(reviewCount + 1);
        business.setRating(newRating);
        businessRepository.save(business);
    }

    public void createBusiness() {
        Business business = new Business();
        business.setRating(0.0f);
        business.setReviewCount(0);
        business.setAddress("not sure");
        business.setBusinessName("Epicuria");
        business.setCategory("Dining Halls");
        business.setDescription("Great pizza and pasta");

        // Save the business entity to the database
        businessRepository.save(business);
    }
}
