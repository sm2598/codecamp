import SignupUI from './Signup.presenter'
import { useState } from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_USER } from './Signup.queries';

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
  const [createUser] = useMutation(CREATE_USER)

  const onChangeInput = (event) => {
    const newInputs = { ...inputs, [event.target.id]: event.target.value };
    setInputs(newInputs);
    newInputs.email && newInputs.name && newInputs.password && newInputs.confirmpassword !== "" ? setIsActive(true) : setIsActive(false);
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

  const onClickSignup = async () => {
    if(!validation(inputs.email, inputs.password)) return; 
    try { const result = await createUser({
      variables: {
        createUserInput: {
          email: inputs.email,
          password: inputs.password,
          name: inputs.name
        }
      }
    })
    } catch(error) {
      alert(error.message)
    }
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

