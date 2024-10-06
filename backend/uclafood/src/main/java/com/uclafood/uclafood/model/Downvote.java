package com.uclafood.uclafood.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "downvotes")
public class Downvote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="userid", nullable = false)
    private Long userid;

    @Column(name="reviewid", nullable = false)
    private Long reviewid;

    public void setUserID(Long userid) {
        this.userid = userid;
    }

    public void setReviewID(Long reviewid) {
        this.reviewid = reviewid;
    }

    public Long getUserID() {
        return userid;
    }

    public Long getReviewID() {
        return reviewid;
    }
}
