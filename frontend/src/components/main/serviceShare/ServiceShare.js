import React from "react";
import {
  Container,
  InfoMsg,
  InfoImg,
} from "./ServiceShare.style";
import friendsImg from "assets/images/friends_white.png";
import arrowImg from "assets/images/arrow.png";
import carImg from "assets/images/car.png";
import computerImg from "assets/images/computer.png";

const ServiceShare = () => {
  return (
    <Container>
      <InfoMsg>
        네 번째 페이지인데수웅
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

export default ServiceShare;
