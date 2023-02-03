import React from "react";
import { Container, NavContent } from "./MyPageNav.style";

function MyPageNav() {
  return (
    <Container>
      <NavContent to="/mypage">회원 정보 보기</NavContent>
      <NavContent to="/userinfo/update">
        회원 정보 수정
      </NavContent>
      <NavContent to="/password/change">
        비밀 번호 변경
      </NavContent>
      <NavContent to="/user/withdraw">회원 탈퇴</NavContent>
    </Container>
  );
}

export default MyPageNav;
