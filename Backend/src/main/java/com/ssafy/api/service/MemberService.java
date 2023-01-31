package com.ssafy.api.service;

import com.ssafy.common.db.dto.response.MemberDto;
import com.ssafy.common.db.dto.request.MemberLoginReqDto;

import java.util.List;

public interface MemberService {

    boolean login(MemberLoginReqDto memberLoginReqDto);
    boolean regist(MemberDto memberDto);
    MemberDto detail(String id);
    List<MemberDto> findAll(int offset, int size);
    boolean findPwd(String email, String id, String newPwd);
    void modify(MemberDto memberDto);
    void delete(String id);
}
