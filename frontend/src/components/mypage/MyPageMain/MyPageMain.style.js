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
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;

  label {
    font-size: 25px;
    font-weight: bold;
    line-height: 80px;
    color: ${colors.pointColor};

    :hover {
      font-size: 30px;
    }
  }

  input {
    text-align: center;
    font-size: 20px;
    width: 100%;
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
