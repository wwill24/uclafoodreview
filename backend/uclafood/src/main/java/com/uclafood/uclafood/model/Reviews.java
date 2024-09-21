package com.uclafood.uclafood.model;

import jakarta.persistence.*;

@Entity
@Table(name = "reviews")
public class Reviews {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String reviewTitle;

    @Column(nullable = false)
    private Integer rating;

    @Column
    private String reviewText;

    @Column
    private String reviewDate;

    @Column
    private String reviewTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return reviewTitle;
    }

    public void setTitle(String reviewTitle) {
        this.reviewTitle = reviewTitle;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public String getReviewDate() {
        return reviewText;
    }

    public void setReviewDate(String reviewText) {
        this.reviewText = reviewText;
    }

    public String getReviewTime() {
        return reviewText;
    }

    public void setReviewTime(String reviewText) {
        this.reviewText = reviewText;
    }
}
