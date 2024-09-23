package com.uclafood.uclafood.service;

import java.util.Map;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uclafood.uclafood.repository.OtpRepository;
import com.uclafood.uclafood.model.Otp;

@Service
public class OtpService {

    @Autowired
    private OtpRepository otpRepository;

    public static String GenerateOTP() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);

        return String.valueOf(otp);
    }

    public Otp saveOTP(Otp otp) {
        return otpRepository.save(otp);
    }

    public Boolean checkEmail(Map<String, Object> payload) {
        String email = payload.get("email").toString();
        return otpRepository.existsByEmail(email);
    }

    public Boolean checkPhone(Map<String, Object> payload) {
        String phone = payload.get("phone").toString();
        return otpRepository.existsByPhone(phone);
    }

    public Boolean checkUsername(Map<String, Object> payload) {
        String username = payload.get("username").toString();
        return otpRepository.existsByUsername(username);
    }

    public Boolean verifyOTP(Map<String, Object> payload) {
        String email = payload.get("email").toString();
        String otpCodePayload = payload.get("code").toString();

        Otp otpRow = otpRepository.findByEmail(email);

        if (otpRow == null) {
            return false;
        }
        
        String otpCode = otpRow.getCode();

        if (otpCode != null && otpCode.equals(otpCodePayload)) {
            return true;
        }

        return false;
    }
    
    public Otp removeOTP(Map<String, Object> payload) {
        String otpCodePayload = payload.get("code").toString();
        Otp otpRow = otpRepository.findByCode(otpCodePayload);
    
        if (otpRow != null) {
            otpRepository.delete(otpRow);
        }
    
        return otpRow;
    }

    public String getFormData(Map<String, Object> payload) {
        String otpCodePayload = payload.get("code").toString();
        Otp otpRow = otpRepository.findByCode(otpCodePayload);
    
        if (otpRow != null) {
            return otpRow.getFormData();
        }

        return "bob";
    }
}
