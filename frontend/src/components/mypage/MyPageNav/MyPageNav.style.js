<<<<<<< HEAD
import { NavLink } from "react-router-dom";
=======
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
import styled from "styled-components";
import { colors } from "styles/variables";

export const Container = styled.div`
  display: flex;
<<<<<<< HEAD
  flex-direction: column;
  border-right: 5px solid #243b55;
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
  color: #141e30;

  :hover {
    font-size: 20px;
    background-color: #243b55;
    color: ${colors.whiteColor};
  }

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }

  #icon {
    margin-right: 15px;
=======
  align-items: center;
  flex-direction: column;
  width: 15%;
  background: ${colors.lightGrayColor};
  color: ${colors.blackColor};
  text-shadow: ${colors.pointColor} 1px 0 5px;
  outline: invert;
  font-size: 30px;
  font-weight: bold;
  line-height: 100px;
  padding-top: 3%;
`;

export const NavContent = styled.div`
  :hover {
    font-size: 35px;
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
  }
`;
