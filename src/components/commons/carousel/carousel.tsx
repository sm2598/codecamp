import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const SLIDEIMG = styled.img``;
  const SlideWrapper = styled.div`
    width: 100%;
  `;

  return (
    <SlideWrapper>
      <Slider {...settings}>
        <SLIDEIMG src="/banner.png"></SLIDEIMG>
        <SLIDEIMG src="/banner2.png"></SLIDEIMG>
      </Slider>
    </SlideWrapper>
  );
}
