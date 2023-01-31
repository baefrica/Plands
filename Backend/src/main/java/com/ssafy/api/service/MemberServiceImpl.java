package com.ssafy.api.service;

import com.ssafy.common.db.dto.response.MemberDto;
import com.ssafy.common.db.dto.request.MemberLoginReqDto;
import com.ssafy.common.db.entity.Member;
import com.ssafy.common.db.repository.MemberRepository;
import com.ssafy.common.util.convertor.MemberUtil;
import com.ssafy.common.util.encorder.PwdEncoder;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Log4j2
@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService, UserDetailsService {

    private final MemberRepository memberRepository;

    private final MemberUtil memberUtil;

    private final PwdEncoder pwdEncoder;

    @Override
    @Transactional
    public boolean login(MemberLoginReqDto memberLoginReqDto) {

        Optional<Member> optional = memberRepository.findById(memberLoginReqDto.getId());

        if(optional.isPresent()) {
            Member member = optional.get();

            log.info("memberReqDto.getPwd(): {}", memberLoginReqDto.getPwd().toString());
            log.info("member.getPassword(): {}", member.getPassword().toString());
            log.info("Pwd Matched? : {}",
                    pwdEncoder.passwordEncoder().matches(memberLoginReqDto.getPwd(), member.getPassword()));

            return memberLoginReqDto.getId().equals(member.getId()) && pwdEncoder.passwordEncoder()
                    .matches(memberLoginReqDto.getPwd(), member.getPassword());
        }
        return false;
    }

    @Override
    @Transactional
    public boolean regist(MemberDto memberDto) {

        Optional<Member> optional = memberRepository.findByIdOrEmail(memberDto.getId(), memberDto.getEmail());

        if(!optional.isPresent()) {

            String rawPwd = memberDto.getPwd();
            String encodedPwd = pwdEncoder.passwordEncoder().encode(rawPwd);

            log.info("rawPwd: {}", rawPwd);
            log.info("encodedPwd : {}", encodedPwd);

            memberDto.setPwd(encodedPwd);
            memberRepository.save(memberUtil.convToMemberEntity(memberDto));
            return true;
        }
        return false;
    }

    @Override
    @Transactional
    public MemberDto detail(String id) {

        return memberUtil.convToMemberDto(memberRepository.findById(id).get());
    }

    @Override
    @Transactional
    public List<MemberDto> findAll(int offset, int size) {

        List<MemberDto> memberDtoList = new ArrayList<>();
        List<Member> memberList = memberRepository.findAllBy(PageRequest.of(offset, size)).toList();

        for(int i = 0; i < memberList.size(); i++) {
            memberDtoList.add(memberUtil.convToMemberDto(memberList.get(i)));
        }
        return memberDtoList;
    }

    @Override
    @Transactional
    public boolean findPwd(String email, String id, String newPwd) {

        Optional<Member> optional = memberRepository.findByIdAndEmail(id, email);

        if(optional.isPresent()) {

            Member member = optional.get();
            String encodedPwd = pwdEncoder.passwordEncoder().encode(newPwd);
            member.setPwd(encodedPwd);
            return true;
        }

        return false;
    }

    @Override
    @Transactional
    public void modify(MemberDto memberDto) {

        Optional<Member> optional = memberRepository.findById(memberDto.getId());
        
        Member member = optional.get();

        // 아이디, 이메일, 등록일 제외
        member.setPwd(memberDto.getPwd());
        member.setName(memberDto.getName());
        member.setNickname(memberDto.getNickname());
        member.setGender(memberDto.getGender());
        member.setBirthDay(memberDto.getBirthDay());
        member.setPNumber(member.getPNumber());

        // 자동 감지로 인해 save 메소드 필요하지 않음
        // memberRepository.save(member);
    }

    @Override
    @Transactional
    public void delete(String id) { memberRepository.deleteById(id); }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        return memberRepository.getReferenceById(username);
    }
}
