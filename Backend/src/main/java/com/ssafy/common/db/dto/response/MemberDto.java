package com.ssafy.common.db.dto.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import java.sql.Timestamp;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MemberDto {

    @Schema(description = "아이디", maxLength = 16)
    private String id;
    
    @Schema(description = "비밀번호", maxLength = 16)
    private String pwd;

    @Schema(description = "이름", maxLength = 6)
    private String name;

    @Schema(description = "닉네임", maxLength = 10)
    private String nickname;

    @Schema(description = "성별", maxLength = 1, allowableValues = {"W", "M"})
    private char gender;

    @Schema(description = "생일", pattern = "YYYYMMDD", maxLength = 8)
    private String birthDay;

    @Schema(description = "핸드폰번호", example = "01012345678", maxLength = 11)
    private String pNumber;

    @Schema(description = "이메일", example = "example@naver.com", maxLength = 100)
    private String email;

    @JsonIgnore
    @Schema(description = "등록일", pattern = "YYYY-MM-DD HH:MM:SS")
    private Timestamp registDate;

}
