import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";

const MarketDetailSlick = ({ data }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={data?.fetchUseditem.images[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const SLIDEIMG = styled.img`
    width: 100%;
    max-width: 300px;
    height: 300px;
  `;
  const SliderStyle = styled(Slider)`
    .slick-dots {
      position: absolute;
      bottom: 30px;
      display: block;
      list-style: none;
      text-align: center;
    }
    .slick-dots li.slick-active button:before {
      opacity: 0.75;
    }
  `;
  const Title = styled.div`
    font-size: 48px;
  `;
  console.log(data);

  return (
    <SliderStyle {...settings}>
      {data?.fetchUseditem.images.map((list) => {
        return <SLIDEIMG src={list}></SLIDEIMG>;
      })}
    </SliderStyle>
  );
};

export default MarketDetailSlick;
