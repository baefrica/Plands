package com.ssafy.api.service;

import com.ssafy.common.db.dto.MemberReqDto;
import com.ssafy.common.db.entity.Member;

public interface MemberService {

    Member login(MemberReqDto memberReq);
}
