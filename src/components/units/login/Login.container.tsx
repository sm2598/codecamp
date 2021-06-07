import LoginUI from './Login.presenter'
import { useState } from 'react'

const inputsInit = {
  email: "",
  password: "",
  confirmpassword: "",
};

const Login = () => {

  const [showEmail, setShowEmail] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false);
  const [inputs, setInputs] = useState(inputsInit);

  const onChangeInput = (event) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
    newInputs.email && newInputs.password !== "" ? setIsActive(true) : setIsActive(false);
  };
  
  // Sign In validation
  const validation = (email, password) => {
    if(!email.includes("@")) {
        alert("Please make sure your have entered the correct email.")
        return false

    } else if(8>password.length || password.length>16) {
        alert("Only 8~16 characters, number, special characters are allowed.")
        return false

    } else {
        alert("You have successfully logged in.")
        return true
    }
  } 

  const onClickSignIn = () => {
    validation(inputs.email, inputs.password)
  }

  const onClickEmail = (event) => {
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

