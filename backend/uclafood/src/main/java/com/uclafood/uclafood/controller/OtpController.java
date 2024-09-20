package com.uclafood.uclafood.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.uclafood.uclafood.service.OtpService;
import com.uclafood.uclafood.utils.EmailService;

@RestController
@CrossOrigin
public class OtpController {

    @SuppressWarnings("unused")
    @Autowired
    private EmailService emailService;

    @PostMapping("/generateOTP")
    public String signin(@RequestBody Map<String, Object> payload) {
        String otp = OtpService.GenerateOTP();
        System.out.println(otp);
        return "generated";
    }
}
