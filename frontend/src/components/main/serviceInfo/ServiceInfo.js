import React from "react";
<<<<<<< HEAD
import * as S from "./ServiceInfo.style";
=======
import {
  Container,
  InfoMsg,
  InfoImg,
  InfoBar,
} from "./ServiceInfo.style";
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
import friendsImg from "assets/images/friends_white.png";
import arrowImg from "assets/images/arrow.png";
import carImg from "assets/images/car.png";
import computerImg from "assets/images/computer.png";
<<<<<<< HEAD
import exImage1 from "assets/images/serviceEx.PNG";

const ServiceInfo = () => {
  return (
    <S.ServiceInfoWrapper>
      <S.Container id="serviceInfo">
        <S.ContentWrapper>
          <S.InfoMsg>
            가족 혹은 지인들과 함께 여행 계획을 세워보세요.
            <br />
            <br />
            함께 이야기하고 여행 계획을 편집하며 모두의 생각이 들어간 여행
            계획을 세울 수 있습니다.
          </S.InfoMsg>
          <S.InfoImg>
            <img src={friendsImg} alt="friends"></img>
            <img src={arrowImg} alt="arrow"></img>
            <img src={computerImg} alt="computer"></img>
            <img src={arrowImg} alt="arrow"></img>
            <img src={carImg} alt="car"></img>
          </S.InfoImg>
        </S.ContentWrapper>
      </S.Container>
      <S.Container id="serviceEx">
        <S.ContentWrapper>
          <S.InfoMsgForEx>
            구성원이 함께 모여 여행 계획서를 동시에 작성할 수 있습니다!
            <br />
            <br />
            함께 새로운 여행계획을 세워보세요!
          </S.InfoMsgForEx>
          <S.InfoImgForEx>
            <img src={exImage1} alt="example"></img>
          </S.InfoImgForEx>
        </S.ContentWrapper>
      </S.Container>
      <S.Container id="serviceResult">
        <S.ContentWrapper>
          <S.InfoMsg>PDF 결과물이 들어갈 페이지</S.InfoMsg>
        </S.ContentWrapper>
      </S.Container>
    </S.ServiceInfoWrapper>
  );
};
=======

function ServiceInfo() {
  return (
    <Container>
      <InfoMsg>
        가족 혹은 지인들과 함께 여행 계획을 세워보세요.
        <br />
        <br />
        함께 이야기하고 여행 계획을 편집하며
        <br />
        모두의 생각이 들어간 여행 계획을 세울 수 있습니다.
      </InfoMsg>
      <InfoImg>
        <img src={friendsImg} alt="friends"></img>
        <img src={arrowImg} alt="arrow"></img>
        <img src={computerImg} alt="computer"></img>
        <img src={arrowImg} alt="arrow"></img>
        <img src={carImg} alt="car"></img>
      </InfoImg>
    </Container>
  );
}
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051

export default ServiceInfo;
