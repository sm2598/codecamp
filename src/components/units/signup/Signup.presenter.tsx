import { ButtonUserLogin, WrapperColumnInputs, BackgroundIMG, Title, Label, InputUserEmailPassword, Wrapper, WrapperColumn } from './Signup.styles'

const SignupUI = ({ isActive, onChangeInput,onClickSignIn }) => {
  return (
    <Wrapper>
      <BackgroundIMG src="/loginbackground.png" draggable="false"/>
      <WrapperColumn>
        <Title>회원가입</Title>
        <WrapperColumnInputs>
          <Label>이메일</Label>
          <InputUserEmailPassword type="email" name="email" placeholder="이메일을 입력해주세요." onChange={onChangeInput}/>
          <Label>이름</Label>
          <InputUserEmailPassword type="text" name="name" placeholder="이름을 입력해주세요." onChange={onChangeInput}/>
          <Label>비밀번호</Label>
          <InputUserEmailPassword type="password" name="password" placeholder="비밀번호를 입력해주세요." onChange={onChangeInput}/>
          <Label>비밀번호 확인</Label>
          <InputUserEmailPassword type="password" name="confirmpassword" placeholder="비밀번호를 입력해주세요." onChange={onChangeInput}/>
        </WrapperColumnInputs>
        <ButtonUserLogin disabled={!isActive}>회원가입하기</ButtonUserLogin>
      </WrapperColumn>
    </Wrapper>
  )
}

export default SignupUI