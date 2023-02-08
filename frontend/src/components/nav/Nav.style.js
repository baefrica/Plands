import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "styles/variables";

export const BlackNav = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.whiteColor};
  width: 100%;
  height: 50px;
  font-weight: 500;
  font-size: 20px;
  box-sizing: border-box;
  border-top: 3px solid ${colors.blackColor};
  border-bottom: 3px solid ${colors.blackColor};
`;

export const NavStyle = styled(NavLink)`
  color: ${colors.blackColor};
  text-align: center;
  border-radius: 5px;
  padding: 7px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 30px;
  margin-right: 20px;
  outline: invert;

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }

  &:hover {
    color: ${colors.whiteColor};
    background-color: ${colors.skyblueColor};
  }

  &.active {
    font-weight: bold;
    color: ${colors.whiteColor};
    background-color: ${colors.skyblueColor};
    position: relative;
  }
`;
