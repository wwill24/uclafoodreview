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

    
}
