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
import MyPageRightUI from "./MyPage.Right.presenter";
import MyPageLeftUI from "./MyPage.Left.presenter";

const MyPageUI = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <WrapperRow style={{ maxWidth: "1200px", width: "100%" }}>
        <WrapperLeft>
          <MyPageLeftUI />
        </WrapperLeft>
        <WrapperRight>
          <MyPageRightUI />
        </WrapperRight>
      </WrapperRow>
    </div>
  );
};

export default MyPageUI;
