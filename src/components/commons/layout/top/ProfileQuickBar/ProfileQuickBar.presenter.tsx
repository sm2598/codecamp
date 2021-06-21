import { useContext } from "react";
import { GlobalContext } from "../../../../../../pages/_app";
import {
  ProfileQuickBarColumn,
  ProfileQuickBarWrapper,
  ProfileQuickBarRow,
  ProfileQuickBarLabelIMG,
  ProfileQuickBarLabel,
  ProfileIcon,
  ProfileQuickBarInnerColumn,
  ProfileQuickBarName,
  ProfileQuickBarPoints,
  ProfileContainer,
} from "./ProfileQuickBar.styles";

const ProfileQuickBarUI = ({ onClickLogout }) => {
  const { userInfo } = useContext(GlobalContext);

  return (
    <ProfileContainer>
      <ProfileQuickBarWrapper>
        <ProfileQuickBarColumn>
          <ProfileQuickBarRow>
            <ProfileIcon src="/ProfileIcon.png" />
            <ProfileQuickBarInnerColumn>
              <ProfileQuickBarName>{userInfo.name}</ProfileQuickBarName>
              <ProfileQuickBarPoints>
                {userInfo.userPoint.amount} P
              </ProfileQuickBarPoints>
            </ProfileQuickBarInnerColumn>
          </ProfileQuickBarRow>
          <ProfileQuickBarRow
            style={{
              borderTop: "1px dotted #bdbdbd",
              borderBottom: "1px dotted #bdbdbd",
            }}
          >
            <ProfileQuickBarLabelIMG src="/charge.png" />
            <ProfileQuickBarLabel>충전하기</ProfileQuickBarLabel>
          </ProfileQuickBarRow>
          <ProfileQuickBarRow>
            <ProfileQuickBarLabelIMG src="/logout.png" />
            <ProfileQuickBarLabel onClick={onClickLogout}>
              로그아웃
            </ProfileQuickBarLabel>
          </ProfileQuickBarRow>
        </ProfileQuickBarColumn>
      </ProfileQuickBarWrapper>
    </ProfileContainer>
  );
};

export default ProfileQuickBarUI;
