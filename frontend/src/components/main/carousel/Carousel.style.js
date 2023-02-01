import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Container = styled.div`
  overflow: hidden;
`;

export const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

export const ImgContainer = styled.div``;

export const Img = styled.img`
  width: 50%;
`;

const imgUrl1 = require("assets/images/logo.png");
const imgUrl2 = require("assets/images/logo_white.png");

export const items = [
  { id: 1, url: imgUrl1 },
  { id: 2, url: imgUrl2 },
  { id: 3, url: imgUrl1 },
];
