import React, { useEffect, useState } from "react";
import { Container } from "./MyPageTitle.style";
import axios from "axios";
import { useSelector } from "react-redux";

const URL = "http://localhost:9999/baekgu";

const MyPageTitle = () => {
  const [nickName, setNickName] = useState();

  const accessToken = useSelector((state) => {
    return state.user.accessToken;
  });

  useEffect(() => {
    axios({
      url: `${URL}/member`,
      method: "get",
      headers: {
        "X-AUTH-TOKEN": accessToken,
      },
    }).then((res) => {
      setNickName(res.data.nickname);
    });
  });

  return (
    <div>
      <Container>
        <div id="mypage">My Page</div>
        <div id="title">{nickName}님의 마이 페이지</div>
      </Container>
    </div>
  );
};

export default MyPageTitle;
