import styled from "styled-components";
import { colors } from "styles/variables";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const FindPwBlock = styled.div`
  background-color: ${colors.blackColor};
  border-radius: 15px;
  border: 3px solid ${colors.blackColor};
  width: 500px;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const FindPwHeader = styled.div`
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
`;

const Content = styled.div``;

const ContentRow = styled.div`
  text-align: center;

  input {
    display: block;
    padding: 10px 0;
    padding-left: 15px;
    width: 280px;
    height: 20px;
    margin: 12px auto;
    font-size: 15px;
    font-weight: bold;
    background-color: ${colors.lightGrayColor};
    border: 3px solid ${colors.heavyGrayColor};
    border-radius: 5px;

    &:hover {
      border: 3px solid ${colors.pointColor};
    }
  }

  button {
    display: inline-block;
    background-color: ${colors.whiteColor};
    width: 30%;
    text-align: center;
    padding: 7px;
    color: ${colors.blackColor};
    font-size: 15px;
    font-weight: bold;
    border: 5px solid ${colors.pointColor};
    border-radius: 5px;
    margin-bottom: 25px;

    &:link {
      transition: 0.5s;
      text-decoration: none;
    }

    &:hover {
      background: ${colors.pointColor};
      cursor: pointer;
    }

    &.active {
      font-weight: bold;
      position: relative;
    }
  }
`;

export {
  Container,
  FindPwBlock,
  FindPwHeader,
  Content,
  ContentRow,
};
