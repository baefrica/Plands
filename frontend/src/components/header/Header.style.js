import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderDiv = styled.div`
  background: #2c2c2c;
  width: 100%;
  display: flex;
  font-weight: 500;
  font-size: 20px;
  box-sizing: border-box;
  justify-content: space-between;
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
  justify-content: space-around;
`;

export const LoginBtnStyle = styled(NavLink)`
  background-color: white;
  width: 40%;
  text-align: center;
  padding: 10px;
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
  padding: 10px;
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
  height: 90px;
  margin: 15px;
  object-fit: cover;
`;
