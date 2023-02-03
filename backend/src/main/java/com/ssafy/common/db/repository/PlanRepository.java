package com.ssafy.common.db.repository;

import com.ssafy.common.db.entity.Member;
import com.ssafy.common.db.entity.Plan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Long> {

    Optional<Plan> findByCode(String code);
    Plan save(Plan plan);
    void deleteByCode(String code);

}
