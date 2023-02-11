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
  flex-direction: column;
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
  flex-direction: row;
  padding-top: 15px;
  padding-bottom: 15px;

  label {
    font-size: 25px;
    font-weight: bold;
    line-height: 80px;
    color: ${colors.pointColor};
    margin-right: 30px;

    :hover {
      font-size: 30px;
    }
  }

  input {
    text-align: center;
    font-size: 20px;
    color: ${colors.pointColor};
    background: ${colors.heavyGrayColor};
    border: 3px solid ${colors.pointColor};
    border: 0;
    border-radius: 15px;
    padding-top: 10px;
    padding-bottom: 10px;

    :hover {
      border: 3px solid ${colors.pointColor};
    }
  }
`;

export const CorrectInput = styled.div`
  font-weight: bold;
  color: ${colors.greenColor};
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
  padding-bottom: 10px;
`;

export const InvalidInput = styled.div`
  font-weight: bold;
  color: ${colors.redColor};
  text-align: left;
  margin-left: 10px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const UpdateBtn = styled.button`
  background-color: ${colors.whiteColor};
  width: 40%;
  text-align: center;
  padding: 10px;
  color: ${colors.blackColor};
  font-size: 20px;
  font-weight: bolder;
  margin: 5px;
  outline: invert;
  border: 5px solid ${colors.blueColor};
  border-radius: 25px;

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }

  &:hover {
    background: ${colors.blueColor};
  }

  &.active {
    font-weight: bold;
    position: relative;
  }
`;

export const CancelBtn = styled(NavLink)`
  background-color: ${colors.whiteColor};
  width: 40%;
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
  }

  &.active {
    font-weight: bold;
    position: relative;
  }
`;
