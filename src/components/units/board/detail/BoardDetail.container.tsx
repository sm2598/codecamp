import {
  FETCH_BOARD,
  FETCH_COMMENTS,
  CREATE_COMMENT,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { useState } from "react";

export default function BoardDetail() {
  const router = useRouter();

  const inputsComment = {
    writer: "",
    contents: "",
    password: "",
    rating: 0,
  };
  // Stating state variables
  const [inputs, setInputs] = useState(inputsComment);
  const [characterCount, setCharacterCount] = useState(0);

  // Stating gql components
  const [createBoardComment] = useMutation(CREATE_COMMENT);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  // Board자체를 Query
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  // Board에 있는 댓글 Query
  const { data: comments, refetch } = useQuery(FETCH_COMMENTS, {
    variables: { boardId: router.query.id },
  });

  // Input값들을 state상태에 set
  const onChangeInput = (event) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setCharacterCount(event.target.value.length);
    setInputs({ ...newInputs, rating: Number(newInputs.rating) });
    console.log(inputs);
  };

  // 댓글 PUSH -> mutation
  const onClickRegister = async (event) => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: { ...inputs },
          boardId: router.query.id,
        },
      });
      console.log(result);
      refetch();
    } catch (error) {
      alert(error.message);
    }
  };

  // 목록보기 Router -> BoardList
  const onClickRouting = () => {
    router.push(`/boards/list`);
  };

  // 수정하기 Router -> BoardEdit
  const onClickEdit = () => {
    router.push(`/boards/edit/${router.query.id}`);
  };

  // 좋아요 기능
  const onClickLike = async (event) => {
    try {
      const result = await likeBoard({
        variables: {
          boardId: router.query.id,
        },
        refetchQueries: [
          { query: FETCH_BOARD, variables: { boardId: router.query.id } },
        ],
      });
      alert("성공적으로 좋아요를 누르셨습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  // 싫어요 기능
  const onClickDislike = async (event) => {
    try {
      const result = await dislikeBoard({
        variables: {
          boardId: router.query.id,
        },
        refetchQueries: [
          { query: FETCH_BOARD, variables: { boardId: router.query.id } },
        ],
      });
      alert("성공적으로 싫어요를 누르셨습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardDetailUI
      data={data}
      onClickRegister={onClickRegister}
      onChangeInput={onChangeInput}
      comments={comments}
      characterCount={characterCount}
      onClickRouting={onClickRouting}
      onClickEdit={onClickEdit}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      refetch={refetch}
    />
  );
}
