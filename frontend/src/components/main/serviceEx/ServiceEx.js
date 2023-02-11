import React from "react";
import {
  Container,
  InfoImg,
} from "./ServiceEx.style";
import gura from "assets/images/gura.JPG";

const ServiceEx = () => {
  return (
    <Container>
      <InfoImg>
        <img src={gura} alt="gura"></img>
      </InfoImg>
    </Container>
  );
};

export default ServiceEx;