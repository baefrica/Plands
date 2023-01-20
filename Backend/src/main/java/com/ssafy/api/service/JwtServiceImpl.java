package com.ssafy.api.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Date;



@Slf4j
@Service
public class JwtServiceImpl implements JwtService {
    final static int EXPIRE_MINUTES = 1;

    final static String SECRET_KEY = "ssafy";

    @Override
    public <T> String createToken(String key, T data, String subject) {

        try {
            int time = 0;
            if (subject == "access-token") {
                time = 1000 * 30 * EXPIRE_MINUTES;
            } else if (subject == "refresh-token") {
                time = 1000 * 60 * 60 * 24 * 7 * 2 * EXPIRE_MINUTES;
            } else {
                log.info("another token!!!!!!!!!!");
            }
            
            // 발급 시간 정보 외 여러 필요한 정보도 넣어야 함
            // setExpiration >> 만료시간 30초전까지만 허용 >> 만료 시간을 넘겨줘야된다. 프론트에서
            String token = Jwts.builder().setHeaderParam("typ", "JWT").setHeaderParam("alg", "HS256").claim(key, data)
                    .setExpiration(new Date(System.currentTimeMillis() + time))
                    .setSubject(subject).signWith(SignatureAlgorithm.HS256, SECRET_KEY.getBytes("UTF-8")).compact();

            log.info("발급된 {} 토큰: {}", subject, token);
            return token;
        } catch (Exception e) {
            e.printStackTrace();
            log.info("토큰 생성 실패!!!!!!!!!!!!!!!!!");
            return null;
        }

    }

}
