import React from "react";
import {
  Container,
  InfoMsg,
  InfoImg,
} from "./ServiceInfo.style";
import friendsImg from "assets/images/friends_white.png";
import arrowImg from "assets/images/arrow.png";
import carImg from "assets/images/car.png";
import computerImg from "assets/images/computer.png";

const ServiceInfo = () => {
  return (
    <Container>
      <InfoMsg>
        가족 혹은 지인들과 함께 여행 계획을 세워보세요.
        <br />
        함께 이야기하고 여행 계획을 편집하며 모두의 생각이
        들어간 여행 계획을 세울 수 있습니다.
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
};

export default ServiceInfo;
