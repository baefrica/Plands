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
import { useNavigate } from "react-router-dom";
import { findId } from "utils/api/memberApi";

const FindIdPage = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const onClickFindBtn = (e) => {
    e.preventDefault();

    // 아이디 찾기 요청
    findId(email)
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
