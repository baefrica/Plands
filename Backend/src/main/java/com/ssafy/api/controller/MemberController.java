package com.ssafy.api.controller;

import com.ssafy.common.db.entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

@Controller
public class MemberController {

    @Autowired
    EntityManager em;

    @GetMapping()
    public void test () {

        String jpql = "select m from Member m join m.team t where t.name =:teamName";

        List<Member> resultList = em.createQuery(jpql, Member.class).setParameter("teamName", "팀1").getResultList();

        Query query = em.
    }
}
