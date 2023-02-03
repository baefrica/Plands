import logo from "assets/images/logo_white.png";
import {
  HeaderDiv,
  HeaderBtnColumDiv,
  HeaderButtonDiv,
  LoginBtnStyle,
  RegistBtnStyle,
  LogoLink,
  LogoImg,
} from "./Header.style";

function Header() {
  return (
    <HeaderDiv>
      <LogoLink to="/">
        <LogoImg src={logo} />
      </LogoLink>
      <HeaderBtnColumDiv>
        <HeaderButtonDiv>
          <LoginBtnStyle to="/login">로그인</LoginBtnStyle>
          <RegistBtnStyle to="/regist">
            회원가입
          </RegistBtnStyle>
        </HeaderButtonDiv>
      </HeaderBtnColumDiv>
    </HeaderDiv>
  );
}

export default Header;
