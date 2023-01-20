package com.ssafy.api.service;

import com.ssafy.common.db.dto.MemberDto;
import com.ssafy.common.db.dto.MemberReqDto;
import com.ssafy.common.db.entity.Member;
import com.ssafy.common.db.repository.MemberRepository;
import com.ssafy.common.util.convertor.MemberUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MemberServiceImpl implements MemberService {

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    MemberUtil memberUtil;

    @Override
    @Transactional
    public boolean login(MemberReqDto memberReqDto) {

        Optional<Member> optional = memberRepository.findById(memberReqDto.getId());

        if(optional.isPresent()) {
            Member member = optional.get();
            return memberReqDto.getId().equals(member.getId()) && memberReqDto.getPwd().equals(member.getPwd());
        }
        return false;
    }

    @Override
    @Transactional
    public boolean regist(MemberDto memberDto) {

        Optional<Member> optional = memberRepository.findByIdOrEmail(memberDto.getId(), memberDto.getEmail());

        if(!optional.isPresent()) {
            memberRepository.save(memberUtil.memberDtoConv(memberDto));
            return true;
        }
        return false;
    }

    @Override
    @Transactional
    public MemberDto detail(String id) {

        return memberUtil.memberEntityConv(memberRepository.findById(id).get());
    }

    @Override
    @Transactional
    public List<MemberDto> findAll(int offset, int size) {

    List<MemberDto> memberDtoList = new ArrayList<>();
    List<Member> memberList = memberRepository.findAllBy(PageRequest.of(offset, size)).toList();

    for(int i=0; i<memberList.size(); i++) {
        memberDtoList.add(memberUtil.memberEntityConv(memberList.get(i)));
    }

    return memberDtoList;
    }
    @Override
    @Transactional
    public void modify(MemberDto memberDto) {

    }

    @Override
    @Transactional
    public void delete(String id) {
        memberRepository.deleteById(id);
    }
}
