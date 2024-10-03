package com.uclafood.uclafood.service;

import com.uclafood.uclafood.model.CookieModel;
import com.uclafood.uclafood.model.User;
import com.uclafood.uclafood.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.uclafood.uclafood.utils.Exceptions.*;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import com.uclafood.uclafood.repository.CookieRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    // private PasswordEncoder passwordEncoder;

    @Autowired
    private CookieRepository cookieRepository;

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

    public Long getUserID(String username) {
        return userRepository.findByUsername(username).getId();
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

    public Long getUser(HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession(false);

        if (session != null) {
            String sessionid = session.getId();
            CookieModel cookieModel = cookieRepository.findByJsessionid(sessionid);
            
            if (cookieModel != null) {
                Long userid = cookieModel.getUserid();
                return userid;
            }
        }

        return null;
    }
}
