package com.ssafy.common.db.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table
// (uniqueConstraints = @UniqueConstraint(name = "제약조건 명", columnNames = {"컬럼1", "컬럼2"}))
public class Member {

   @Id @GeneratedValue
   private Long id;

   @Column
   private int age;
}
