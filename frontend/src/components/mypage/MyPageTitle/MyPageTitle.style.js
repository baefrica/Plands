import styled from "styled-components";
import { colors } from "styles/variables";

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${colors.blackColor};
  color: ${colors.whiteColor};
  font-weight: bold;

  #mypage {
    position: absolute;
    font-size: 30px;
    line-height: 87px;
    color: ${colors.whiteColor};
    margin-right: 80%;
    margin-bottom: 15rem;
  }

  #title {
    position: absolute;
    margin-top: 20px;
    font-size: 100px;
    line-height: 150px;
  }
`;
