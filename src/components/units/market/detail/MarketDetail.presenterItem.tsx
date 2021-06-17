import {
  WrapperColumnCommentTop,
  WrapperColumnComment,
  CommentContent,
  ProfileIconComment,
  CommentName,
  CommentDate,
  InputCommentMaxText,
  WrapperRow,
  WrapperColumn,
  CommentEditDelete,
  WrapperNameReview,
  WrapperRowCommentLeftRight,
  WrapperCommentEditDelete,
  InputCommentTextButtonEdit,
  InputCommentTextEdit,
  WrapperRowCommentNew,
} from "./MarketDetail.styles";
import {
  DELETE_USEDITEMQUESTION, FETCH_USEDITEMQUESTIONS, UPDATE_USEDITEMQUESTION
} from "./MarketDetail.queries";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import DeleteModal from "../../../../components/commons/modal/modal";

export default function MarketDetailItemUI({ comments, refetch, index }) {
  const router = useRouter();

  const inputsCommentEdit = {
    contents: "",
  };
  //Stating state variables
  const [inputsEdit, setInputsCommentEdit] = useState(inputsCommentEdit);
  const [characterCount, setCharacterCount] = useState(0);
  const [showEditComment, setShowEditComment] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  //Stating gql components
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEMQUESTION);
  //Input값들을 state상태에 set
  const onChangeInputComment = (event) => {
    const result = { ...inputsEdit, [event.target.name]: event.target.value };
    setCharacterCount(event.target.value.length);
    setInputsCommentEdit({ ...result});
  };
  //댓글 수정 div show
  const onClickShowEditComment = () => {
    showEditComment === false
      ? setShowEditComment(true)
      : setShowEditComment(false);
  };
  const onClickHideEditComment = () => {
    setShowEditComment(false)
  }
  //댓글 수정 -> CommentEdit
  const onClickEditComment = async (event) => {
    try {
      const result = await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: inputsEdit.contents,
          },
          useditemQuestionId: event.target.id,
        },
        refetchQueries: [
          { query: FETCH_USEDITEMQUESTIONS, variables: { useditemId: router.query.id } },
        ],
      });
      alert("성공적으로 댓글 수정하셨습니다.");
      setShowEditComment(false);
      refetch();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <WrapperColumnComment key={index} index={index} isClicked={isClicked}>
      {showEditComment ? null : (
        <WrapperRowCommentNew>
          <ProfileIconComment src="/ProfileIcon.png" />
          <WrapperColumnCommentTop>
            <WrapperRowCommentLeftRight>
              <WrapperNameReview>
                <CommentName>
                  <strong>{comments.user.name}</strong>
                </CommentName>
              </WrapperNameReview>
              <WrapperCommentEditDelete>
                <CommentEditDelete
                  src="/commentedit.png"
                  id={comments._id}
                  onClick={onClickShowEditComment}
                />
                <DeleteModal
                  isClicked={isClicked}
                  setIsClicked={setIsClicked}
                  comments={comments}
                />
              </WrapperCommentEditDelete>
            </WrapperRowCommentLeftRight>
            <CommentContent>{comments.contents}</CommentContent>
            <CommentDate>
              {comments.createdAt.slice(0, 10).replaceAll("-", ".")}
            </CommentDate>
          </WrapperColumnCommentTop>
        </WrapperRowCommentNew>
      )}
      {/* 댓글수정 */}
      <WrapperRow>
        {showEditComment ? (
          <div>
            <WrapperColumn>
              <WrapperNameReview>
                <CommentName>
                  <strong>{comments.user.name}</strong>
                </CommentName>
                <CommentEditDelete
                  src="/commentedit.png"
                  onClick={onClickHideEditComment}
                />
              </WrapperNameReview>
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
                <InputCommentTextButtonEdit
                  id={comments._id}
                  onClick={onClickEditComment}
                >
                  수정하기
                </InputCommentTextButtonEdit>
              </WrapperRow>
            </WrapperColumn>
          </div>
        ) : null}
      </WrapperRow>
    </WrapperColumnComment>
  );
}
