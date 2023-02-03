package com.ssafy.api.service;

import com.ssafy.common.db.dto.request.MemberLoginReqDto;
import com.ssafy.common.db.dto.request.MemberModifyReqDto;
import com.ssafy.common.db.dto.request.MemberRegistReqDto;
import com.ssafy.common.db.dto.response.MemberDto;
import com.ssafy.common.db.entity.Member;
import com.ssafy.common.db.repository.MemberRepository;
import com.ssafy.common.util.common.MemberUtil;
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
    public boolean regist(MemberRegistReqDto memberRegistReqDto) {

        Optional<Member> optional = memberRepository.findByIdOrEmail(memberRegistReqDto.getId(),
                                                                    memberRegistReqDto.getEmail());

        if(!optional.isPresent()) {

            String rawPwd = memberRegistReqDto.getPwd();
            String encodedPwd = pwdEncoder.passwordEncoder().encode(rawPwd);

            log.info("rawPwd: {}", rawPwd);
            log.info("encodedPwd : {}", encodedPwd);

            memberRegistReqDto.setPwd(encodedPwd);
            memberRepository.save(memberUtil.convToMemberEntity(memberRegistReqDto));
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
    public void modify(String id, MemberModifyReqDto memberModifyReqDto) {

        Optional<Member> optional = memberRepository.findById(id);

        Member member = optional.get();

        // 아이디, 이메일, 등록일 제외
        member.setPwd(pwdEncoder.passwordEncoder().encode(memberModifyReqDto.getPwd()));
        member.setName(memberModifyReqDto.getName());
        member.setNickname(memberModifyReqDto.getNickname());
        member.setGender(memberModifyReqDto.getGender());
        member.setBirthDay(memberModifyReqDto.getBirthDay());
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
