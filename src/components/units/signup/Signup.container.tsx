import SignupUI from './Signup.presenter'
import { useState } from 'react'

const inputsInit = {
  email: "",
  name: "",
  password: "",
  confirmpassword: "",
};

const Signup = () => {

  const [showEmail, setShowEmail] = useState<boolean>(false)
  const [isActive, setIsActive] = useState(false);
  const [inputs, setInputs] = useState(inputsInit);

  const onChangeInput = (event) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
    newInputs.email && newInputs.password && newInputs.confirmpassword !== "" ? setIsActive(true) : setIsActive(false);
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
    <SignupUI 
      isActive={isActive}
      onChangeInput={onChangeInput}
      onClickSignIn={onClickSignIn}
    />
  )
}

export default Signup

