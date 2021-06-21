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
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ProfileQuickBar from "./ProfileQuickBar/ProfileQuickBar.container";

export default function NavigationTopUI({ onClickToBoard }) {
  const { accessToken, userInfo } = useContext(GlobalContext);
  const router = useRouter();
  const onClickToLogin = () => {
    router.push("/login");
  };
  const onClickToRegister = () => {
    router.push("/signup");
  };

  return (
    <>
      <Wrapper>
        <WrapperColumn>
          <WrapperRowTop>
            <WrapperRow>
              <Logo src="/logo.png" onClick={onClickToBoard} />
              <WrapperRowButtonsTop>
                {accessToken == "" ? (
                  <>
                    <ButtonLogIn onClick={onClickToLogin}>로그인</ButtonLogIn>
                    <ButtonSignUp onClick={onClickToRegister}>
                      회원가입
                    </ButtonSignUp>
                  </>
                ) : (
                  <>
                    <img
                      src="/ProfileIcon.png"
                      style={{
                        width: "48px",
                        height: "48px",
                        marginRight: "28px",
                      }}
                    />
                    <ArrowDropDownIcon />
                    <ProfileQuickBar />
                  </>
                )}
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
