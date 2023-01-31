package com.ssafy.api.service;

import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface JwtService {

    String createToken(String id, String tokenType);
    String getUsername(String token);
    String resolveToken(HttpServletRequest request);
    Authentication getAuthentication(String token);
    boolean validateToken(String token);

}
