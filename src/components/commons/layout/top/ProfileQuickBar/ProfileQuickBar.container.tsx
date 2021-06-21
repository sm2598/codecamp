import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../../../../../../pages/_app";
import ProfileQuickBarUI from "./ProfileQuickBar.presenter";

const ProfileQuickBar = () => {
  const router = useRouter();
  const { accessToken, setAccessToken } = useContext(GlobalContext);

  const onClickLogout = () => {
    setAccessToken("");
    router.push("/boards/list");
  };

  return <ProfileQuickBarUI onClickLogout={onClickLogout} />;
};

export default ProfileQuickBar;
