import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "styles/variables";

export const HeaderDiv = styled.div`
  background: ${colors.blackColor};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  color: ${colors.whiteColor};
  box-sizing: border-box;
`;

export const Loginned = styled.div`
  display: flex;
`;

export const LoginMsg = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  color: ${colors.whiteColor};
`;

export const LogoutBtn = styled(NavLink)`
  background-color: ${colors.whiteColor};
  text-align: center;
  color: ${colors.blackColor};
  font-size: 20px;
  font-weight: bolder;
  margin: 5px;
  outline: invert;
  border: 5px solid ${colors.redColor};
  border-radius: 25px;

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }

  &:hover {
    background: ${colors.redColor};
  }

  &.active {
    font-weight: bold;
    position: relative;
  }
`;

export const HeaderBtnColumDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 50px;
`;

export const HeaderButtonDiv = styled.div`
  display: flex;
  width: 300px;
  height: 50px;
  justify-content: space-around;
`;

export const LoginBtnStyle = styled(NavLink)`
  background-color: white;
  width: 40%;
  text-align: center;
  color: black;
  font-size: 20px;
  font-weight: bolder;
  margin: 5px;
  outline: invert;
  border: 5px solid #faff00;
  border-radius: 25px;

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }

  &:hover {
    background: #faff00;
  }

  &.active {
    font-weight: bold;
    position: relative;
  }
`;

export const RegistBtnStyle = styled(NavLink)`
  background-color: white;
  width: 40%;
  text-align: center;
  color: black;
  font-size: 20px;
  font-weight: bolder;
  margin: 5px;
  outline: invert;
  border: 5px solid #41a3fe;
  border-radius: 25px;

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }

  &:hover {
    background: #41a3fe;
  }

  &.active {
    font-weight: bold;
    position: relative;
  }
`;

export const LogoLink = styled(NavLink)`
  height: 100%;
`;

export const LogoImg = styled.img`
  height: 80px;
  object-fit: cover;
`;
