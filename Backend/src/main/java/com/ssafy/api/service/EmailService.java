package com.ssafy.api.service;

import com.ssafy.common.db.entity.Member;

public interface EmailService {
    public void findPwd(Member member) throws Exception;
    public void sendEmail(String email, String code) throws Exception;
}
