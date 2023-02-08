import styled from "styled-components";
import { colors } from "styles/variables";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.skyblueColor};
  color: ${colors.whiteColor};
  font-weight: bold;

  #mypage {
    position: absolute;
    font-size: 30px;
    line-height: 80px;
    color: ${colors.whiteColor};
    margin-right: 85%;
    margin-bottom: 50px;
  }

  #title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 45px;
  }
`;
