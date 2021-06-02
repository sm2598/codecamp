import {
  WrapperColumnCommentTop,
  WrapperColumnComment,
  CommentContent,
  ProfileIconComment,
  CommentReview,
  CommentName,
  CommentDate,
  InputCommentMaxText,
  InputCommentRating,
  InputCommentAuthor,
  InputCommentPassword,
  WrapperRow,
  WrapperColumn,
  CommentEditDelete,
  WrapperNameReview,
  WrapperRowCommentLeftRight,
  WrapperCommentEditDelete,
  Star,
  InputCommentTextButtonEdit,
  InputCommentTextEdit,
} from "./BoardDetail.styles";
import {
  FETCH_COMMENTS,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from "./BoardDetail.queries";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { HalfRating, HalfRatingEdit, HalfRatingRead } from "../../../commons/star";
import DeleteModal from "../../../../components/commons/modal/modal"

export default function BoardDetailItemUI ({comments, refetch})  {

  console.log(comments)
  const router = useRouter();

  const inputsCommentEdit = {
    contents: "",
    ratingEdit: 0,
  };
  //Stating state variables
  const [inputsEdit, setInputsCommentEdit] = useState(inputsCommentEdit);
  const [password, setPassword] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [showEditComment, setShowEditComment] = useState(false);
  //Stating gql components
  const [updateBoardComment] = useMutation(EDIT_COMMENT);
  //Input값들을 state상태에 set
  const onChangeInputComment = (event) => {
    const result = { ...inputsEdit, [event.target.name]: event.target.value };
    setCharacterCount(event.target.value.length)
    setInputsCommentEdit({ ...result, ratingEdit: Number(result.ratingEdit)});
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  };
  //댓글 수정 div show
  const onClickShowEditComment = () => {
    showEditComment === false ? setShowEditComment(true) : setShowEditComment(false)
    console.log(showEditComment)
  };
  //댓글 수정 -> CommentEdit
  const onClickEditComment = async (event) => {
    try {
      const result = await updateBoardComment({variables: {
        updateBoardCommentInput: { contents: inputsEdit.contents, rating: inputsEdit.ratingEdit },
        password: password,
        boardCommentId: event.target.id
      },
      refetchQueries: [{query: FETCH_COMMENTS,
        variables: {boardId: router.query.id},
      }]
      });
      alert("성공적으로 댓글 수정하셨습니다.")
      setShowEditComment(false)
      refetch()
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <WrapperColumnComment>
    { showEditComment ? null :
      <WrapperRow>
        <ProfileIconComment src="/ProfileIcon.png" />
        <WrapperColumnCommentTop>
          <WrapperRowCommentLeftRight>
            <WrapperNameReview>
              <CommentName>
                <strong>{comments.writer}</strong>
              </CommentName>
              <CommentReview>
                  {/* 별표시 */}
                  <HalfRatingRead comments={comments}/>
              </CommentReview>
            </WrapperNameReview>
            <WrapperCommentEditDelete>
              <CommentEditDelete src="/commentedit.png" id={comments._id} onClick={onClickShowEditComment} />
              <DeleteModal comments={comments} />
            </WrapperCommentEditDelete>
          </WrapperRowCommentLeftRight>
          <CommentContent>{comments.contents}</CommentContent>
          <CommentDate>{comments.createdAt.slice(0, 10).replaceAll("-", ".")}</CommentDate>
        </WrapperColumnCommentTop>
      </WrapperRow>
    }
    {/* 댓글수정 */}
    <WrapperRow>
    { showEditComment ? 
    <div>
      <WrapperColumn>
        <WrapperRow>
          <InputCommentAuthor
            type="text"
            name="writer"
            disabled
            style={{backgroundColor: 'lightgrey'}}
            placeholder={comments.writer}
          ></InputCommentAuthor>
          <InputCommentPassword
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={onChangePassword}
          ></InputCommentPassword>
          <HalfRatingEdit onChangeInputComment={onChangeInputComment}/>
        </WrapperRow>
      </WrapperColumn>
      <WrapperColumn>
        <InputCommentTextEdit
          name="contents"
          defaultValue={comments.contents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          maxLength={100}
          onChange={onChangeInputComment}
        ></InputCommentTextEdit>
      </WrapperColumn>
      <WrapperColumn>
        <WrapperRow>
          <InputCommentMaxText>{characterCount}/100</InputCommentMaxText>
          <InputCommentTextButtonEdit id={comments._id} onClick={onClickEditComment}>
            수정하기
          </InputCommentTextButtonEdit>
        </WrapperRow>
      </WrapperColumn>
    </div>
    : null }
    </WrapperRow>
  </WrapperColumnComment>
  )
}