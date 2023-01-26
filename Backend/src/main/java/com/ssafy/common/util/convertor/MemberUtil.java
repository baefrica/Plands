package com.ssafy.common.util.convertor;

import com.ssafy.common.db.dto.MemberDto;
import com.ssafy.common.db.entity.Member;
import org.springframework.stereotype.Component;

@Component
public class MemberUtil {

    public Member memberDtoConv(MemberDto memberDto) {
        // registDate 제외
        return Member.builder()
                .id(memberDto.getId())
                .pwd(memberDto.getPwd())
                .name(memberDto.getName())
                .nickname(memberDto.getNickname())
                .gender(memberDto.getGender())
                .birthDay(memberDto.getBirthDay())
                .pNumber(memberDto.getPNumber())
                .email(memberDto.getEmail())
                .role(memberDto.getRole())
                .build();
    }

    public MemberDto memberEntityConv(Member member) {

        return new MemberDto(member.getId(), member.getPwd(), member.getName(),
                member.getNickname(), member.getGender(), member.getBirthDay(),
                member.getPNumber(), member.getEmail(), member.getRegistDate(), member.getRole());
    }
}