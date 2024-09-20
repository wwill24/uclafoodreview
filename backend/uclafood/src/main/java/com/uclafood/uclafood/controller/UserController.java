package com.uclafood.uclafood.controller;

import java.util.Map;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.uclafood.uclafood.UclafoodApplication;
import com.uclafood.uclafood.model.User;
import com.uclafood.uclafood.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin
public class UserController {

    private static final Logger logger = Logger.getLogger(UclafoodApplication.class.getName());

    @Autowired
    private UserService userService;

    @PostMapping("/signin")
    public String signin(@RequestBody Map<String, Object> payload) {
        String username = payload.get("username").toString();
        String password = payload.get("password").toString();

        boolean isValidUser = userService.validateUser(username, password);

        if (isValidUser) {
            return "Signin successful!";
        }
        else {
            return "Signin error";
        }
    }

    @GetMapping("/getUsers")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/signup")
    public User createUser(@RequestBody User payload) throws Exception {
        return userService.createUser(payload);
    }    

}
