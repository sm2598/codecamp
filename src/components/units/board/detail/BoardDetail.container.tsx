import {
  FETCH_BOARD,
  FETCH_COMMENTS,
  CREATE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
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
    rating: 0,
  };
  const inputsCommentEdit = {
    contents: "",
    rating: "",
  };
  //Stating state variables
  const [inputs, setInputs] = useState(inputsComment);
  const [inputsEdit, setInputsCommentEdit] = useState(inputsCommentEdit);
  const [password, setPassword] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  //Stating gql components
  const [createBoardComment] = useMutation(CREATE_COMMENT);
  const [updateBoardComment] = useMutation(EDIT_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_COMMENT);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  //Board자체를 Query
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });
  //Board에 있는 댓글 Query
  const { data: aaa } = useQuery(FETCH_COMMENTS, {
    variables: { boardId: router.query.id },
  });
  //댓글 PUSH -> mutation
  const onClickRegister = async (event) => {
    try {
      const result = await createBoardComment({variables: {
        createBoardCommentInput: { ...inputs },
        boardId: router.query.id,
      },
      refetchQueries: [{query: FETCH_COMMENTS,
        variables: { boardId: router.query.id },
      }]
    });
      alert("댓글이 성공적으로 등록되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  };
  //댓글 수정 -> mutation
  // const onClickEdit = async (event) => {
  //     try {
  //         const result = await updateBoardComment({
  //             variables: {
  //                 updateBoardCommentInput: {...inputsCommentEdit},
  //                 password: password,
  //                 boardCommentId:
  //             }
  //         })
  //     }
  // }
  //Input값들을 state상태에 set
  const onChangeInput = (event) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setCharacterCount(event.target.value.length)
    setInputs(newInputs);
  };
  //목록보기 -> list
  const onClickRouting = () => {
    router.push(`/boards/list`)
  }
  //수정하기 -> BoardEdit
  const onClickEdit = () => {
    router.push(`/boards/edit/${router.query.id}`)
  }
  //댓글 수정 -> mutation
  const onClickEditComment = (event) => {
  }
  //댓글 삭제 -> mutation
  const onClickDeleteComment = async (event) => {
    try {
      const result = await deleteBoardComment({variables: {
        password: "1234",
        boardCommentId: event.target.id
      },
      refetchQueries: [{query: FETCH_COMMENTS,
        variables: { boardId: router.query.id },
      }]
      });
      alert("성공적으로 삭제하셨습니다.")
    } catch (error) {
      alert(error.message);
    }
  } 
  const onClickLike = async (event) => {
    try {
      const result = await likeBoard({variables: {
        boardId: router.query.id,
      },
      refetchQueries: [{query: FETCH_BOARD,
        variables: { boardId: router.query.id },
      }]
    });
      alert("성공적으로 좋아요를 누르셨습니다.");
    } catch (error) {
      alert(error.message);
    }
  }
  const onClickDislike = async (event) => {
    try {
      const result = await dislikeBoard({variables: {
        boardId: router.query.id,
      },
      refetchQueries: [{query: FETCH_BOARD,
        variables: { boardId: router.query.id },
      }]
    });
      alert("성공적으로 싫어요를 누르셨습니다.");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardDetailUI
      data={data}
      onClickRegister={onClickRegister}
      onChangeInput={onChangeInput}
      aaa={aaa}
      characterCount={characterCount}
      onClickRouting={onClickRouting}
      // onClickEditComment={onClickEditComment}
      onClickDeleteComment={onClickDeleteComment}
      onClickEdit={onClickEdit}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
