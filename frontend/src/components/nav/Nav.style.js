import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BlackNav = styled.div`
  background: white;
  width: 100%;
  height: 80px;
  display: flex;
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
  margin: 2px 2px;
  border-radius: 10px;
  padding: 20px;
  font-size: 20px;
  font-weight: bolder;
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
  }
`;
