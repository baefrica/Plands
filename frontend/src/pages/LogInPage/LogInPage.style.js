import styled from "styled-components";

const LoginBlock = styled.div`
  font-weight: bolder;
  min-height: 480px;
  min-width: 350px;
  width: 55vh;
  height: 70vh;
  background-color: #f2f4f5;
  border-radius: 10px;
  border: 5px solid #2c2c2c;
  margin-top: 10px;
`;
const LoginHeader = styled.div`
  margin-top: 1em;
  height: 30%;
  flex-direction: column;
  #title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    font-size: 50px;
    font-weight: bold;
    color: #faff00;
    text-shadow: 0 0 2px #f00;
  }
  #word {
    text-align: center;
    height: 20%;
    font-size: 20px;
    color: black;
  }
`;

const LoginContent = styled.div`
  height: 50%;
`;
const LoginContentRow = styled.div`
  font-size: 15px;
  text-align: center;
  input {
    font-size: 18px;
    display: block;
    width: 280px;
    height: 50px;
    margin: 12px auto;
    padding: 0 20px;
    background-color: #dfdfdf;
    border: 0;
    border-radius: 4px;
  }
  #logIn-btn {
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
  }
  #footer {
    text-align: center;
    font-size: 20px;
    #signIn-btn {
      background-color: white;
      width: 30%;
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
    }
    #findId-btn {
      background-color: white;
      width: 30%;
      text-align: center;
      padding: 10px;
      color: black;
      font-size: 20px;
      font-weight: bolder;
      margin: 5px;
      outline: invert;
      border: 5px solid #ffdad8;
      border-radius: 25px;
      &:link {
        transition: 0.5s;
        text-decoration: none;
      }
      &:hover {
        background: #ffdad8;
      }
      &.active {
        font-weight: bold;
        position: relative;
      }
    }
    #findPw-btn {
      background-color: white;
      width: 30%;
      text-align: center;
      padding: 10px;
      color: black;
      font-size: 20px;
      font-weight: bolder;
      margin: 5px;
      outline: invert;
      border: 5px solid #e2d8ff;
      border-radius: 25px;
      &:link {
        transition: 0.5s;
        text-decoration: none;
      }
      &:hover {
        background: #e2d8ff;
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
