package com.ssafy.api.service;

public interface EmailService {
    public void sendPwd(String email, String pwd) throws Exception;
    public void emailAuth(String email, String code) throws Exception;
}
