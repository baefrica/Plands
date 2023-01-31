package com.ssafy.api.service;

public interface JwtService {

    <T> String createToken(String key, T data, String subject);
}
