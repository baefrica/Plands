import logo from "assets/images/logo_white.png";
import { useSelector } from "react-redux";
import {
  HeaderDiv,
  HeaderBtnColumDiv,
  HeaderButtonDiv,
  LoginBtnStyle,
  RegistBtnStyle,
  LogoLink,
  LogoImg,
  LoginMsg,
  MyPageBtn,
  LogoutBtn,
  Loginned,
} from "./Header.style";
import axios from "axios";
import { useState } from "react";

const URL = "http://localhost:9999/beakgu/member";

const Header = () => {
  const [nickName, setNickName] = useState();

  const isLogin = useSelector((state) => {
    return state.user.isLogin;
  });
  const accessToken = useSelector((state) => {
    return state.user.accessToken;
  });

  if (isLogin === true) {
    axios({
      url: URL,
      method: "get",
      headers: {
        "X-AUTH-TOKEN": accessToken,
      },
    }).then((res) => {
      setNickName(res.data.nickname);
    });
  }

  return (
    <HeaderDiv>
      <LogoLink to="/">
        <LogoImg src={logo} />
      </LogoLink>
      {isLogin ? (
        <Loginned>
          <LoginMsg>{nickName}님 환영합니다</LoginMsg>
          <MyPageBtn to="/mypage">마이 페이지</MyPageBtn>
          <LogoutBtn to="/">로그아웃</LogoutBtn>
        </Loginned>
      ) : (
        <HeaderBtnColumDiv>
          <HeaderButtonDiv>
            <LoginBtnStyle to="/login">
              로그인
            </LoginBtnStyle>
            <RegistBtnStyle to="/regist">
              회원가입
            </RegistBtnStyle>
          </HeaderButtonDiv>
        </HeaderBtnColumDiv>
      )}
    </HeaderDiv>
  );
};

export default Header;
