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

    } else if(inputs.password !== inputs.confirmpassword) {
        alert("Your password does not match.")
    } else {
        alert("You have successfully signed up.")
        return true
    }
  } 

  const onClickSignup = () => {
    validation(inputs.email, inputs.password)
  }

  const onClickEmail = (event) => {
    return event.target.value
  }

  return (
    <SignupUI 
      isActive={isActive}
      onChangeInput={onChangeInput}
      onClickSignup={onClickSignup}
    />
  )
}

export default Signup

