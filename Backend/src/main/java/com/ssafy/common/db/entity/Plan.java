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
public class Plan {

    @Id
    @Column(name = "code", nullable = false)
    private String code;

    @CreationTimestamp
    @Column(name = "regist_date")
    private Timestamp registDate;

    @Column(name = "leader")
    private String leader;

    @OneToOne
    @JoinColumn(name = "leader_id")
    private Member member;
}

