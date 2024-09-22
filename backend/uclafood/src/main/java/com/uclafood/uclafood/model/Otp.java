package com.uclafood.uclafood.model;

import jakarta.persistence.*;

@Entity
@Table(name = "otp")
public class Otp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String email;

    @Column(nullable = false, length = 255)
    private String phone;

    @Column(nullable = false, length = 255)
    private String username;

    @Column(nullable = false, length = 255)
    private String code;

    @Column(nullable = false, name = "formdata")
    private String formdata;

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setFormData(String formData) {
        this.formdata = formData;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getUsername() {
        return username;
    }

    public String getCode() {
        return code;
    }

    public String getFormData() {
        return formdata;
    }

    public Otp() {

    }

    public Otp(String email, String phone, String username, String code, String formData) {
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.code = code;
        this.formdata = formData;
    }
}
