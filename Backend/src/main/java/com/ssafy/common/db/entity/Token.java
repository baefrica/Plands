package com.ssafy.common.db.entity;

import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
public class Token {

    @Id
    private String id;

    @Column(name = "refresh_token", length = 400)
    private String refreshToken;

    @OneToOne
    @JoinColumn(name = "token_id")
    private Member member;
}
