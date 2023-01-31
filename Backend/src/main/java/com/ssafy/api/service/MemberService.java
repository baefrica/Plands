package com.ssafy.api.service;

import com.ssafy.common.db.dto.MemberDto;
import com.ssafy.common.db.dto.MemberReqDto;

import java.util.List;

public interface MemberService {

    boolean login(MemberReqDto memberReqDto);
    boolean regist(MemberDto memberDto);
    MemberDto detail(String id);
    List<MemberDto> findAll(int offset, int size);
    void modify(MemberDto memberDto);
    void delete(String id);
}
