// package com.uclafood.uclafood.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.session.web.http.CookieHttpSessionIdResolver;
// import org.springframework.session.web.http.HttpSessionIdResolver;

// @Configuration
// public class SecurityConfig {
//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//         http
//             .authorizeHttpRequests(auth -> auth
//                 .requestMatchers("/signin", "/signup").permitAll()
//                 .anyRequest().authenticated()
//             )
//             .formLogin(form -> form
//                 .loginPage("/signin")
//                 .permitAll()
//             )
//             .sessionManagement(session -> session
//                 .maximumSessions(1)
//             )
//             .csrf(csrf -> csrf
//                 .ignoringRequestMatchers("/api/**")
//             ); 

//         return http.build();
//     }

//     @Bean
//     public HttpSessionIdResolver httpSessionIdResolver() {
//         return new CookieHttpSessionIdResolver(); 
//     }
// }
