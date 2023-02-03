package com.ssafy.api.service;

import com.ssafy.common.db.dto.request.TokenDto;
import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

public interface JwtService {

    TokenDto createToken(String id, String tokenType);
    String getUsername(String token);
    Date getExpireTime(String token);
    String resolveToken(HttpServletRequest request);
    Authentication getAuthentication(String token);
    boolean validateToken(String token);

}
