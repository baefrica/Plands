package com.ssafy.common.aop;

import java.util.Arrays;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Component
@Aspect
@Slf4j
public class LoggingAspect {

    @Before(value="execution(* com.ssafy.webex..*.*(..))")
    public void logging(JoinPoint jp) {
        log.debug("LoggingAspect => 메서드 선언부: {}, 전달 파라미터: {}", jp.getSignature(), Arrays.toString(jp.getArgs()));
    }
}
