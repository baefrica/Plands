package com.ssafy.api.service;

import com.ssafy.common.db.dto.request.PlanCreateReqDto;
import com.ssafy.common.db.dto.response.PlanDto;
import com.ssafy.common.db.entity.Member;
import com.ssafy.common.db.entity.Plan;
import com.ssafy.common.db.repository.MemberRepository;
import com.ssafy.common.db.repository.PlanRepository;
import com.ssafy.common.util.convertor.PlanUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Log4j2
@Service
@RequiredArgsConstructor
public class PlanServiceImpl implements PlanService{

    private final MemberRepository memberRepository;

    private final PlanRepository planRepository;

    private final PlanUtil planUtil;

    @Override
    @Transactional
    public PlanDto create(PlanCreateReqDto planCreateReqDto) {

        PlanDto planDto = new PlanDto();

        String code = planUtil.makePlanCode("tmp");

        Optional<Plan> planOptional = planRepository.findByCode(code);

        if(!planOptional.isPresent()) {

            // MySQL 저장 파트
            Plan plan = new Plan();

            // JPA 연관관계 매핑을 위해 조회하여 저장
            Optional<Member> memberOptional = memberRepository.findById(planCreateReqDto.getLeader());
            plan.setMember(memberOptional.get());

            plan.setCode(code);
            plan.setLeader(planCreateReqDto.getLeader());
            planRepository.save(plan);

            // NoSQL용 DTO 반환
            planDto.setCode(code);
            planDto.setTitle(planCreateReqDto.getTitle());
            planDto.setLeader(planCreateReqDto.getLeader());
            planDto.setValid(true);
        }
        
        return planDto;
    }

    @Override
    @Transactional
    public void delete(String code) { planRepository.deleteByCode(code); }
}
