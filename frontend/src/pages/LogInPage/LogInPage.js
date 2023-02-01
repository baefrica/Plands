import React, { useState } from "react";
import {
  LoginBlock,
  LoginHeader,
  LoginContent,
  LoginContentRow,
} from "./LogInPage.style";
import Header from "components/header/Header";
import Nav from "components/nav/Nav";

export default function LogInPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const LogInBtn = () => {
    if (id === "") {
      alert("아이디를 입력하세요");
    } else if (pw === "") {
      alert("패스워드를 입력하세요");
    }
  };

  return (
    <div>
      <Header />
      <Nav />
      <LoginBlock>
        <LoginHeader>
          <div id="title">LOGIN</div>
          <div id="word">여행 계획을 세워보세요!</div>
        </LoginHeader>
        <LoginContent>
          <LoginContentRow>
            <input
              id="id"
              type="text"
              placeholder="아이디를 입력해주세요."
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
          </LoginContentRow>
          <LoginContentRow>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={(event) => {
                setPw(event.target.value);
              }}
            />
          </LoginContentRow>
          <LoginContentRow>
            <button
              id="logIn-btn"
              onClick={() => LogInBtn()}
            >
              로그인
            </button>
          </LoginContentRow>
          <LoginContentRow>
            <div id="footer">
              <p>아직 회원이 아니신가요?</p>
              <button id="signIn-btn">회원가입</button>
              <button id="findId-btn">아이디 찾기</button>
              <button id="findPw-btn">비밀번호 찾기</button>
            </div>
          </LoginContentRow>
        </LoginContent>
      </LoginBlock>
    </div>
  );
}
