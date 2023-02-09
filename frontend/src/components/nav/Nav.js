import { NavStyle, BlackNav } from "./Nav.style";

const Nav = () => {
  return (
    <BlackNav>
      <NavStyle to="/">홈</NavStyle>
      <NavStyle to="/plans">여행계획관리</NavStyle>
      <NavStyle to="/about">소개</NavStyle>
    </BlackNav>
  );
};

export default Nav;
