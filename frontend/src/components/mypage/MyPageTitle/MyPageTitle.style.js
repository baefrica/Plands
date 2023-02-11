import styled from "styled-components";
import { colors } from "styles/variables";

export const Container = styled.div`
  background: ${colors.skyblueColor};
  color: ${colors.whiteColor};
  font-weight: bold;

  #mypage {
    height: 40px;
    font-size: 30px;
    line-height: 80px;
    color: ${colors.whiteColor};
    margin-left: 40px;
  }

  #title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    padding-bottom: 20px;
  }
`;
