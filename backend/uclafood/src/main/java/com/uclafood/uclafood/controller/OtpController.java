package com.uclafood.uclafood.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.uclafood.uclafood.model.Otp;
import com.uclafood.uclafood.service.OtpService;
import com.uclafood.uclafood.utils.EmailService;

@RestController
@CrossOrigin
public class OtpController {

    @SuppressWarnings("unused")
    @Autowired
    private EmailService emailService;

    @Autowired
    private OtpService otpService;

    @PostMapping("/generateOTP")
    public String signin(@RequestBody Map<String, Object> payload) {
        if (!payload.containsKey("email") || payload.get("email") == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing required email field.");
        }

        if (!payload.containsKey("username") || payload.get("username") == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing required username field.");
        }

        if (!payload.containsKey("phone") || payload.get("phone") == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing required phone field.");
        }

        if (!payload.containsKey("password") || payload.get("password") == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing required password field.");
        }

        String otp = OtpService.GenerateOTP();
        System.out.println("Generated OTP: " + otp);

        Otp optData = new Otp(payload.get("email").toString(), otp, payload.toString());

        otpService.saveOTP(optData);

        return "OTP Created!";
    }
}
