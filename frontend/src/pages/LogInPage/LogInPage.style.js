import styled from "styled-components";
import { colors } from "styles/variables";

const Container = styled.div`
  display: flex;
  justify-content: center;
<<<<<<< HEAD
  padding-top: 80px;
`;

const LoginBlock = styled.div`
  background-color: ${colors.blackColor};
  border-radius: 5px;
  border: 3px solid ${colors.blackColor};
  width: 500px;
  margin-bottom: 5rem;
  padding: 50px;
`;

const LoginHeader = styled.div`
  #title {
    font-size: 35px;
    font-weight: bolder;
    color: ${colors.pointColor};
    margin-bottom: 20px;
    padding-bottom: 10px;
  }
`;

const LoginContent = styled.div``;

const LoginContentRow = styled.div`
  text-align: center;
  margin-bottom: 10px;

  input {
    display: inline-block;
    font-size: 15px;
    font-weight: bolder;
    border: none;
    width: 80%;
    padding: 20px 20px;
    height: 15px;
    border-radius: 5px;
    background-color: ${colors.blackColor};
    border-bottom: 2px solid ${colors.pointColor};
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    color: ${colors.whiteColor};

    :focus {
      outline: 0;
      border: 2px solid ${colors.pointColor};
    }

    &:hover {
      border: 2px solid ${colors.pointColor};
=======
  align-items: center;
`;

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
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
    }
  }

  #logIn-btn {
<<<<<<< HEAD
    padding: 10px 10px;
    border-radius: 5px;
    background: ${colors.pointColor};
    margin-left: 5px;
    margin-right: 5px;
    color: ${colors.blackColor};
    font-size: 15px;
    font-weight: bolder;
    padding-left: 10px;
    padding-right: 10px;
    width: 130px;

    &:hover {
      background: #86873a;
      color: ${colors.pointColor};
      cursor: pointer;
=======
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
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
    }
  }

  #footer {
    text-align: center;
<<<<<<< HEAD
    font-size: 14px;
    font-weight: bolder;
    color: ${colors.pointColor};
    margin-bottom: 25px;
    margin-top: 65px;

    #signUp-btn {
      padding: 10px 10px;
      border-radius: 5px;
      background: ${colors.blueColor};
      margin-left: 5px;
      margin-right: 5px;
      color: ${colors.blackColor};
      font-size: 15px;
      font-weight: bolder;
      padding-left: 10px;
      padding-right: 10px;
      width: 130px;

      &:hover {
        background: #4a7296;
        color: ${colors.blueColor};
        cursor: pointer;
=======
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
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
      }
    }

    #findId-btn {
<<<<<<< HEAD
      padding: 10px 10px;
      border-radius: 5px;
      background: ${colors.pinkColor};
      margin-left: 5px;
      margin-right: 5px;
      color: ${colors.blackColor};
      font-size: 15px;
      font-weight: bolder;
      padding-left: 10px;
      padding-right: 10px;
      width: 130px;

      &:hover {
        background: #814282;
        color: ${colors.pinkColor};
        cursor: pointer;
=======
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
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
      }
    }

    #findPw-btn {
<<<<<<< HEAD
      padding: 10px 10px;
      border-radius: 5px;
      background: ${colors.orangeColor};
      margin-left: 5px;
      margin-right: 5px;
      color: ${colors.blackColor};
      font-size: 15px;
      font-weight: bolder;
      padding-left: 10px;
      padding-right: 10px;
      width: 130px;

      &:hover {
        background: #b08f4c;
        color: ${colors.orangeColor};
        cursor: pointer;
=======
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
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
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
