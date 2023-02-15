import styled from "styled-components";
import { colors } from "styles/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#141e30, #243b55);
  width: 100%;
`;

export const CorrectInput = styled.div`
  font-size: 17px;
  font-weight: bolder;
  color: ${colors.greenColor};
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
  padding-bottom: 10px;
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
  width: 300px;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 30px;
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
  padding-left: 10px;
  padding-right: 10px;

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

  &:hover {
    background: #8a3d3f;
    color: ${colors.redColor};
    cursor: pointer;
  }
`;
