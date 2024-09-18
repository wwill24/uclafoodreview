package com.uclafood.uclafood.utils;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.BAD_REQUEST, reason="bob is amazing")
public class UserException extends RuntimeException {
    
}
