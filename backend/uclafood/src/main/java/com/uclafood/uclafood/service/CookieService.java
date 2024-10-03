package com.uclafood.uclafood.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uclafood.uclafood.repository.CookieRepository;
import com.uclafood.uclafood.model.CookieModel;

@Service
public class CookieService {
    @Autowired
    private CookieRepository cookieRepository;

    public CookieModel createCookie(CookieModel cookie) {
        return cookieRepository.save(cookie);
    }

    public void deleteCookie(String sessionid) {
        CookieModel cookieModel = cookieRepository.findByJsessionid(sessionid);
        cookieRepository.delete(cookieModel);
    }
}
