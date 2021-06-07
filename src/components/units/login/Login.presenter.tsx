import { ButtonUserLogin, BackgroundIMG, Title, WrapperRowRemember, Label, InputUserEmailPassword, InputUserRememberMe, Wrapper, Linebreak, WrapperColumn, WrapperRow, ButtonMap, VerticalLinebreak } from './Login.styles'

const LoginUI = ({ isActive, onChangeInput,onClickSignIn }) => {
  return (
    <Wrapper>
      <BackgroundIMG src="/loginbackground.png" draggable="false"/>
      <WrapperColumn>
        <Title>로그인</Title>
        <InputUserEmailPassword type="email" name="email" placeholder="이메일을 입력해주세요." onChange={onChangeInput}/>
        <InputUserEmailPassword type="password" name="password" placeholder="비밀번호를 입력해주세요." onChange={onChangeInput}/>
        <WrapperRowRemember>
          <InputUserRememberMe type="checkbox" /><Label>로그인 상태 유지</Label>
        </WrapperRowRemember>
        <ButtonUserLogin disabled={!isActive}>로그인하기</ButtonUserLogin>
        <Linebreak />
        <WrapperRow>
          <ButtonMap>이메일 찾기</ButtonMap>
          <VerticalLinebreak />
          <ButtonMap>비밀번호 찾기</ButtonMap>
          <VerticalLinebreak />
          <ButtonMap>회원가입</ButtonMap>
        </WrapperRow>
      </WrapperColumn>
    </Wrapper>
  )
}

export default LoginUI