package com.ssafy.api.service;

import com.ssafy.common.db.dto.request.PlanCreateReqDto;
import com.ssafy.common.db.dto.response.PlanDto;

public interface PlanService {

    public PlanDto create(PlanCreateReqDto planCreateReqDto);
    public void delete(String code);
}
