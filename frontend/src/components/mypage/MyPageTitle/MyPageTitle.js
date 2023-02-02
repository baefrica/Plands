import React from "react";
import { Container } from "./MyPageTitle.style";

function MyPageTitle() {
  return (
    <div>
      <Container>
        <div id="mypage">My Page</div>
        <div id="title">닉네임님의 마이 페이지</div>
      </Container>
    </div>
  );
}

export default MyPageTitle;
