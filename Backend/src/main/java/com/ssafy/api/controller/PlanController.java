package com.ssafy.api.controller;

import com.ssafy.api.service.PlanService;
import com.ssafy.common.db.dto.request.PlanCreateReqDto;
import com.ssafy.common.db.dto.response.PlanDto;
import com.ssafy.common.db.entity.Member;
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

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/plan")
public class PlanController {

    private final PlanService planService;

    @Transactional
    @PostMapping("/create")
    @Operation(summary = "생성", description = "이미 생성된 계획코드인지 조회 후 아니면 생성 후 Dto반환", responses = {
            @ApiResponse(responseCode = "200", description = "계획 생성 성공",
            content = @Content(schema = @Schema(implementation = PlanDto.class))),
            @ApiResponse(responseCode = "409", description = "이미 존재하는 회의코드")})
    public ResponseEntity<?> createPlan(@Parameter(name = "planCreateReqDto") @RequestBody PlanCreateReqDto planCreateReqDto) {

        PlanDto planDto = planService.create(planCreateReqDto);

        if (planDto.isValid()) {
            return new ResponseEntity<PlanDto>(planDto, HttpStatus.OK);
        }
        return new ResponseEntity<Void>(HttpStatus.CONFLICT);
    }

    @Transactional
    @DeleteMapping("/{code}")
    @Operation(summary = "삭제", description = "계획정보 삭제", responses = {
            @ApiResponse(responseCode = "200", description = "계획정보 삭제 성공")})
    public ResponseEntity<?> deletePlan(@Parameter(name = "code") @PathVariable String code) {

        planService.delete(code);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
