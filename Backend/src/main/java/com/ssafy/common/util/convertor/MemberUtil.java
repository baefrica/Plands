package com.ssafy.common.util.convertor;

import com.ssafy.common.db.dto.response.MemberDto;
import com.ssafy.common.db.entity.Member;
import org.springframework.stereotype.Component;

@Component
public class MemberUtil {

    public Member convToMemberEntity(MemberDto memberDto) {
        // registDate 제외
        Member member = Member.builder()
                .id(memberDto.getId())
                .pwd(memberDto.getPwd())
                .name(memberDto.getName())
                .nickname(memberDto.getNickname())
                .gender(memberDto.getGender())
                .birthDay(memberDto.getBirthDay())
                .pNumber(memberDto.getPNumber())
                .email(memberDto.getEmail())
                .build();

        // 권한정보 설정
        member.getRoles().add("User");

        return member;
    }

    public MemberDto convToMemberDto(Member member) {

        return new MemberDto(member.getId(), member.getPwd(), member.getName(),
                member.getNickname(), member.getGender(), member.getBirthDay(),
                member.getPNumber(), member.getEmail(), member.getRegistDate());
    }
}