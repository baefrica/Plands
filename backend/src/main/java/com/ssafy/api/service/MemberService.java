package com.ssafy.api.service;

import com.ssafy.common.db.dto.request.MemberModifyReqDto;
import com.ssafy.common.db.dto.request.MemberRegistReqDto;
import com.ssafy.common.db.dto.response.MemberDto;
import com.ssafy.common.db.dto.request.MemberLoginReqDto;

import java.util.List;

public interface MemberService {

    boolean login(MemberLoginReqDto memberLoginReqDto);
    boolean regist(MemberRegistReqDto memberRegistReqDto);
    MemberDto detail(String id);
    List<MemberDto> findAll(int offset, int size);
    boolean findPwd(String email, String id, String newPwd);
    void modify(String id, MemberModifyReqDto memberModifyReqDto);
    void delete(String id);
}
