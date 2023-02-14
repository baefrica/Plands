import React, { useState } from "react";
import { Container, Title } from "./MyPageTitle.style";
import { useSelector } from "react-redux";
import { getMemberDetail } from "utils/api/memberApi";

const MyPageTitle = () => {
  // const [nickName, setNickName] = useState("");

  // const accessToken = useSelector((state) => {
  //   return state.user.accessToken;
  // });

  // if (accessToken !== null) {
  //   // 멤버 정보 요청
  //   getMemberDetail(accessToken).then((res) => {
  //     setNickName(res.data.nickname);
  //   });
  // }

  return (
    <div>
      <Container>
        <Title>My Page</Title>
        {/* <div id="title">{nickName}님의 마이 페이지</div> */}
      </Container>
    </div>
  );
};

export default MyPageTitle;
