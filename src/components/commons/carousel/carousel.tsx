import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from '@emotion/styled'

export const WrapperSlider = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4F4F4F;
`
export const SliderImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

`

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <WrapperSlider>
      <Slider {...settings}>
        <SliderImg src="/banner.png" />
      </Slider>
    </WrapperSlider>
  )
}