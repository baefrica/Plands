import styled from "styled-components";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import { colors } from "styles/variables";

export const BlackNav = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: ${colors.whiteColor};
  z-index: 15;
  border-bottom: 2px solid ${colors.pointColor};

  span {
  }
`;

export const NavStyle = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-decoration: none;
  color: ${colors.blackColor};
  font-size: 20px;
  font-weight: bolder;
  letter-spacing: 0.1rem;
  transition: all 0.5s ease;

  &:hover {
    color: ${colors.whiteColor};
    background: ${colors.blackColor};
    transition: all 0.5s ease;
=======

export const BlackNav = styled.div`
  background: white;
  width: 100%;
  display: flex;
  padding: 20px;
  font-weight: 500;
  font-size: 20px;
  box-sizing: border-box;
  border-top: 3px solid #2c2c2c;
  border-bottom: 3px solid #2c2c2c;
`;

export const NavStyle = styled(NavLink)`
  color: #2c2c2c;
  width: 150px;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  font-weight: bolder;
  border-radius: 20px;
  margin-left: 20px;
  outline: invert;

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }

  &:hover {
    color: white;
    background-color: #2c2c2c;
  }

  &.active {
    font-weight: bold;
    color: white;
    background-color: #2c2c2c;
    position: relative;
    top: 2px;
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
  }
`;
