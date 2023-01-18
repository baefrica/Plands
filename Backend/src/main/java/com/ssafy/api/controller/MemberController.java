package com.ssafy.api.controller;

import com.ssafy.api.service.JwtService;
import com.ssafy.api.service.MemberService;
import com.ssafy.common.db.dto.MemberReqDto;
import com.ssafy.common.db.entity.Member;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@Log4j2
@CrossOrigin("*")
@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired
    MemberService memberService;

    @Autowired
    JwtService jwtService;

    public ResponseEntity<?> login(@RequestBody MemberReqDto memberReq) {

        // Entity가 아닌 DTO로 바꿔야함
        Member memberInfo = memberService.login(memberReq);

        if (memberInfo != null) {
            Map<String, Object> resultMap = new HashMap<>();
            resultMap.put("access-token", jwtService.createToken("userid", memberInfo.getId(), "access-token"));
            resultMap.put("refresh-token", jwtService.createToken("userid", memberInfo.getId(), "refresh-token"));
            return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
        } else {
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }

    }
}
