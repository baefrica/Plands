<<<<<<< HEAD
import React, { useState } from "react";
import { Container, Title } from "./MyPageTitle.style";
import { useSelector } from "react-redux";
import { getMemberDetail } from "utils/api/memberApi";

const MyPageTitle = () => {
  return (
    <div>
      <Container>
        <Title>My Page</Title>
        {/* <div id="title">{nickName}님의 마이 페이지</div> */}
      </Container>
    </div>
  );
};
=======
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
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051

export default MyPageTitle;
