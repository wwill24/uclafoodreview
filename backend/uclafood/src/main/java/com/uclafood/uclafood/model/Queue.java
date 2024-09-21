package com.uclafood.uclafood.model;

import jakarta.persistence.*;

@Entity
@Table(name = "queue")
public class Queue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String email;

    @Column(nullable = false, length = 255)
    private String phone;

    @Column(nullable = false, length = 255)
    private String username;

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail(String email) {
        return email;
    }

    public String getPhone(String phone) {
        return phone;
    }

    public String getUsername(String username) {
        return username;
    }

    public Queue(String email, String phone, String username) {
        this.email = email;
        this.phone = phone;
        this.username = username;
    }
}
