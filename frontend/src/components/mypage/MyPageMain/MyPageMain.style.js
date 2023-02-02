import styled from "styled-components";
import { colors } from "styles/variables";

export const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  text-align: center;
  width: 80%;
  color: ${colors.blackColor};
  margin-left: 20%;
  outline: invert;
  font-size: 5rem;
  font-weight: bold;
  line-height: 500px;
`;

export const Label = styled.div`
  color: ${colors.blackColor};
  font-size: 4rem;
  line-height: 500px;

  input {
    width: 30%;
    height: 50px;
    font-size: 3rem;
    border-radius: 15px;
    border: 3px solid black;
  }
`;
