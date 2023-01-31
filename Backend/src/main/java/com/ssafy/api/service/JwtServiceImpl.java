package com.ssafy.api.service;

import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.List;


@Slf4j
@Service
@RequiredArgsConstructor
public class JwtServiceImpl implements JwtService{

    @Value("${beakgu.secretkey}")
    private String secretKey;

    private final UserDetailsService userDetailsService;

    @PostConstruct
    protected void init() {
        log.info("변환 전 secretKey: {}", secretKey);
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes(StandardCharsets.UTF_8));
        log.info("변환 후 secretKey: {}", secretKey);
    }

    @Override
    public String createToken(String id, String tokenType) {
        log.info("createToken 실행 : {} ", tokenType);

        Claims claims = Jwts.claims().setSubject(id);

        int time;

        if(tokenType.equals("accessToken")) {
            time = 1000 * 60 * 30;
        }
        else if(tokenType.equals("refreshToken")) {
            time = 1000 * 60 * 60 * 24 * 7 * 2;
        }
        else {
            return null;
        }

        String token = Jwts.builder()
                .setClaims(claims)
                .setExpiration(new Date(System.currentTimeMillis() + time))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();

        log.info("{}에게 {}분 동안 유효한 {} 토큰 발급 : {}", claims.getSubject(), time/60000, tokenType, token);

        return token;
    }

    // 토큰을 받아 파싱하여 Subject로 지정된 유저 이름 반환
    public String getUsername(String token) {
        log.info("getUsername 실행");
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    // HTTP 헤더에서 헤더명 X-AUTH-TOKEN인 토큰의 String 값 추출
    public String resolveToken(HttpServletRequest request) {
        log.info("resolveToken 실행");
        return request.getHeader("X-AUTH-TOKEN");
    }

    @Transactional
    // 인증 성공 시 SecurityContextHolder에 저장할 인증정보 생성
    public Authentication getAuthentication(String token) {

        UserDetails userDetails = userDetailsService.loadUserByUsername(this.getUsername(token));

        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    // Jwt 토큰 유효성 검사
    public boolean validateToken(String token) {
        log.info("validateToken 실행");
        try {
            // Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return true;
        } catch (MalformedJwtException ex) {
            log.error("========== Invalid JWT token ==========");
        } catch (ExpiredJwtException ex) {
            log.error("========== Expired JWT token ==========");
        } catch (UnsupportedJwtException ex) {
            log.error("========== Unsupported JWT token ==========");
        } catch (IllegalArgumentException ex) {
            log.error("========== JWT claims string is empty. ==========");
        }

        return false;
    }
}
