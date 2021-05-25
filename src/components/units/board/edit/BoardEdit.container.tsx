import BoardEditUI from "./BoardEdit.presenter";
import { EDIT_BOARD } from "./BoardEdit.queries";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useMutation } from "@apollo/client";

const inputsInit = {
  writer: "",
  title: "",
  contents: "",
  zipcode: "",
  youtubeUrl: "",
  password: "",
};

export default function BoardWrite() {
  const router = useRouter();
  const [inputs, setInputs] = useState(inputsInit);
  const [isActive, setIsActive] = useState(false);
  const [updateBoard] = useMutation(EDIT_BOARD);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);

    const isFullInputs =
      newInputs.youtubeUrl &&
      newInputs.title &&
      newInputs.password &&
      newInputs.contents;
    isFullInputs ? setIsActive(true) : setIsActive(false);
  };

  const onClickRegister = async (
    event: MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput: {
            title: inputs.title,
            contents: inputs.contents,
            youtubeUrl: inputs.youtubeUrl,
          },
          password: inputs.password,
          boardId: router.query.id
        },
      });
      const id = result.data.updateBoard._id;
      alert("게시물이 성공적으로 수정되었습니다.");
      router.push(`/boards/${id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardEditUI
      isActive={isActive}
      onChangeInput={onChangeInput}
      onClickRegister={onClickRegister}
    />
  );
}
