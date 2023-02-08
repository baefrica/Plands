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
  LogoutBtn,
  Loginned,
} from "./Header.style";

function Header() {
  const id = useSelector((state) => {
    return state.user.id;
  });

  const isLogin = useSelector((state) => {
    return state.user.isLogin;
  });

  return (
    <HeaderDiv>
      <LogoLink to="/">
        <LogoImg src={logo} />
      </LogoLink>
      {isLogin ? (
        <Loginned>
          <LoginMsg>{id}님 환영합니다</LoginMsg>
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
}

export default Header;
