// npm i react-slick
// npm i slick-carousel

import React from "react";
import {
  Container,
  StyledSlider,
  ImgContainer,
  Img,
  items,
} from "./Carousel.style";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true, // 해당 슬라이드를 무한으로 반복할 수 있도록
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true, // 화면에 올리면 슬라이더가 자동으로 넘어가지 않음
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <ImgContainer>
                <div id="carouselContent">
                  <p>새로운 여행을 계획해보세요</p>
                  <button>여행 계획 만들기</button>
                </div>
                <Img src={item.url} />
              </ImgContainer>
            </div>
          );
        })}
      </StyledSlider>
    </Container>
  );
}

export default Carousel;
