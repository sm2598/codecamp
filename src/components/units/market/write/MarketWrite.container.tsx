import { useMutation } from "@apollo/client"
import { useState } from "react"
import MarketWriteUI from "./MarketWrite.presenter"
import { CREATE_USEDITEM } from "./MarketWrite.queries"

const initinput = {
  name: "",
  remarks: "",
  contents: "",
  price: 0,
  tags: []
}

const MarketWrite = () => {

  const [inputs, setInputs] = useState(initinput)
  const [createUseditem] = useMutation(CREATE_USEDITEM)

  const onChangeInput = (event) => {
    let result = {...inputs, [event.target.id]: event.target.value}
    setInputs(result)
  }

  const onClickRegister = async (
  ) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...inputs,
            price: Number(inputs.price)
          },
        },
      });
      alert("게시물이 성공적으로 등록되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <MarketWriteUI 
      onClickRegister={onClickRegister}
      onChangeInput={onChangeInput}
    />
  )
}

export default MarketWrite