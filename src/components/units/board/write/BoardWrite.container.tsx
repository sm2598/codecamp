import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../commons/types/generated/types.s";

const inputsInit = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  zipcode: "",
  youtube: "",
};

export default function BoardWrite() {
  const router = useRouter();
  const [inputs, setInputs] = useState(inputsInit);
  const [isActive, setIsActive] = useState(false);
  const [createBoard] =
    useMutation<IMutation, IMutationCreateBoardArgs>(CREATE_BOARD);

  // Input했을떄 값 -> state저장 | input required된게 채워졌을 경우 버튼 활성화
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);

    const isFullInputs =
      newInputs.writer &&
      newInputs.password &&
      newInputs.title &&
      newInputs.contents;
    isFullInputs ? setIsActive(true) : setIsActive(false);
  };
  // Push board -> mutation
  const onClickRegister = async (
    event: MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: inputs.writer,
            password: inputs.password,
            title: inputs.title,
            contents: inputs.contents,
            youtubeUrl: inputs.youtube,
          },
        },
      });
      const id = result.data.createBoard._id;
      alert("게시물이 성공적으로 등록되었습니다.");
      router.push(`/boards/${id}`);
    } catch (error) {
      alert(error.message);
    }
  };
  const onClickBack = (event: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    router.back()
  }

  return (
    <BoardWriteUI
      isActive={isActive}
      onChangeInput={onChangeInput}
      onClickRegister={onClickRegister}
      onClickBack={onClickBack}
    />
  );
}
