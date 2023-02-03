package com.ssafy.api.service;

import com.ssafy.common.db.dto.request.TokenDto;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;


@Slf4j
@Service
@RequiredArgsConstructor
public class JwtServiceImpl implements JwtService{

    @Value("${beakgu.secretkey}")
    private String secretKey;

    private final UserDetailsService userDetailsService;

    private final RedisService redisService;

    @PostConstruct
    protected void init() {
        log.info("변환 전 secretKey: {}", secretKey);
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes(StandardCharsets.UTF_8));
        log.info("변환 후 secretKey: {}", secretKey);
    }

    @Override
    public TokenDto createToken(String id, String tokenType) {
        log.info("createToken 실행 : {} ", tokenType);

        // Claims => Map<String, Object> Type
        Claims claims = Jwts.claims().setSubject(id);

        long time;

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

        TokenDto tokenDto = new TokenDto(tokenType, token, time);

        log.info("유저 {} 에게 {}분 동안 유효한 {} 토큰 발급 : {}", claims.getSubject(), time/60000, tokenType, token);

        return tokenDto;
    }

    // 토큰을 받아 파싱하여 Subject로 지정된 유저 이름 반환
    public String getUsername(String token) {
        log.info("getUsername 실행");
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    // 토큰을 받아 파싱하여 만료시간 반환
    public Date getExpireTime(String token) {
        log.info("getExpireTime 실행");
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getExpiration();
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
//            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
//            String id = claims.getBody().getSubject();

            // 블랙리스트에 등록된 토큰인지 확인
            if(!redisService.hasKeyBlackList(token)) {
                return true;
            }
            
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
