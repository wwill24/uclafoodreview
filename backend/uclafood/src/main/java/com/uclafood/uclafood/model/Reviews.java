package com.uclafood.uclafood.model;

import jakarta.persistence.*;

@Entity
@Table(name = "reviews")
public class Reviews {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="title", nullable = false)
    private String title;

    @Column(name="rating", nullable = false)
    private Float rating;

    @Column(name="reviewtext", nullable = false)
    private String reviewText;

    @Column(name="reviewdate", nullable = false)
    private String reviewDate;

    @Column(name="reviewtime", nullable = false)
    private String reviewTime;

    @Column(name="businessid", nullable = false)
    private Integer businessId;

    @Column(name="upvotes")
    private Integer upvotes = 0;

    @Column(name="upvotesid", nullable = false)
    private Integer upvotesid = 0;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setReviewTitle(String title) {
        this.title = title;
    }

    public Float getRating() {
        return rating;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setText(String reviewText) {
        this.reviewText = reviewText;
    }

    public String getReviewDate() {
        return reviewDate;
    }

    public void setReviewDate(String reviewDate) {
        this.reviewDate = reviewDate;
    }

    public String getReviewTime() {
        return reviewTime;
    }

    public void setReviewTime(String reviewTime) {
        this.reviewTime = reviewTime;
    }

    public Integer getBusinessId(){
        return businessId;
    }

    public void setBusinessId(Integer businessID){
        this.businessId = businessID;
    }

    public Integer getUpvotes(){
        return upvotes;
    }

    public void setUpvotes(Integer upvotes){ 
        this.upvotes = upvotes;
    }

    public Integer getUpvotesid(){
        return upvotesid;
    }

    public void setUpvotesid(Integer upvotesid){ 
        this.upvotesid = upvotesid;
    }

    public void incrementUpvotes() {
        this.upvotes++;
    }

    public void decrementUpvotes() {
        this.upvotes--;
    }
}
