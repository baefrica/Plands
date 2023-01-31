package com.ssafy.api.service;

import com.ssafy.common.db.entity.Token;
import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;


@Slf4j
@Service
public class JwtServiceImpl implements JwtService {

    final static int EXPIRE_MINUTES = 1;

    final static String SECRET_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOWYzYWI2NzY2Mjg2NDYy" +
            "NDY0YTczNCIsIm5hbWUiOiJSYW5keSIsImF2YXRhciI6Ii8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvMTNhN2MyYzdkOG" +
            "VkNTNkMDc2MzRkOGNlZWVkZjM0NTE_cz0yMDAmcj1wZyZkPW1tIiwiaWF0IjoxNTU0NTIxNjk1LCJleHAiOjE1NTQ1MjUy" +
            "OTV9._SxRurShXS-SI3SE11z6nme9EoaD29T_DBFr8Qwngkg";

    @Override
    public <T> String createToken(String key, T data, String subject) {

        try {
            int time = 0;
            if (subject == "access-token") {
                time = 1000 * 60 * 30 * EXPIRE_MINUTES;
            } else if (subject == "refresh-token") {
                time = 1000 * 60 * 60 * 24 * 7 * 2 * EXPIRE_MINUTES;
            } else {
                log.info("another token!!!!!!!!!!");
            }

            String token = Jwts.builder()
                    .setHeaderParam("typ", "JWT")
                    .setHeaderParam("alg", "HS256")
                    .claim(key, data)
                    .setExpiration(new Date(System.currentTimeMillis() + time))
                    .setSubject(subject)
                    .signWith(SignatureAlgorithm.HS256, SECRET_KEY.getBytes("UTF-8")).compact();

            log.info("발급된 {} 토큰: {}", subject, token);
            return token;
        } catch (Exception e) {
            e.printStackTrace();
            log.info("토큰 생성 실패!!!!!!!!!!!!!!!!!");
            return null;
        }

    }

    // Jwt 토큰 유효성 검사
    public static boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
            return true;
        } catch (SignatureException ex) {
            log.error("Invalid JWT signature");
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
        }
        return false;
    }
}
