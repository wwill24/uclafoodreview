package com.uclafood.uclafood.model;

import jakarta.persistence.*;

@Entity
@Table(name = "upvotes")
public class Upvote {
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
