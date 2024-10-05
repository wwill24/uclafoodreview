package com.uclafood.uclafood.controller;

import java.util.Map;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uclafood.uclafood.model.CookieModel;
import com.uclafood.uclafood.model.User;
import com.uclafood.uclafood.service.UserService;
import com.uclafood.uclafood.service.CookieService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;


@RestController
@CrossOrigin(origins = "http://localhost:3000/", allowCredentials = "true")
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private CookieService cookieService;

    @GetMapping("/change-username/{username}")
        public String setCookie(@PathVariable String username, HttpServletResponse response) {
        // create a cookie
        Cookie cookie = new Cookie("username", username);
        cookie.setMaxAge(5);

        //add cookie to response
        response.addCookie(cookie);

        return "Username is changed!";
    }

    @PostMapping("/signin")
    public ResponseEntity<String> signin(@RequestBody Map<String, Object> payload, HttpServletResponse response, HttpServletRequest request) {
        String username = payload.get("username").toString();
        String password = payload.get("password").toString();

        boolean isValidUser = userService.validateUser(username, password);

        if (isValidUser) {
            HttpSession session = request.getSession(true);
            session.setAttribute("username", username);

            CookieModel cookieModel = new CookieModel();
            cookieModel.setUserid(userService.getUserID(username));
            cookieModel.setJsessionid(session.getId());

            cookieService.createCookie(cookieModel);
            return ResponseEntity.ok("Signin successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Signin error. Wrong username or password");
        }
    }

    @GetMapping("/check-login")
    public ResponseEntity<Boolean> checkLoginStatus(HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        if (session != null && session.getAttribute("username") != null) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession(false);
    
        if (session != null) {
            session.invalidate();
            String sessionid = session.getId();
            cookieService.deleteCookie(sessionid);
        }
        
        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/id")
    public Long getUser(HttpServletRequest request, HttpServletResponse response){
        return userService.getUser(request, response);
    }

    @GetMapping("/username/{userId}")
    public String getUsername(@PathVariable Long userId) {
        return userService.getUsername(userId);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // @PostMapping("/signup")
    // public void createUser(@RequestBody User payload) throws Exception {
    //     userService.createUser(payload);
    // }
}
