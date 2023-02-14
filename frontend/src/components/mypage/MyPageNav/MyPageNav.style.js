import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "styles/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(#141e30, #243b55);
  border-right: 2px solid ${colors.pointColor};
  outline: invert;
  padding-top: 3%;
  width: 400px;
`;

export const NavContent = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0px 30px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bolder;
  padding: 20px;
  width: 70%;
  color: ${colors.whiteColor};

  :hover {
    font-size: 20px;
    background-color: #03e9f4;
    color: linear-gradient(#141e30, #243b55);
  }

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }

  #icon {
    margin-right: 15px;
  }
`;
