package com.uclafood.uclafood;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.logging.Logger;

@SpringBootApplication
@RestController
public class UclafoodApplication {

    private static final Logger logger = Logger.getLogger(UclafoodApplication.class.getName());

    public static void main(String[] args) {
        SpringApplication.run(UclafoodApplication.class, args);
    }

    @GetMapping("/")
    public String home() {
        return "Welcome to UCLA Food!";
    }

	// TODO: add prod server URL
	@CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/signup")
    public String signup(@RequestBody Map<String, Object> payload) {
        logger.info("Received signup data: " + payload.toString());

        return "Signup data received successfully!";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/signin")
    public String signin(@RequestBody Map<String, Object> payload) {
        logger.info(payload.toString());

        return "Signin data received successfully!";
    }
}
