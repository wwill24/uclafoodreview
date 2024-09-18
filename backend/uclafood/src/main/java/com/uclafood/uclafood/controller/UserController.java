package com.uclafood.uclafood.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.uclafood.uclafood.UclafoodApplication;
import java.util.logging.Logger;

@RestController
@CrossOrigin
public class UserController {
    
    private static final Logger logger = Logger.getLogger(UclafoodApplication.class.getName());

    @PostMapping("/signup")
    public String signup(@RequestBody Map<String, Object> payload) {
        logger.info("Received signup data: " + payload.toString());

        return "Signup data received successfully!";
    }

    @PostMapping("/signin")
    public String signin(@RequestBody Map<String, Object> payload) {
        logger.info(payload.toString());

        return "Signin data received successfully!";
    }

}
