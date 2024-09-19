package com.uclafood.uclafood.controller;

import java.util.Map;
import java.util.List;
import java.util.logging.Logger;
import java.util.Random;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.uclafood.uclafood.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin
public class EmailVerifyController {

    @PostMapping("/signup")
    public String signin(@RequestBody Map<String, Object> payload) {
        String email = payload.get("email").toString();
        String subject = "Bruin Review OTP";
        
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        

        String text = "Your OTP code is: " + String.valueOf(otp);

        boolean emailSent = EmailService.sendEmail(email, subject, text);

        if (emailSent){
            return "Email sent successfully!";
        }
        else{
            return "Email failed to send...";
        }
    }
}
