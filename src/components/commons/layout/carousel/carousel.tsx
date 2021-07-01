import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  const SliderStyle = styled(Slider)`
    .slick-dots {
      position: absolute;
      bottom: 30px;

      display: block;

      width: 100%;
      padding: 0;
      margin: 0;

      list-style: none;

      text-align: center;
    }
    .slick-dots li.slick-active button:before {
      opacity: 0.75;
      color: white;
    }

    .slick-prev {
      height: 48px;
      z-index: 1;
      top: 50%;
      left: 5%;
    }
    .slick-next {
      height: 48px;
      z-index: 1;
      top: 50%;
      right: 5%;
    }
    .slick-prev::before,
    .slick-next::before {
      font-size: 48px;
    }
  `;

  const SLIDEIMG = styled.img`
    object-fit: cover;
    width: 99%;
    height: 400px;
    overflow: hidden;
  `;
  const SlideWrapper = styled.div``;
  const Title = styled.div`
    font-size: 48px;
  `;

  if (typeof window === "undefined")
    return <SLIDEIMG src="/banner.png"></SLIDEIMG>;
  return (
    <SliderStyle {...settings}>
      <SLIDEIMG src="/banner.png"></SLIDEIMG>
      <SLIDEIMG src="/peoplewalking.jpg"></SLIDEIMG>
      <SLIDEIMG src="/banner2.png"></SLIDEIMG>
    </SliderStyle>
  );
}
