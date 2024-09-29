package com.uclafood.uclafood.service;

import com.uclafood.uclafood.model.User;
import com.uclafood.uclafood.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.uclafood.uclafood.utils.Exceptions.*;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    // private PasswordEncoder passwordEncoder;

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

    public boolean validateUser(String username, String password) {
        User user = userRepository.findByUsername(username);
    
        if (user != null) {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            if (password.matches(user.getPassword())) {
                return true;
            }
        }
        
        return false;
    }

    public Boolean checkEmail(Map<String, Object> payload) {
        String email = payload.get("email").toString();
        return userRepository.existsByEmail(email);
    }

    public Boolean checkPhone(Map<String, Object> payload) {
        String phone = payload.get("phone").toString();
        return userRepository.existsByPhone(phone);
    }

    public Boolean checkUsername(Map<String, Object> payload) {
        String username = payload.get("username").toString();
        return userRepository.existsByUsername(username);
    }
    
}
