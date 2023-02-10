import styled from "styled-components";
import { colors } from "styles/variables";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  width: 100%;
  height: 100%;
`;

const RegistFormDiv = styled.div`
  background-color: ${colors.blackColor};
  border-radius: 15px;
  border: 3px solid ${colors.blackColor};
  width: 500px;
  height: 50%;
  padding: 50px;
  margin-bottom: 5rem;

  h1 {
    font-size: 35px;
    font-weight: bold;
    color: ${colors.pointColor};
    text-shadow: 0 0 2px #f00;
    letter-spacing: -1px;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    color: ${colors.whiteColor};
  }

  input {
    padding: 10px 0;
    padding-left: 15px;
    width: 100%;
    height: 20px;
    font-size: 15px;
    font-weight: bold;
    background-color: ${colors.lightGrayColor};
    border: 3px solid ${colors.heavyGrayColor};
    border-radius: 5px;

    &:hover {
      border: 3px solid ${colors.pointColor};
    }
  }
`;

const RegistInputDiv = styled.div`
  text-align: center;

  select {
    padding: 10px 0;
    padding-left: 15px;
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    background-color: ${colors.lightGrayColor};
    border: 3px solid ${colors.heavyGrayColor};
    border-radius: 5px;

    &:hover {
      border: 3px solid ${colors.pointColor};
    }
  }
`;

const RegistBtnDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  margin-top: 50px;
  height: 50px;
`;

const RegistBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.whiteColor};
  width: 150px;
  height: 70%;
  color: ${colors.blackColor};
  font-size: 15px;
  font-weight: bold;
  border: 5px solid ${colors.blueColor};
  border-radius: 25px;

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }

  &:hover {
    background: ${colors.blueColor};
    cursor: pointer;
  }

  &.active {
    font-weight: bold;
    position: relative;
  }
`;

const CancelBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.whiteColor};
  width: 150px;
  height: 70%;
  color: ${colors.blackColor};
  font-size: 15px;
  font-weight: bold;
  border: 5px solid ${colors.redColor};
  border-radius: 25px;

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }

  &:hover {
    background: ${colors.redColor};
    cursor: pointer;
  }

  &.active {
    font-weight: bold;
    position: relative;
  }
`;

const CorrectInput = styled.div`
  font-weight: bold;
  color: ${colors.greenColor};
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
  padding-bottom: 10px;
`;

const InvalidInput = styled.div`
  font-weight: bold;
  color: ${colors.redColor};
  text-align: left;
  margin-left: 10px;
`;

const EmailConfirm = styled.div`
  margin-top: 9px;
  text-align: left;
`;

const ConfirmBtn = styled.button`
  width: 100px;
  height: 30px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  background-color: ${colors.whiteColor};
  box-shadow: 2px 2px 5px 1px;
  border-radius: 5px;
  border: 5px solid ${colors.greenColor};

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }

  &:hover {
    background: ${colors.greenColor};
    cursor: pointer;
  }

  &.active {
    font-weight: bold;
    position: relative;
  }
`;

export {
  Container,
  RegistFormDiv,
  RegistInputDiv,
  RegistBtnDiv,
  CorrectInput,
  InvalidInput,
  EmailConfirm,
  ConfirmBtn,
  RegistBtn,
  CancelBtn,
};
