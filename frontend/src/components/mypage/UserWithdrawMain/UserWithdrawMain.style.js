import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "styles/variables";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 85%;
  background: ${colors.midGrayColor};
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  background-color: ${colors.blackColor};
  border-radius: 25px;
  border: 5px solid ${colors.blackColor};
  margin-top: 10%;
  margin-bottom: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-right: 25px;
  font-size: 30px;
  font-weight: bold;
  line-height: 80px;
  color: ${colors.pointColor};

  :hover {
    font-size: 35px;
  }
`;

export const WithdrawBtn = styled.button`
  display: flex;
  width: 200px;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 25px;
  background-color: ${colors.whiteColor};
  text-align: center;
  padding: 10px;
  color: ${colors.black};
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
    color: ${colors.whiteColor};
  }

  &.active {
    font-weight: bold;
    position: relative;
  }
`;
