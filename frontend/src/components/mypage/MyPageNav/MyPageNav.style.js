import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "styles/variables";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 15%;
  background: ${colors.lightGrayColor};
  color: ${colors.blackColor};
  text-shadow: ${colors.pointColor} 1px 0 5px;
  outline: invert;
  padding-top: 3%;
`;

export const NavContent = styled(NavLink)`
  font-size: 20px;
  font-weight: bolder;
  line-height: 70px;

  :hover {
    font-size: 23px;
  }

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
`;
