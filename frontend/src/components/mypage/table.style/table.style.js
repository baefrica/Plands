import styled from "styled-components";
import { colors } from "styles/variables";

export const table = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const tr = styled.div`
  display: flex;
  padding-top: 30px;
`;

export const td = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  position: relative;
  transition: all 0.5s ease-in-out;
  font-weight: bolder;
  color: #03e9f4;
  padding-right: 5px;
  padding-left: 10px;
  padding-bottom: 5px;

  input {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bolder;
    border: none;
    width: 89%;
    padding: 20px 20px;
    height: 15px;
    border-radius: 5px;
    border-bottom: 2px solid #03e9f4;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    color: #03e9f4;

    :focus {
      outline: 0;
      border: 2px solid #03e9f4;
    }

    &:hover {
      border: 2px solid #03e9f4;
    }
  }
`;
