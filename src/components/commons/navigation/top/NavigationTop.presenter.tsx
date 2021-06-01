import { Carousel } from '../../carousel/carousel'
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

export default function NavigationTopUI ({onClickToHome}) {
  return (
    <Wrapper>
      <WrapperColumn>
        <WrapperRowTop>
          <WrapperRow>
            <Logo src="/logo.png" onClick={onClickToHome}/>
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
          <Button>자유게시판</Button>
          <Button>중고마켓</Button>
          <Button>마이페이지</Button>
        </WrapperRowBottom>
      </WrapperColumn>
    </Wrapper>
  )
}