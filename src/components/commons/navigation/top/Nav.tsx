import styled from '@emotion/styled'
import {useState} from 'react'
import { useRouter } from "next/router";

export const WrapperRowBottom = styled.div`
  position: sticky;
  top:0px;
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top:-6px;
  background-color: #FFD600;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 80px;
  z-index: 10;
`;
export const Button = styled.button`
  color: #514400;
  background-color: #FFD600;
  border: none;
  padding-left: 41px;
  padding-right: 41px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  cursor: pointer;

  &:hover {
    background: #ffea7a;
    transition: 0.2s;
    opacity: 0.6;
  }
  z-index: 99;
`
export const ButtonBoard = styled.button`
  color: #514400;
  background-color: #FFD600;
  border: none;
  padding-left: 41px;
  padding-right: 41px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  cursor: pointer;

  &:hover {
    background: #ffea7a;
    transition: 0.2s;
    opacity: 0.6;
  }

  z-index: 99;
  width: 100%;
  height: 100%;
  position: absolute;
`
interface IProps {
  isHover: boolean;
}
export const ButtonWrite = styled.button`
  color: #514400;
  background: lightgrey;
  opacity: 0.6;
  border: none;
  border-radius: 0px 0px 20px 20px;
  padding-left: 41px;
  padding-right: 41px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  transition: 1s;

  cursor: pointer;
  z-index: 0;

  transform: ${(props: IProps) => props.isHover ? 'translateY(100%)' : 'translateY(0)' };
`
const WrapperColumn = styled.div`
  position: relative;
  display: flex;
`

export default function Hi () {
  const [isHover, setIsHover] = useState(false)

  const router = useRouter();
  // onClick Router-to-BoardWrite
  const onClickRouterToNewBoard = (event) => {
    router.push('/boards/new')
  }
  // OnClick Router-to-Board
  const onClickToBoard = (event) => {
    router.push(`/boards/list`)

  }
  const onmouseenter = (index) => {
    setIsHover(true);
  };

  const onmouseleave = (event) => {
    setIsHover(false);
  };

  return (
    <WrapperRowBottom>
      <WrapperColumn onMouseEnter={onmouseenter} onMouseLeave={onmouseleave}>
        <ButtonBoard onClick={onClickToBoard}>자유게시판</ButtonBoard>
        <ButtonWrite isHover={isHover} onClick={onClickRouterToNewBoard}>게시물 작성</ButtonWrite>
      </WrapperColumn>
      <Button>중고마켓</Button>
      <Button>마이페이지</Button>
    </WrapperRowBottom>
  )
}