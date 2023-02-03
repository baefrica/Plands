import styled from "styled-components";
import { colors } from "styles/variables";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 15%;
  background: ${colors.lightGrayColor};
  color: ${colors.blackColor};
  text-shadow: ${colors.pointColor} 1px 0 5px;
  outline: invert;
  font-size: 30px;
  font-weight: bold;
  line-height: 100px;
  padding-top: 3%;
`;

export const NavContent = styled.div`
  :hover {
    font-size: 35px;
  }
`;
