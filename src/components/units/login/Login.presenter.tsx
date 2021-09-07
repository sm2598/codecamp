import { useRouter } from "next/router";
import {
  ButtonUserLogin,
  BackgroundIMG,
  Title,
  WrapperRowRemember,
  Label,
  InputUserEmailPassword,
  InputUserRememberMe,
  Wrapper,
  Linebreak,
  WrapperColumn,
  WrapperRow,
  ButtonMap,
  VerticalLinebreak,
} from "./Login.styles";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import { FixedButton } from "../signup/Signup.styles";
import styled from "@emotion/styled";
const LoginUI = ({ isActive, onChangeInput, onClickSignIn }) => {
  const router = useRouter();

  const onClickRoutSignup = () => {
    router.push("/signup");
  };

  const TTT = styled(CheckCircleOutlineRoundedIcon)`
    color: white;
    /* transform: rotateY(150deg); */
    animation-name: aaa;
    animation-duration: 3s;
    animation-direction: alternate;

    @keyframes aaa {
      from {
        transform: translateX(0px);
        transform: rotateY(0px);
        color: white;
      }
      to {
        transform: translateX(100px);
        transform: rotateY(180deg);
        color: yellow;
      }
    }
  `;

  return (
    <Wrapper>
      <BackgroundIMG src="/loginbackground.png" draggable="false" />
      <WrapperColumn>
        <Title>Log In</Title>
        <InputUserEmailPassword
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Your Email."
          onChange={onChangeInput}
        />
        <InputUserEmailPassword
          type="password"
          name="password"
          placeholder="Your Password"
          onChange={onChangeInput}
        />
        {/* <WrapperRowRemember>
          <TTT /><Label>로그인 상태 유지</Label>
        </WrapperRowRemember> */}
        <ButtonUserLogin disabled={!isActive} onClick={onClickSignIn}>
          로그인하기
        </ButtonUserLogin>
        <Linebreak />
        <WrapperRow>
          <ButtonMap>Forgot My Email</ButtonMap>
          <VerticalLinebreak />
          <ButtonMap>Find My Password</ButtonMap>
          <VerticalLinebreak />
          <ButtonMap onClick={onClickRoutSignup}>Sign Up</ButtonMap>
        </WrapperRow>
      </WrapperColumn>
      <FixedButton src="/continue.svg" />
    </Wrapper>
  );
};

export default LoginUI;
