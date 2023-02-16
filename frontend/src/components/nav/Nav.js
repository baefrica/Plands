<<<<<<< HEAD
import * as S from "./Nav.style";

const Nav = () => {
  return (
    <S.BlackNav>
      <S.NavStyle to="/">홈</S.NavStyle>
      <S.NavStyle to="/plans">여행계획관리</S.NavStyle>
      <S.NavStyle to="/about">소개</S.NavStyle>
    </S.BlackNav>
  );
};
=======
import { NavStyle, BlackNav } from "./Nav.style";

function Nav() {
  return (
    <BlackNav>
      <NavStyle to="/">홈</NavStyle>
      <NavStyle to="/plans">여행계획관리</NavStyle>
      <NavStyle to="/about">소개</NavStyle>
    </BlackNav>
  );
}
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051

export default Nav;
