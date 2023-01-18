package com.ssafy.common.db.entity;

import javax.persistence.*;

@Entity
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @OneToOne(mappedBy = "refreshtoken")
    @Column(name = "refresh_token", length = 400)
    private String refreshToken;

}
