package com.uclafood.uclafood.service;

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
}
