package com.uclafood.uclafood.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uclafood.uclafood.model.CookieModel;
import com.uclafood.uclafood.repository.CookieRepository;
import com.uclafood.uclafood.service.CookieService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin
@RequestMapping("/cookie")
public class CookieController {

    @Autowired
    private CookieService cookieService;

    @Autowired
    private CookieRepository cookieRepository;
}
