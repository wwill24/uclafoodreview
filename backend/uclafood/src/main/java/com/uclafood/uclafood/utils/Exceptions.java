package com.uclafood.uclafood.utils;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class Exceptions {

    @ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "Email already in use.")
    public static class EmailException extends RuntimeException {};

}
