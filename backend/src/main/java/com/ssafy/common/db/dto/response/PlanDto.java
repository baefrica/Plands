package com.ssafy.common.db.dto.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class PlanDto {

    @Schema(description = "유효한 DTO인지 판별")
    private boolean valid;

    @Schema(description = "팀 코드")
    private String code;

    @Schema(description = "제목", maxLength = 50)
    private String title;

    @Schema(description = "팀장", maxLength = 16)
    private String leader;

}

