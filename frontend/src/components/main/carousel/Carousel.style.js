import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { colors } from "styles/variables";

export const Container = styled.div`
  position: relative;
  margin: auto;
  width: 50%;
  max-width: 500px;
`;

export const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }

  .slick-arrow {
    /* 두 화살표의 공통 요소 */
    width: 10px;
    height: 10px;
    &:hover {
      &::before {
        color: ${colors.blackColor};
      }
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 200px;

  #carouselContent {
    position: absolute;
    text-align: center;
    width: 100%;
    font-size: 30px;
    font-weight: bold;

    color: ${colors.whiteColor};

    p {
      text-shadow: 0 0 2px ${colors.blackColor};
    }

    button {
      background-color: ${colors.whiteColor};
      width: 40%;
      text-align: center;
      padding: 10px;
      color: ${colors.blackColor};
      font-size: 20px;
      font-weight: bold;
      border: 5px solid ${colors.blackColor};
      border-radius: 25px;

      &:link {
        transition: 0.5s;
        text-decoration: none;
      }

      &:hover {
        background: ${colors.blackColor};
        color: ${colors.whiteColor};
        border: 5px solid ${colors.blackColor};
      }

      &.active {
        font-weight: bold;
        position: relative;
      }
    }
  }
`;

export const Img = styled.img`
  width: 100%;
`;

const imgUrl1 = require("assets/images/travel1.jpg");
const imgUrl2 = require("assets/images/travel2.jpg");
const imgUrl3 = require("assets/images/travel3.jpg");

export const items = [
  { id: 1, url: imgUrl1 },
  { id: 2, url: imgUrl2 },
  { id: 3, url: imgUrl3 },
];
