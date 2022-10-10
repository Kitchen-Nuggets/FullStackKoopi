package com.accenture.samplecrud.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

// Missing Annotati on
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class StudentException extends RuntimeException
{
    public StudentException()
    {

    }
    public StudentException(String message)
    {
        super(message);
    }
}
