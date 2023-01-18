package com.ssafy.api.service;

import com.ssafy.common.db.dto.MemberReqDto;
import com.ssafy.common.db.entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

@Service
public class MemberServiceImpl implements MemberService {

    @Autowired
    EntityManager entityManager;

    @Override
    public Member login(MemberReqDto memberReq) {
        
        // 어떻게든 find를 해야 함
        return entityManager.find(Member.class, memberReq);
    }
}
