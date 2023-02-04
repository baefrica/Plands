import styled from "styled-components";
import { colors } from "styles/variables";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.blackColor};
  border-radius: 15px;
  border: 5px solid ${colors.blackColor};
  width: 500px;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const LoginHeader = styled.div`
  margin-top: 2rem;

  #title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: bold;
    color: ${colors.pointColor};
    text-shadow: 0 0 2px #f00;
    margin-bottom: 20px;
    padding-bottom: 10px;
    letter-spacing: -1px;
  }

  #word {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: ${colors.whiteColor};
  }
`;

const LoginContent = styled.div``;

const LoginContentRow = styled.div`
  text-align: center;

  input {
    display: block;
    padding: 10px 0;
    padding-left: 15px;
    outline: none;
    width: 280px;
    height: 20px;
    margin: 12px auto;
    font-size: 15px;
    font-weight: bold;
    background-color: ${colors.lightGrayColor};
    border: 1px solid ${colors.heavyGrayColor};
    border-radius: 5px;

    &:hover {
      border: 3px solid ${colors.pointColor};
    }
  }

  #logIn-btn {
    background-color: ${colors.whiteColor};
    width: 30%;
    text-align: center;
    padding: 7px;
    color: ${colors.blackColor};
    font-size: 15px;
    font-weight: bold;
    border: 5px solid ${colors.pointColor};
    border-radius: 25px;
    margin-bottom: 25px;

    &:link {
      transition: 0.5s;
      text-decoration: none;
    }
    &:hover {
      background: ${colors.pointColor};
    }
    &.active {
      font-weight: bold;
      position: relative;
    }
  }

  #footer {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: ${colors.pointColor};
    margin-bottom: 25px;

    #signIn-btn {
      background-color: ${colors.whiteColor};
      width: 30%;
      text-align: center;
      padding: 10px;
      color: ${colors.blackColor};
      font-weight: bold;
      margin: 5px;
      border: 5px solid ${colors.blueColor};
      border-radius: 25px;
      &:link {
        transition: 0.5s;
        text-decoration: none;
      }
      &:hover {
        background: ${colors.blueColor};
        color: ${colors.whiteColor};
      }
      &.active {
        font-weight: bold;
        position: relative;
      }
    }

    #findId-btn {
      background-color: ${colors.whiteColor};
      width: 30%;
      text-align: center;
      padding: 10px;
      color: ${colors.blackColor};
      font-weight: bold;
      margin: 5px;
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
    }

    #findPw-btn {
      background-color: ${colors.whiteColor};
      width: 30%;
      text-align: center;
      padding: 10px;
      color: ${colors.blackColor};
      font-weight: bold;
      margin: 5px;
      border: 5px solid ${colors.pinkColor};
      border-radius: 25px;
      &:link {
        transition: 0.5s;
        text-decoration: none;
      }
      &:hover {
        background: ${colors.pinkColor};
        color: ${colors.whiteColor};
      }
      &.active {
        font-weight: bold;
        position: relative;
      }
    }
  }
`;

export {
  Container,
  LoginBlock,
  LoginHeader,
  LoginContent,
  LoginContentRow,
};
