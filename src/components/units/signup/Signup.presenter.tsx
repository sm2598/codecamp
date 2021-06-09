import { useState } from 'react';
import { ButtonUserLogin, Requirement, WrapperColumnInputs, BackgroundIMG, Title, Label, InputUserEmailPassword, Wrapper, WrapperColumn } from './Signup.styles'

const SignupUI = ({ isActive, onChangeInput, onClickSignup }) => {

  const initvariableActive = {
    email: false,
    name: false,
    password: false,
  }

  const [variableActive, setVariableActive] = useState(initvariableActive)

  const onMouseEnter = (event) => {
    
    const temp = {...initvariableActive, [event.target.id]: true}
    setVariableActive(temp)
  }
  const onMouseLeave = (event) => {
      const temp = {...initvariableActive, [event.target.id]: false}
      setVariableActive(temp)
  }

  return (
    <Wrapper>
      <BackgroundIMG src="/loginbackground.png" draggable="false"/>
      <WrapperColumn>
        <Title>회원가입</Title>
        <WrapperColumnInputs>
          <Label>이메일</Label>
          <InputUserEmailPassword type="email" id="email" placeholder="이메일을 입력해주세요." onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onChange={onChangeInput}/>
          <Requirement id="email" isEntered={variableActive.email} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>올바른 이메일 형식으로 입력해주셔야합니다.</Requirement>
          <Label>이름</Label>
          <InputUserEmailPassword type="text" id="name" placeholder="이름을 입력해주세요." onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onChange={onChangeInput}/>
          <Requirement id="name" isEntered={variableActive.name} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>이름은 "영어, 한국어"로 입력해주시기바랍니다.</Requirement>
          <Label>비밀번호</Label>
          <InputUserEmailPassword type="password" id="password" placeholder="비밀번호를 입력해주세요." onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onChange={onChangeInput}/>
          <Requirement id="password" isEntered={variableActive.password} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>8~16개의 문자, 숫자, 특수문자만 비밀번호로 가능합니다.</Requirement>
          <Label>비밀번호 확인</Label>
          <InputUserEmailPassword type="password" id="confirmpassword" placeholder="비밀번호를 입력해주세요." onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onChange={onChangeInput}/>
        </WrapperColumnInputs>
        <ButtonUserLogin disabled={!isActive} onClick={onClickSignup}>회원가입하기</ButtonUserLogin>
      </WrapperColumn>
    </Wrapper>
  )
}

export default SignupUI