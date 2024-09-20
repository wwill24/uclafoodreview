package com.uclafood.uclafood.service;

import java.util.Random;

public class OtpService {
    public static String GenerateOTP() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);

        return String.valueOf(otp);
    }
}
