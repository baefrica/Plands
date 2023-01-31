package com.ssafy.api.controller;

import com.ssafy.api.service.EmailService;
import com.ssafy.api.service.JwtService;
import com.ssafy.api.service.MemberService;
import com.ssafy.common.db.dto.request.MemberLoginReqDto;
import com.ssafy.common.db.dto.request.MemberPwdReqDto;
import com.ssafy.common.db.dto.response.MemberDto;
import com.ssafy.common.util.etc.RandValueMaker;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {

    private final MemberService memberService;

    private final EmailService emailService;

    private final RandValueMaker randValueMaker;

    private final JwtService jwtService;

    @Transactional
    @PostMapping("/eauth")
    @Operation(summary = "메일인증", description = "8자리 인증코드를 세션에 저장 및 메일 전송", responses = {
            @ApiResponse(responseCode = "200", description = "인증 메일 보내기 성공")})
    public ResponseEntity<?> sendEmail(@Parameter(name = "email") @RequestBody String email, HttpServletRequest request) throws Exception{

        HttpSession httpSession = request.getSession();
        httpSession.setMaxInactiveInterval(5 * 60);

        String authCode = randValueMaker.makeAuthCode();
        httpSession.setAttribute("auth-code", authCode);

        emailService.emailAuth(email, authCode);

        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @Transactional
    @PostMapping("/epwd")
    @Operation(summary = "비밀번호 찾기", description = "비밀번호생성, 저장, 메일 전송", responses = {
            @ApiResponse(responseCode = "200", description = "비밀번호 생성, 저장, 메일 전송 성공"),
            @ApiResponse(responseCode = "401", description = "등록되지 않은 사용자")})
    public ResponseEntity<?> findPwd(@Parameter(name = "memberPwdReqDto") @RequestBody MemberPwdReqDto memberPwdReqDto)
            throws Exception{

        String newPwd = randValueMaker.makeRandPwd();
        String email = memberPwdReqDto.getEmail();
        String id = memberPwdReqDto.getId();

        if(memberService.findPwd(email, id, newPwd)) {
            emailService.sendPwd(email, newPwd);
            return new ResponseEntity<Void>(HttpStatus.OK);
        }

        return new ResponseEntity<Void>(HttpStatus.UNAUTHORIZED);
    }

    @Transactional
    @PostMapping("/login")
    @Operation(summary = "로그인", description = "로그인 및 JWT토큰 발급", responses = {
            @ApiResponse(responseCode = "200", description = "로그인 성공 및 access-token/refresh-token 발급 성공",
                    content = @Content(schema = @Schema(implementation = Map.class))),
            @ApiResponse(responseCode = "401", description = "등록되지 않은 사용자")})
    public ResponseEntity<?> login(@Parameter(name = "memberLoginReqDto") @RequestBody MemberLoginReqDto memberLoginReqDto) {

        if(memberService.login(memberLoginReqDto)) {

            Map<String, String> resultMap = new HashMap<>();

            resultMap.put("access-token", jwtService.createToken(memberLoginReqDto.getId(), "accessToken"));
            resultMap.put("refresh-token", jwtService.createToken(memberLoginReqDto.getId(), "refreshToken"));

            return new ResponseEntity<Map<String, String>>(resultMap, HttpStatus.OK);
        } else {
            return new ResponseEntity<Void>(HttpStatus.UNAUTHORIZED);
        }
    }

    @Transactional
    @PostMapping("/regist")
    @Operation(summary = "회원가입", description = "이미 등록된 아이디/이메일인지 조회 후 아니면 회원가입", responses = {
            @ApiResponse(responseCode = "200", description = "회원가입 성공"),
            @ApiResponse(responseCode = "409", description = "이미 존재하는 사용자")})
    public ResponseEntity<?> registMember(@Parameter(name = "memberDto") @RequestBody MemberDto memberDto) {

        if(memberService.regist(memberDto)) {
            return new ResponseEntity<Void>(HttpStatus.OK);
        }
        return new ResponseEntity<Void>(HttpStatus.CONFLICT);
    }

    @Transactional
    @GetMapping
    @Operation(summary = "디테일", description = "아이디에 해당하는 회원 조회", responses = {
            @ApiResponse(responseCode = "200", description = "회원 조회 성공",
                    content = @Content(schema = @Schema(implementation = MemberDto.class)))})
    public ResponseEntity<?> detailMember(@Parameter(name = "id") @RequestParam("id") String id) {

        return new ResponseEntity<MemberDto>(memberService.detail(id), HttpStatus.OK);
    }

    @Transactional
    @GetMapping("/detail")
    @Operation(summary = "리스트", description = "설정한 offset/size 만큼의 회원리스트 반환 (sort 추가 가능)", responses = {
            @ApiResponse(responseCode = "200", description = "리스트 조회 성공",
            content = @Content(schema = @Schema(implementation = List.class)))})
    public ResponseEntity<?> findAllMember(@Parameter(name = "offset") @RequestParam("offset") int offset,
                                           @Parameter(name = "size") @RequestParam("size") int size) {

        return new ResponseEntity<List<MemberDto>>(memberService.findAll(offset, size), HttpStatus.OK);
    }

    @Transactional
    @PutMapping
    @Operation(summary = "수정", description = "회원정보 수정", responses = {
            @ApiResponse(responseCode = "200", description = "회원정보 수정 성공")})
    public ResponseEntity<?> modifyMember(@Parameter(name = "memberDto") @RequestBody MemberDto memberDto) {

        memberService.modify(memberDto);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("/{id}")
    @Operation(summary = "삭제", description = "회원정보 삭제", responses = {
            @ApiResponse(responseCode = "200", description = "회원정보 삭제 성공")})
    public ResponseEntity<?> deleteMember(@Parameter(name = "id") @PathVariable String id) {

        memberService.delete(id);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
