import LoginUI from "./Login.presenter";
import { useContext, useState } from "react";
import { useApolloClient, useMutation } from "@apollo/client";
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./Login.queries";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../pages/_app";

const inputsInit = {
  email: "",
  password: "",
};

const Login = () => {
  const router = useRouter();

  const [isActive, setIsActive] = useState<boolean>(false);
  const [inputs, setInputs] = useState(inputsInit);

  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);

  const client = useApolloClient();

  const onChangeInput = (event: any) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
    newInputs.email && newInputs.password !== ""
      ? setIsActive(true)
      : setIsActive(false);
  };

  const validation = (email: string, password: string) => {
    if (!email.includes("@")) {
      alert("올바른 이메일 형식으로 입력해주시기 바랍니다.");
      return;
    } else if (8 > password.length || password.length > 16) {
      alert("8~16개의 문자, 숫자, 특수문자만 비밀번호로 가능합니다.");
      return;
    } else return true;
  };

  const onClickSignIn = async (event) => {
    event.preventDefault();
    if (!validation(inputs.email, inputs.password)) return;
    try {
      const { data } = await loginUser({
        variables: { ...inputs },
      });
      setAccessToken(data?.loginUser.accessToken);
      const userInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: { authorization: data?.loginUser.accessToken },
        },
      });
      setUserInfo(userInfo.data.fetchUserLoggedIn);
      alert("로그인을 성공적으로 하셨습니다.");
      router.push("/market/list");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <LoginUI
      isActive={isActive}
      onChangeInput={onChangeInput}
      onClickSignIn={onClickSignIn}
    />
  );
};

export default Login;
