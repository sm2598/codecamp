import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/router";

export const WrapperRowBottom = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -6px;
  background-color: #ffd600;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 80px;
  z-index: 10;
`;
export const Button = styled.button`
  color: #514400;
  background-color: #ffd600;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  cursor: pointer;

  &:hover {
    transition: 0.2s;
    font-size: 20px;
  }
  z-index: 99;
  max-width: 170px;
  width: 100%;
  max-height: 64px;
  height: 100%;
`;
export const ButtonBoard = styled.button`
  color: #514400;
  background-color: #ffd600;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  cursor: pointer;

  &:hover {
    transition: 0.2s;
    font-size: 20px;
  }

  z-index: 99;
  width: 100%;
  height: 100%;
  position: absolute;
`;
interface IProps {
  isHover: boolean;
}
export const ButtonWrite = styled.button`
  color: #514400;
  background: lightgrey;
  opacity: 1;
  border: none;
  border-radius: 0px 0px 20px 20px;
  padding-left: 41px;
  padding-right: 41px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  transition: 0.5s;

  cursor: pointer;
  z-index: 0;
  margin-top: 0px;

  transform: ${(props: IProps) =>
    props.isHover ? "translateY(100%)" : "translateY(0)"};
`;
const WrapperColumn = styled.div`
  position: relative;
  display: flex;
`;

export default function Hi() {
  const [isHover, setIsHover] = useState(false);

  const router = useRouter();

  const onClickRouterToNewBoard = (event) => {
    router.push("/boards/new");
  };
  const onClickToBoard = (event) => {
    router.push(`/boards/list`);
  };
  const onClickToMarket = () => {
    router.push("/market/list");
  };
  const onClickToMyPage = () => {
    router.push("/mypage");
  };
  const onmouseenter = () => {
    setIsHover(true);
  };
  const onmouseleave = () => {
    setIsHover(false);
  };

  return (
    <WrapperRowBottom>
      <WrapperColumn onMouseEnter={onmouseenter} onMouseLeave={onmouseleave}>
        <ButtonBoard onClick={onClickToBoard}>Forum</ButtonBoard>
        <ButtonWrite isHover={isHover} onClick={onClickRouterToNewBoard}>
          Write a Post
        </ButtonWrite>
      </WrapperColumn>
      <Button onClick={onClickToMarket}>Buy/Sell</Button>
      <Button onClick={onClickToMyPage}>My Page</Button>
    </WrapperRowBottom>
  );
}
