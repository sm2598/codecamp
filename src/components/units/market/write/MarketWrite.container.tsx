import { useMutation } from "@apollo/client";
import { useState } from "react";
import MarketWriteUI from "./MarketWrite.presenter";
import { CREATE_USEDITEM } from "./MarketWrite.queries";
import { EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";

const initinput = {
  name: "",
  remarks: "",
  contents: "",
  price: 0,
  tags: [],
};
const MarketWrite = () => {
  const [inputs, setInputs] = useState(initinput);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [createUseditem] = useMutation(CREATE_USEDITEM);

  console.log(draftToHtml(editorState));
  console.log(editorState);
  const onChangeInput = (event) => {
    let result = {
      ...inputs,
      contents: draftToHtml(editorState),
      [event.target.id]: event.target.value,
    };
    setInputs(result);
  };

  const onClickRegister = async () => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...inputs,
            price: Number(inputs.price),
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
      editorState={editorState}
      setEditorState={setEditorState}
    />
  );
};

export default MarketWrite;
