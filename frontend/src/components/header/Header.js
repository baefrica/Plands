import logo from "assets/images/logo_white.png";
import { useDispatch, useSelector } from "react-redux";
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
import { useNavigate } from "react-router-dom";
import { LOG_OUT } from "store/slice/userSlice";

const URL = "http://localhost:9999/baekgu";

const Header = () => {
  const [nickName, setNickName] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(
    useSelector((state) => {
      return state.user.isLogin;
    })
  );

  const accessToken = useSelector((state) => {
    return state.user.accessToken;
  });

  if (isLogin === true) {
    axios({
      url: `${URL}/member`,
      method: "get",
      headers: {
        "X-AUTH-TOKEN": accessToken,
      },
    }).then((res) => {
      setNickName(res.data.nickname);
    });
  }

  const onClickMyPageBtn = () => {
    navigate("/mypage");
  };

  const onClickLogOutBtn = () => {
    axios({
      url: `${URL}/member`,
      method: "delete",
      headers: {
        "X-AUTH-TOKEN": accessToken,
      },
    }).then((res) => {
      alert("다음에 또 오세요");
      console.log(res);

      dispatch(LOG_OUT);
      setIsLogin(false);

      navigate("/");
    });
  };

  return (
    <HeaderDiv>
      <LogoLink to="/">
        <LogoImg src={logo} />
      </LogoLink>
      {isLogin ? (
        <Loginned>
          <LoginMsg>{nickName}님 환영합니다</LoginMsg>
          <MyPageBtn onClick={onClickMyPageBtn}>
            마이 페이지
          </MyPageBtn>
          <LogoutBtn onClick={onClickLogOutBtn}>
            로그아웃
          </LogoutBtn>
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
