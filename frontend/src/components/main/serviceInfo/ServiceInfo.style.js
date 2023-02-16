import styled from "styled-components";
import { colors } from "styles/variables";

export const Container = styled.div`
<<<<<<< HEAD
  width: 100%;
  height: 1000px;
  background: linear-gradient(#141e30, #243b55);
  /* background: ${colors.blackColor}; */
  border-bottom: 10px solid black;
`;

export const InfoMsg = styled.div`
  padding: 30px;
  font-size: 30px;
=======
  position: relative;
  width: 100%;
  height: 1500px;
  margin-top: 25px;
  background: ${colors.blackColor};
`;

export const InfoMsg = styled.div`
  display: flex;
  padding: 30px;
  font-size: 35px;
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
  font-weight: bold;
  line-height: 60px;
  color: ${colors.whiteColor};
`;
<<<<<<< HEAD
export const ServiceInfoWrapper = styled.div`
  width: 100%;
`;
export const ContentWrapper = styled.div`
  padding-top: 100px;
  text-align: center;
`;
export const InfoImg = styled.div`
  display: flex;
  padding: 60px;
  height: 100px;
  justify-content: center;
`;

export const InfoMsgForEx = styled.div`
  padding: 30px;
  font-size: 30px;
  font-weight: bold;
  line-height: 60px;
  color: ${colors.whiteColor};
`;
export const InfoImgForEx = styled.div`
  display: flex;
  padding: 60px;
  height: 450px;
  justify-content: center;
=======

export const InfoImg = styled.div`
  display: flex;
  position: absolute;
  padding: 60px;
  width: 200px;
  height: 200px;
  left: 170px;
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
`;
