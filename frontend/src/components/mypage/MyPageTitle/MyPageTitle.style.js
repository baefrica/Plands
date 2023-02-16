import styled from "styled-components";
import { colors } from "styles/variables";

export const Container = styled.div`
<<<<<<< HEAD
  background: linear-gradient(#141e30, #243b55);
  border-bottom: 5px solid #243b55;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bolder;
  line-height: 80px;
  color: ${colors.whiteColor};
  margin-left: 40px;
=======
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  background: ${colors.blackColor};
  color: ${colors.whiteColor};
  font-weight: bold;

  #mypage {
    position: absolute;
    font-size: 40px;
    line-height: 80px;
    color: ${colors.whiteColor};
    margin-right: 85%;
    margin-bottom: 70px;
  }

  #title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    font-size: 60px;
  }
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
`;
