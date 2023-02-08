import styled from "styled-components";
import { colors } from "styles/variables";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 1500px;
  margin-top: 25px;
  background: ${colors.blackColor};
`;

export const InfoMsg = styled.div`
  display: flex;
  padding: 30px;
  font-size: 20px;
  font-weight: bold;
  line-height: 60px;
  color: ${colors.whiteColor};
`;

export const InfoImg = styled.div`
  display: flex;
  position: absolute;
  padding: 60px;
  width: 100px;
  height: 100px;
  left: 60px;
`;
