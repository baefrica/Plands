import styled from "styled-components";
import { colors } from "styles/variables";

const LoginBlock = styled.div`
  font-weight: bolder;
  min-height: 480px;
  min-width: 350px;
  width: 55vh;
  height: 70vh;
  background-color: ${colors.blackColor};
  border-radius: 10px;
  border: 5px solid ${colors.blackColor};
  margin-top: 5rem;
  margin-left: 33%;
  margin-bottom: 5rem;
`;
const LoginHeader = styled.div`
  margin-top: 1rem;
  height: 30%;
  flex-direction: column;

  #title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    font-size: 50px;
    font-weight: bold;
    color: ${colors.pointColor};
    text-shadow: 0 0 2px #f00;
  }

  #word {
    text-align: center;
    height: 20%;
    font-size: 25px;
    color: ${colors.whiteColor};
  }
`;

const LoginContent = styled.div`
  height: 50%;
`;
const LoginContentRow = styled.div`
  font-size: 15px;
  text-align: center;

  input {
    font-size: 20px;
    font-weight: bold;
    display: block;
    width: 280px;
    height: 50px;
    margin: 12px auto;
    padding: 0 20px;
    background-color: ${colors.lightGrayColor};
    border: 0;
    border-radius: 4px;

    &:hover {
      border: 5px solid ${colors.pointColor};
    }
  }

  #logIn-btn {
    background-color: ${colors.whiteColor};
    width: 40%;
    text-align: center;
    padding: 10px;
    color: ${colors.blackColor};
    font-size: 20px;
    font-weight: bolder;
    margin: 5px;
    outline: invert;
    border: 5px solid ${colors.pointColor};
    border-radius: 25px;
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
    font-size: 20px;
    color: ${colors.pointColor};

    #signIn-btn {
      background-color: ${colors.whiteColor};
      width: 30%;
      text-align: center;
      padding: 10px;
      color: ${colors.blackColor};
      font-size: 20px;
      font-weight: bold;
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
      color: black;
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
    }

    #findPw-btn {
      background-color: ${colors.whiteColor};
      width: 30%;
      text-align: center;
      padding: 10px;
      color: black;
      font-size: 20px;
      font-weight: bolder;
      margin: 5px;
      outline: invert;
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
  LoginBlock,
  LoginHeader,
  LoginContent,
  LoginContentRow,
};
