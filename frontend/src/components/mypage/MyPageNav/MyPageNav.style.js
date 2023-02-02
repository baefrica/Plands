import styled from "styled-components";
import { colors } from "styles/variables";

export const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  text-align: center;
  width: 20%;
  height: 100%;
  background: ${colors.lightGrayColor};
  color: ${colors.blackColor};
  text-shadow: ${colors.pointColor} 1px 0 10px;
  outline: invert;
  font-size: 5rem;
  font-weight: bold;
  line-height: 500px;
`;

export const NavContent = styled.div`
  :hover {
    font-size: 7rem;
  }
`;
