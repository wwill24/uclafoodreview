package com.uclafood.uclafood.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uclafood.uclafood.repository.CookieRepository;
import com.uclafood.uclafood.model.Cookie;

@Service
public class CookieService {
    @Autowired
    private CookieRepository cookieRepository;

    public Cookie createCookie(Cookie cookie) {
        return cookieRepository.save(cookie);
    }
}
