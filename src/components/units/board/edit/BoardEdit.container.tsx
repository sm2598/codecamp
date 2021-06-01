import BoardEditUI from "./BoardEdit.presenter";
import { EDIT_BOARD } from "./BoardEdit.queries";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { IMutation, IMutationUpdateBoardArgs } from "../../../../commons/types/generated/types.s";

const inputsInit = {
  writer: "",
  title: "",
  contents: "",
  zipcode: "",
  youtube: "",
  password: "",
};

export default function BoardWrite() {
  const router = useRouter();
  const [inputs, setInputs] = useState(inputsInit);
  const [isActive, setIsActive] = useState(false);
  const [updateBoard] = useMutation<IMutation, IMutationUpdateBoardArgs>(EDIT_BOARD);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);

    const isFullInputs =
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
            youtubeUrl: inputs.youtube,
          },
          password: inputs.password,
          boardId: String(router.query.id)
        },
      });
      const id = result.data.updateBoard._id;
      alert("게시물이 성공적으로 수정되었습니다.");
      router.push(`/boards/${id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickBack = (event: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    router.back()
  }

  return (
    <BoardEditUI
      isActive={isActive}
      onChangeInput={onChangeInput}
      onClickRegister={onClickRegister}
      onClickBack={onClickBack}
    />
  );
}
