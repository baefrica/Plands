package com.ssafy.api.controller;

import com.ssafy.api.service.EmailService;
import com.ssafy.api.service.JwtService;
import com.ssafy.api.service.MemberService;
import com.ssafy.api.service.RedisService;
import com.ssafy.common.db.dto.request.*;
import com.ssafy.common.db.dto.response.MemberDto;
import com.ssafy.common.util.common.MemberUtil;
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
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {

    private final MemberUtil memberUtil;

    private final RandValueMaker randValueMaker;

    private final MemberService memberService;

    private final EmailService emailService;

    private final JwtService jwtService;

    private final RedisService redisService;

    @Transactional
    @PostMapping("/eauth")
    @Operation(summary = "메일인증", description = "8자리 인증코드를 세션에 저장 및 메일 전송", responses = {
            @ApiResponse(responseCode = "200", description = "인증 메일 보내기 성공")})
    public ResponseEntity<?> sendEmail(@Parameter(name = "email") @RequestBody String email,
                                       HttpServletRequest request) throws Exception{

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

        String id = memberUtil.getMemberIdFromPrincipal();

        String newPwd = randValueMaker.makeRandPwd();
        String email = memberPwdReqDto.getEmail();

        if(memberService.findPwd(email, id, newPwd)) {
            emailService.sendPwd(email, newPwd);
            return new ResponseEntity<Void>(HttpStatus.OK);
        }

        return new ResponseEntity<Void>(HttpStatus.UNAUTHORIZED);
    }

    @Transactional
    @PostMapping("/login")
    @Operation(summary = "로그인", description = "로그인 및 JWT토큰 발급 후 Redis 저장", responses = {
            @ApiResponse(responseCode = "200", description = "로그인 성공 및 access-token/refresh-token 발급 및 저장 성공",
                    content = @Content(schema = @Schema(implementation = Map.class))),
            @ApiResponse(responseCode = "401", description = "등록되지 않은 사용자")})
    public ResponseEntity<?> login(@Parameter(name = "memberLoginReqDto")
                                       @RequestBody MemberLoginReqDto memberLoginReqDto) {

        if(memberService.login(memberLoginReqDto)) {

            Map<String, TokenDto> resultMap = new HashMap<>();

            TokenDto accessToken = jwtService.createToken(memberLoginReqDto.getId(), "accessToken");
            TokenDto refreshToken = jwtService.createToken(memberLoginReqDto.getId(), "refreshToken");
            resultMap.put("access-token", accessToken);
            resultMap.put("refresh-token", refreshToken);

            // redis에 refresh-token 저장
            redisService.set(memberLoginReqDto.getId()+"_refresh_token", refreshToken.getValue(),
                    refreshToken.getExpireTime(), TimeUnit.MILLISECONDS);

            return new ResponseEntity<Map<String, TokenDto>>(resultMap, HttpStatus.OK);
        } else {
            return new ResponseEntity<Void>(HttpStatus.UNAUTHORIZED);
        }
    }

    @Transactional
    @PostMapping("/logout")
    @Operation(summary = "로그아웃", description = "access-token 블랙리스트 등록, refresh-token 삭제", responses = {
            @ApiResponse(responseCode = "200", description = "토큰 처리 성공")})
    public ResponseEntity<?> logout(HttpServletRequest request) {

        String token = jwtService.resolveToken(request);
//      if(jwtService.validateToken(token)) { ... } 유효성 검사 => logout 요청 시 하므로 2번하게 되어 일단 제외

        String id = memberUtil.getMemberIdFromPrincipal();

        Date expireTime = jwtService.getExpireTime(token);
        // Date 객체는 생성 시 초기화하지 않아도 default 현재시간
        Date nowTime = new Date();
        Long remainTime = expireTime.getTime() - nowTime.getTime();

        // refresh-token 삭제
        redisService.delete(id);

        // access-token blacklist 등록
        redisService.setBlackList(id+"_access_token", token, remainTime, TimeUnit.MILLISECONDS);

        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @Transactional
    @PostMapping("/regist")
    @Operation(summary = "회원가입", description = "이미 등록된 아이디/이메일인지 조회 후 아니면 회원가입", responses = {
            @ApiResponse(responseCode = "200", description = "회원가입 성공"),
            @ApiResponse(responseCode = "409", description = "이미 존재하는 사용자")})
    public ResponseEntity<?> registMember(@Parameter(name = "memberRegistReqDto")
                                              @RequestBody MemberRegistReqDto memberRegistReqDto) {

        if(memberService.regist(memberRegistReqDto)) {
            return new ResponseEntity<Void>(HttpStatus.OK);
        }
        return new ResponseEntity<Void>(HttpStatus.CONFLICT);
    }

    @Transactional
    @GetMapping
    @Operation(summary = "디테일", description = "아이디에 해당하는 회원 조회", responses = {
            @ApiResponse(responseCode = "200", description = "회원 조회 성공",
                    content = @Content(schema = @Schema(implementation = MemberDto.class)))})
    public ResponseEntity<?> detailMember() {

        String id = memberUtil.getMemberIdFromPrincipal();

        return new ResponseEntity<MemberDto>(memberService.detail(id), HttpStatus.OK);
    }

    // 쓰려면 admin만 되게 할 지 고려해야 함
    @Transactional
    @GetMapping("/list")
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
    public ResponseEntity<?> modifyMember(@Parameter(name = "memberModifyReqDto")
                                              @RequestBody MemberModifyReqDto memberModifyReqDto) {

        String id = memberUtil.getMemberIdFromPrincipal();

        memberService.modify(id, memberModifyReqDto);

        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping
    @Operation(summary = "삭제", description = "회원정보 삭제", responses = {
            @ApiResponse(responseCode = "200", description = "회원정보 삭제 성공")})
    public ResponseEntity<?> deleteMember() {

        String id = memberUtil.getMemberIdFromPrincipal();

        memberService.delete(id);

        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
