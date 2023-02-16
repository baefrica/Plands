import styled from "styled-components";
import { colors } from "styles/variables";

export const Container = styled.div`
  display: flex;
<<<<<<< HEAD
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CorrectInput = styled.div`
  font-size: 17px;
  font-weight: bolder;
  color: green;
  text-shadow: 2px 2px 2px ${colors.greenColor};
  text-align: left;
  margin-left: 101x;
`;

export const InvalidInput = styled.div`
  font-size: 17px;
  font-weight: bolder;
  color: ${colors.redColor};
  text-align: left;
  margin-left: 10px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-around;

  margin-bottom: 150px;
`;

export const UpdateBtn = styled.button`
  padding: 10px 10px;
  border-radius: 5px;
  background: ${colors.blueColor};
  margin-left: 5px;
  margin-right: 5px;
  color: ${colors.blackColor};
  font-size: 20px;
  font-weight: bolder;
  padding 20px;
  border: none;

  &:hover {
    background: #4a7296;
    color: ${colors.blueColor};
    cursor: pointer;
  }
`;

export const CancelBtn = styled.button`
  padding: 10px 10px;
  border-radius: 5px;
  background: ${colors.redColor};
  margin-left: 5px;
  margin-right: 5px;
  color: ${colors.blackColor};
  font-size: 20px;
  font-weight: bolder;
  padding 20px;
  border: none;

  &:hover {
    background: #8a3d3f;
    color: ${colors.redColor};
    cursor: pointer;
=======
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
    font-size: 30px;
    font-weight: bold;
    line-height: 80px;
    color: ${colors.pointColor};

    :hover {
      font-size: 35px;
    }
  }

  input {
    text-align: center;
    font-size: 30px;
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
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
  }
`;
