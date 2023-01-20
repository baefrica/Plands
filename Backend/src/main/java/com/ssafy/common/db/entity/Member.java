package com.ssafy.common.db.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Member {

    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", length = 16)
    private String id;

    @Column(name = "pwd", nullable = false, length = 16)
    private String pwd;

    @Column(name = "name", nullable = false, length = 6)
    private String name;

    @Column(name = "nickname", nullable = false, length = 10)
    private String nickname;

//    @Column(name = "gender", nullable = false, columnDefinition = "VARCHAR(10) CHECK (GENDER IN ('M', 'W'))")
    @Column(name = "gender", nullable = false, length = 1)
    private char gender;

    @Column(name = "birth_day", nullable = false, length = 8)
    private String birthDay;

    @Column(name = "p_number", nullable = false, length = 11)
    private String pNumber;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @CreationTimestamp
    @Column(name = "regist_date")
    private Timestamp registDate;

    @OneToOne(mappedBy = "member")
    Token refreshToken;

}
