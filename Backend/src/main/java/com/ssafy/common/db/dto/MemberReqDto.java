package com.ssafy.common.db.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
public class MemberReqDto {

    private String id;
    private String pwd;

}
