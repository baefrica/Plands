package com.ssafy.common.db.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MemberLoginReqDto {

    @Schema(description = "아이디", maxLength = 16)
    private String id;

    @Schema(description = "비밀번호", maxLength = 16)
    private String pwd;

}
