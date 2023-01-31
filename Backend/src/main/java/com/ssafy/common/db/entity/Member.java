package com.ssafy.common.db.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Table
@Entity
@Builder
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Member implements UserDetails {

    @Id
    @Column(name = "id", length = 16)
    private String id;

    @Column(name = "pwd", nullable = false, length = 100)
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

    @OneToOne(mappedBy = "member")
    Plan plan;

    @ElementCollection(fetch = FetchType.EAGER)
    @Builder.Default
    private List<String> roles = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return this.pwd;
    }

    @Override
    public String getUsername() {
        return this.id;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() { return true; }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
