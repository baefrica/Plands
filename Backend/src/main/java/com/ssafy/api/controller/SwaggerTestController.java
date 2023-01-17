package com.ssafy.api.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log4j2
// Swagger3: http://localhost:8080/beakgu/swagger-ui/index.html

public class SwaggerTestController {

    /*
     * http://localhost:8080/beakgu/api/hello1
     * hello 반환 및 spring console에 로거레벨 debug 찍힘
     */
    @GetMapping("/api/hello1")
    public String hello1() {

        log.trace("TRACE TEST");
        log.info("INFO TEST");
        log.debug("DEBUG TEST");
        log.warn("WARN TEST");
        log.error("ERROR TEST");
        log.fatal("FATAL TEST");
        System.out.println("logger level : " + log.getLevel());
        return "hello";
    }

    /*
     * http://localhost:8080/beakgu/api/hello2?param=아무거나
     * param 반환
     */
    @GetMapping("/api/hello2")
    public String hello2(@RequestParam String param) {

        return param;
    }
}