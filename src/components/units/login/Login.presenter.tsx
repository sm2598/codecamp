import { useRouter } from 'next/router'
import { ButtonUserLogin, BackgroundIMG, Title, WrapperRowRemember, Label, InputUserEmailPassword, InputUserRememberMe, Wrapper, Linebreak, WrapperColumn, WrapperRow, ButtonMap, VerticalLinebreak } from './Login.styles'
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import { FixedButton } from '../signup/Signup.styles';
import styled from "@emotion/styled"
const LoginUI = ({ isActive, onChangeInput, onClickSignIn }) => {

  const router = useRouter();

  const onClickRoutSignup = () => {
    router.push('/signup')
  }

  const TTT = styled(CheckCircleOutlineRoundedIcon)`
    color: white;
    /* transform: rotateY(150deg); */
    animation-name: aaa;
    animation-duration: 3s;
    animation-direction: alternate;

    @keyframes aaa {
      from{
        transform: translateX(0px);
        transform: rotateY(0px);
        color:white;
      }
      to{
        transform: translateX(100px);
        transform: rotateY(180deg);
        color:yellow;
      }
    }
  `
  


  return (
    <Wrapper>
      <BackgroundIMG src="/loginbackground.png" draggable="false"/>
      <WrapperColumn>
        <Title>로그인</Title>
        <InputUserEmailPassword type="email" name="email" autoComplete="off" placeholder="이메일을 입력해주세요." onChange={onChangeInput}/>
        <InputUserEmailPassword type="password" name="password" placeholder="비밀번호를 입력해주세요." onChange={onChangeInput}/>
        <WrapperRowRemember>
          <TTT /><Label>로그인 상태 유지</Label>
        </WrapperRowRemember>
        <ButtonUserLogin disabled={!isActive} onClick={onClickSignIn}>로그인하기</ButtonUserLogin>
        <Linebreak />
        <WrapperRow>
          <ButtonMap>이메일 찾기</ButtonMap>
          <VerticalLinebreak />
          <ButtonMap>비밀번호 찾기</ButtonMap>
          <VerticalLinebreak />
          <ButtonMap onClick={onClickRoutSignup}>회원가입</ButtonMap>
        </WrapperRow>
      </WrapperColumn>
      <FixedButton src="/continue.svg"/>
    </Wrapper>
  )
}

export default LoginUI