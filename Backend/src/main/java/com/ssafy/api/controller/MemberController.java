package com.ssafy.api.controller;

import com.ssafy.api.service.EmailService;
import com.ssafy.api.service.JwtService;
import com.ssafy.api.service.MemberService;
import com.ssafy.common.db.dto.MemberDto;
import com.ssafy.common.db.dto.MemberReqDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
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

    @Autowired
    EmailService emailService;

    @PostMapping("/email")
    @Operation(summary = "메일인증", description = "8자리 인증코드를 세션에 저장 및 메일 전송", responses = {
            @ApiResponse(responseCode = "200", description = "메일 보내기 성공")})
    public ResponseEntity<?> sendEmail(@Parameter(name = "email") @RequestBody String email, HttpServletRequest request) throws Exception{

        HttpSession httpSession = request.getSession();
        httpSession.setMaxInactiveInterval(5 * 60);

        String authCode = Integer.toString((int) (Math.random() * 100000000));
        httpSession.setAttribute("auth-code", authCode);

        emailService.sendEmail(email, authCode);

        return new ResponseEntity<String>(HttpStatus.OK);
    }

    @PostMapping("/login")
    @Operation(summary = "로그인", description = "로그인 및 JWT토큰 발급", responses = {
            @ApiResponse(responseCode = "200", description = "로그인 성공 및 access-token/refresh-token 발급 성공",
                    content = @Content(schema = @Schema(implementation = Map.class))),
            @ApiResponse(responseCode = "401", description = "등록되지 않은 사용자")})
    public ResponseEntity<?> login(@Parameter(name = "memberReqDto") @RequestBody MemberReqDto memberReqDto) {

        if(memberService.login(memberReqDto)) {
            Map<String, Object> resultMap = new HashMap<>();
            String refreshToken = jwtService.createToken("userid", memberReqDto.getId(), "refresh-token");
            String accessToken = jwtService.createToken("userid", memberReqDto.getId(), "access-token");

            resultMap.put("access-token", accessToken);
            resultMap.put("refresh-token", refreshToken);

            return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
        } else {
            return new ResponseEntity<Void>(HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("/signup")
    @Operation(summary = "회원가입", description = "이미 등록된 아이디/이메일인지 조회 후 아니면 회원가입", responses = {
            @ApiResponse(responseCode = "200", description = "회원가입 성공"),
            @ApiResponse(responseCode = "409", description = "이미 존재하는 사용자")})
    public ResponseEntity<?> registMember(@Parameter(name = "memberDto") @RequestBody MemberDto memberDto) {

        if(memberService.regist(memberDto)) {
            return new ResponseEntity<Void>(HttpStatus.OK);
        }
        return new ResponseEntity<Void>(HttpStatus.CONFLICT);
    }

    @GetMapping("/{id}")
    @Operation(summary = "디테일", description = "아이디에 해당하는 회원 조회", responses = {
            @ApiResponse(responseCode = "200", description = "회원 조회 성공",
                    content = @Content(schema = @Schema(implementation = MemberDto.class)))})
    public ResponseEntity<?> detailMember(@Parameter(name = "id") @PathVariable("id") String id) {

        return new ResponseEntity<MemberDto>(memberService.detail(id), HttpStatus.OK);
    }

    @GetMapping("/detail")
    @Operation(summary = "리스트", description = "설정한 offset/size 만큼의 회원리스트 반환 (sort 추가 가능)", responses = {
            @ApiResponse(responseCode = "200", description = "리스트 조회 성공",
            content = @Content(schema = @Schema(implementation = List.class)))})
    public ResponseEntity<?> findAllMember(@Parameter(name = "offset") @RequestParam("offset") int offset,
                                           @Parameter(name = "size") @RequestParam("size") int size) {

        return new ResponseEntity<List<MemberDto>>(memberService.findAll(offset, size), HttpStatus.OK);
    }

    @PutMapping
    @Operation(summary = "수정", description = "회원정보 수정", responses = {
            @ApiResponse(responseCode = "200", description = "회원정보 수정 성공")})
    public ResponseEntity<?> modifyMember(@Parameter(name = "memberDto") @RequestBody MemberDto memberDto) {

        memberService.modify(memberDto);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "삭제", description = "회원정보 삭제", responses = {
            @ApiResponse(responseCode = "200", description = "회원정보 삭제 성공")})
    public ResponseEntity<?> deleteMember(@Parameter(name = "id") @PathVariable String id) {

        memberService.delete(id);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
