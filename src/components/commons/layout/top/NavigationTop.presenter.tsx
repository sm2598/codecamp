import Carousel from "../carousel/carousel";
import {
  Wrapper,
  WrapperColumn,
  WrapperRowTop,
  WrapperRowMiddle,
  Logo,
  WrapperRowButtonsTop,
  WrapperRow,
  ButtonLogIn,
  ButtonSignUp,
} from "./NavigationTop.styles";
import { useRouter } from "next/router";
import Hi from "./Nav";

export default function NavigationTopUI({ onClickToBoard }) {
  const router = useRouter();
  const onClickToLogin = () => {
    router.push('/login')
  }
  const onClickToRegister = () => {
    router.push('/signup')
  }

  return (
    <>
      <Wrapper>
        <WrapperColumn>
          <WrapperRowTop>
            <WrapperRow>
              <Logo src="/logo.png" onClick={onClickToBoard} />
              <WrapperRowButtonsTop>
                <ButtonLogIn onClick={onClickToLogin}>로그인</ButtonLogIn>
                <ButtonSignUp onClick={onClickToRegister}>회원가입</ButtonSignUp>
              </WrapperRowButtonsTop>
            </WrapperRow>
          </WrapperRowTop>
          <WrapperRowMiddle>
            <Carousel />
          </WrapperRowMiddle>
        </WrapperColumn>
      </Wrapper>
      <Hi />
    </>
  );
}
