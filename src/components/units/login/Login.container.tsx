import LoginUI from './Login.presenter'
import { useState } from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from './Login.queries';

const inputsInit = {
  email: "",
  password: "",
};

const Login = () => {

  const [showEmail, setShowEmail] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false);
  const [inputs, setInputs] = useState(inputsInit);

  const [loginUser] = useMutation(LOGIN_USER)

  const onChangeInput = (event: any) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
    newInputs.email && newInputs.password !== "" ? setIsActive(true) : setIsActive(false);
  };

  const validation = (email: string, password: string) => {
    if(!email.includes("@")) {
        alert("올바른 이메일 형식으로 입력해주시기 바랍니다.")
        return;

    } else if (8>password.length || password.length>16) {
        alert("8~16개의 문자, 숫자, 특수문자만 비밀번호로 가능합니다.")
        return;
    } else return true
  } 

  const onClickSignIn = async () => {
    if(!validation(inputs.email, inputs.password)) return;
    try {
      const result = await loginUser({
        variables: {
          ...inputs
        }
      });
      alert("로그인을 성공적으로 하셨습니다.")
    } catch(error) {
      alert(error.message)
    }
  }

  const onClickEmail = (event: any) => {
    return event.target.value
  }

  return (
    <LoginUI 
      isActive={isActive}
      onChangeInput={onChangeInput}
      onClickSignIn={onClickSignIn}
    />
  )
}

export default Login

