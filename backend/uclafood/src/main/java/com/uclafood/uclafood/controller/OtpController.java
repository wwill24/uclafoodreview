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
import com.uclafood.uclafood.service.UserService;
import com.uclafood.uclafood.utils.EmailService;

@RestController
@CrossOrigin
public class OtpController {

    @SuppressWarnings("unused")
    @Autowired
    private EmailService emailService;

    @Autowired
    private OtpService otpService;

    @Autowired
    private UserService userService;

    @PostMapping("/generateOTP")
    public String signin(@RequestBody Map<String, Object> payload) {
        String name = payload.get("name").toString();
        String email = payload.get("email").toString();
        String username = payload.get("username").toString();
        String phone = payload.get("phone").toString();
        String password = payload.get("password").toString();

        if (!payload.containsKey("name") || name == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing required name field.");
        }

        if (!payload.containsKey("email") || email == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing required email field.");
        }

        if (!payload.containsKey("username") || username == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing required username field.");
        }

        if (!payload.containsKey("phone") || phone == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing required phone field.");
        }

        if (!payload.containsKey("password") || password == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing required password field.");
        }

        // Check if formdata is in otp table
        if (otpService.checkEmail(payload) || userService.checkEmail(payload)) { throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email already in use."); }
        if (otpService.checkPhone(payload) || userService.checkPhone(payload)) { throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Phone Number already in use."); }
        if (otpService.checkUsername(payload) || userService.checkUsername(payload)) { throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username already in use."); }

        // Generate a OTP
        String otp = OtpService.GenerateOTP();
        System.out.println("Generated OTP: " + otp);

        // Creates OTP data with the payload
        Otp optData = new Otp(email, phone, username, otp, payload.toString());

        // Saves optData to otp DB
        otpService.saveOTP(optData);

        return "OTP Created!";
    }

    @PostMapping("/verify")
    public String verify(@RequestBody Map<String, Object> payload) {
        
        return "verified!";
    }
    
}
