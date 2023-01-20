package com.ssafy.api.service;




import com.ssafy.common.db.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {
    private final JavaMailSender mailSender;
    private static final String ADMIN_ADDRESS = "dltkdgkr_@naver.com";

    @Async
    public void findPwd(Member member) throws Exception {

        MimeMessage message = mailSender.createMimeMessage();
        message.addRecipients(Message.RecipientType.TO, member.getEmail());
        message.setSubject("플랜즈 비밀번호 찾기 안내");

        String text = "[" + member.getId() + "]" + "님의 비밀번호는" + " [" + member.getPwd() + "]입니다.";
        message.setText(text, "utf-8");
        message.setFrom(new InternetAddress(ADMIN_ADDRESS, "플랜즈"));

        mailSender.send(message);
    }
}

