package com.uclafood.uclafood.repository;

import com.uclafood.uclafood.model.Cookie;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CookieRepository extends JpaRepository<Cookie, Long> {
    
}
