import {
  LeftProfilePicture,
  LeftProfileTitle,
  LeftProfileName,
  WrapperColumn,
  WrapperLeft,
  WrapperRight,
  WrapperRow,
  LeftProfileImageIcons,
  LeftProfileImageLabel,
} from "./MyPage.styles";

const MyPageLeftUI = () => {
  return (
    <WrapperColumn style={{ alignItems: "center" }}>
      <LeftProfileTitle>MYPAGE</LeftProfileTitle>
      <LeftProfilePicture src="/ProfileIcon.png" />
      <LeftProfileName>민성우</LeftProfileName>
      <WrapperRow style={{ marginBottom: "60px", alignItems: "center" }}>
        <LeftProfileImageIcons src="/points.png" />
        <LeftProfileImageLabel>100,000</LeftProfileImageLabel>
      </WrapperRow>
      <WrapperColumn>
        <WrapperRow style={{ marginBottom: "20px", alignItems: "center" }}>
          <LeftProfileImageIcons src="/cart.png" />
          <LeftProfileImageLabel>My Transactions</LeftProfileImageLabel>
        </WrapperRow>
        <WrapperRow style={{ marginBottom: "20px", alignItems: "center" }}>
          <LeftProfileImageIcons src="/points.png" />
          <LeftProfileImageLabel>My Points</LeftProfileImageLabel>
        </WrapperRow>
        <WrapperRow style={{ marginBottom: "20px", alignItems: "center" }}>
          <LeftProfileImageIcons src="/smallprofpic.png" />
          <LeftProfileImageLabel>My Profile</LeftProfileImageLabel>
        </WrapperRow>
      </WrapperColumn>
    </WrapperColumn>
  );
};

export default MyPageLeftUI;
