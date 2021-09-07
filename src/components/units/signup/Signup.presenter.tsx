import { useState } from "react";
import {
  ButtonUserLogin,
  Requirement,
  WrapperColumnInputs,
  BackgroundIMG,
  Title,
  Label,
  InputUserEmailPassword,
  Wrapper,
  WrapperColumn,
  FixedButton,
} from "./Signup.styles";

const SignupUI = ({ isActive, onChangeInput, onClickSignup }) => {
  const initvariableActive = {
    email: false,
    name: false,
    password: false,
  };

  const [variableActive, setVariableActive] = useState(initvariableActive);

  const onMouseEnter = (event) => {
    const temp = { ...initvariableActive, [event.target.id]: true };
    setVariableActive(temp);
  };
  const onMouseLeave = (event) => {
    const temp = { ...initvariableActive, [event.target.id]: false };
    setVariableActive(temp);
  };

  return (
    <Wrapper>
      <BackgroundIMG src="/loginbackground.png" draggable="false" />
      <WrapperColumn>
        <Title>Sign Up</Title>
        <WrapperColumnInputs>
          <Label>Email</Label>
          <InputUserEmailPassword
            type="email"
            id="email"
            placeholder="Enter your email."
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onChange={onChangeInput}
          />
          <Requirement
            id="email"
            isEntered={variableActive.email}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Please enter a valid email.
          </Requirement>
          <Label>Name</Label>
          <InputUserEmailPassword
            type="text"
            id="name"
            placeholder="이름을 입력해주세요."
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onChange={onChangeInput}
          />
          <Requirement
            id="name"
            isEntered={variableActive.name}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Please enter a name in KR or EN.
          </Requirement>
          <Label>Password</Label>
          <InputUserEmailPassword
            type="password"
            id="password"
            placeholder="Enter your password."
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onChange={onChangeInput}
          />
          <Requirement
            id="password"
            isEntered={variableActive.password}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            8-16 characters, numbers, special characters.
          </Requirement>
          <Label>Confirm Password</Label>
          <InputUserEmailPassword
            type="password"
            id="confirmpassword"
            placeholder="Confirm your password."
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onChange={onChangeInput}
          />
        </WrapperColumnInputs>
        <ButtonUserLogin disabled={!isActive} onClick={onClickSignup}>
          Sign Up
        </ButtonUserLogin>
      </WrapperColumn>
      <FixedButton src="/cancel.svg" />
    </Wrapper>
  );
};

export default SignupUI;
