import Carousel  from '../../carousel/carousel'
import { 
  Wrapper,
  WrapperColumn,
  WrapperRowTop,
  WrapperRowMiddle,
  WrapperRowBottom,
  Logo,
  WrapperRowButtonsTop,
  Button,
  WrapperRow,
  ButtonLogIn,
  ButtonSignUp
} from './NavigationTop.styles'
import { useRouter } from "next/router";

export default function NavigationTopUI ({onClickToBoard}) {
  const router = useRouter();



  return (
    <Wrapper>
      <WrapperColumn>
        <WrapperRowTop>
          <WrapperRow>
            <Logo src="/logo.png" onClick={onClickToBoard}/>
            <WrapperRowButtonsTop>
              <ButtonLogIn>로그인</ButtonLogIn>
              <ButtonSignUp>회원가입</ButtonSignUp>
            </WrapperRowButtonsTop>
          </WrapperRow>
        </WrapperRowTop>
        <WrapperRowMiddle>
          <Carousel/>
        </WrapperRowMiddle>
        <WrapperRowBottom>
          <Button onClick={onClickToBoard}>자유게시판</Button>
          <Button>중고마켓</Button>
          <Button>마이페이지</Button>
        </WrapperRowBottom>
      </WrapperColumn>
    </Wrapper>
  )
}