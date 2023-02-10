import React, { useState } from "react";
import {
  Container,
  FindIdBlock,
  FindIdHeader,
  Content,
  ContentRow,
} from "./FindIdPage.style";
import Header from "components/header/Header";
import Nav from "components/nav/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:9999/baekgu";

const FindIdPage = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const onClickFindBtn = (e) => {
    e.preventDefault();

    axios
      .post(`${URL}/session/id`, email.toString("utf-8"), {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        alert(res.data);
        navigate("/login");
      })
      .catch(() => {
        alert("입력 정보를 확인해주세요");
      });
  };

  return (
    <div>
      <Header />
      <Nav />
      <Container>
        <FindIdBlock>
          <FindIdHeader>
            <div id="title">아이디 찾기</div>
          </FindIdHeader>
          <Content>
            <ContentRow>
              <input
                type="email"
                id="email"
                placeholder="이메일 주소를 입력해주세요."
                value={email}
                onChange={handleEmail}
              />
            </ContentRow>
            <ContentRow>
              <button onClick={onClickFindBtn}>찾기</button>
            </ContentRow>
          </Content>
        </FindIdBlock>
      </Container>
    </div>
  );
};

export default FindIdPage;
