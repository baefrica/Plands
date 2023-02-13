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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOG_OUT } from "store/slice/userSlice";
import { getMemberDetail } from "utils/api/memberApi";
import { logout } from "utils/api/sessionApi";
import Swal from "sweetalert2";

const Header = () => {
  const accessToken = useSelector((state) => {
    return state.user.accessToken;
  });
  const [nickName, setNickName] = useState("");

  if (accessToken !== null) {
    // 멤버 정보 요청
    getMemberDetail(accessToken).then((res) => {
      setNickName(res.data.nickname);
    });
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickMyPageBtn = () => {
    navigate("/mypage");
  };

  const onClickLogOutBtn = () => {
    // 로그아웃 요청
    logout(accessToken)
      .then((res) => {
        Swal.fire({
          title: "안녕히 가세요.",
          icon: "success",
          confirmButtonText: "확인",
          timer: 3000,
        });

        dispatch(LOG_OUT());
      })
      .catch((err) => {
        // console.log(err);
      });

    navigate("/");
  };

  return (
    <HeaderDiv>
      <LogoLink to="/">
        <LogoImg src={logo} />
      </LogoLink>
      {accessToken !== null ? (
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
