package com.uclafood.uclafood.service;

import com.uclafood.uclafood.model.User;
import com.uclafood.uclafood.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.uclafood.uclafood.utils.Exceptions.*;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) throws Exception {
        if (userRepository.existsByEmail(user.getEmail().toString())) {
            throw new EmailException();
        }

        if (userRepository.existsByPhone(user.getPhone().toString())) {
            throw new PhoneException();
        }

        return userRepository.save(user);
    }

    public boolean validateUser(String username, String password){
        User user = userRepository.findByUsername(username);

        if (user != null){
            // return passwordEncoder.matches(password, user.getPassword());
        }

        return false;
    }
}
