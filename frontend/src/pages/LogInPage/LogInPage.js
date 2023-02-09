import React, { useState } from "react";
import {
  Container,
  LoginBlock,
  LoginHeader,
  LoginContent,
  LoginContentRow,
} from "./LogInPage.style";
import Header from "components/header/Header";
import Nav from "components/nav/Nav";
import axios from "axios";
import { useDispatch } from "react-redux";
import { LOGIN_TOKEN } from "store/slice/userSlice";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:9999/beakgu/member";

const LogInPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleId = (event) => {
    setId(event.target.value);
  };

  const handlePw = (event) => {
    setPw(event.target.value);
  };

  const onClickRegistBtn = (e) => {
    navigate("/regist");
  };

  const onClickLoginBtn = (e) => {
    e.preventDefault();

    if (id === "") {
      alert("아이디를 입력하세요");
    } else if (pw === "") {
      alert("패스워드를 입력하세요");
    } else {
      axios
        .post(
          `${URL}/login`,
          {
            id: id,
            pwd: pw,
          },

          {
            headers: {
              // HTTP 메시지(요청과 응답 모두)에 담겨 보내는 데이터의 형식을 알려주는 헤더
              "Content-Type":
                "application/json; charset=utf-8",
              // 브라우저의 origin 에 상관없이 모든 리소스에 접근하도록 허용
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((res) => {
          alert("로그인 되었습니다");

          const accessToken =
            res.data["access-token"].value;
          const refreshToken =
            res.data["refresh-token"].value;

          dispatch(
            LOGIN_TOKEN([accessToken, refreshToken])
          );

          axios({
            url: URL,
            method: "get",
            headers: {
              "X-AUTH-TOKEN": accessToken,
            },
          }).then((res) => {
            navigate("/");
          });
        })
        .catch(() => {
          alert("아이디와 비밀번호를 확인해주세요");
        });
    }
  };

  return (
    <div>
      <Header />
      <Nav />
      <Container>
        <LoginBlock>
          <LoginHeader>
            <div id="title">LOGIN</div>
            <div id="word">여행 계획을 세워보세요!</div>
          </LoginHeader>
          <LoginContent>
            <LoginContentRow>
              <input
                type="text"
                id="id"
                placeholder="아이디를 입력해주세요."
                value={id}
                onChange={handleId}
              />
            </LoginContentRow>
            <LoginContentRow>
              <input
                type="password"
                id="pw"
                placeholder="비밀번호를 입력해주세요."
                value={pw}
                onChange={handlePw}
              />
            </LoginContentRow>
            <LoginContentRow>
              <button
                id="logIn-btn"
                onClick={onClickLoginBtn}
              >
                로그인
              </button>
            </LoginContentRow>
            <LoginContentRow>
              <div id="footer">
                <p>아직 회원이 아니신가요?</p>
                <button
                  id="signIn-btn"
                  onClick={onClickRegistBtn}
                >
                  회원가입
                </button>
                <button id="findId-btn">아이디 찾기</button>
                <button id="findPw-btn">
                  비밀번호 찾기
                </button>
              </div>
            </LoginContentRow>
          </LoginContent>
        </LoginBlock>
      </Container>
    </div>
  );
};

export default LogInPage;
