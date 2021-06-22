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
  CREATE_USEDITEMANSWER,
  DELETE_USEDITEMQUESTION,
  FETCH_USEDITEMANSWERS,
  FETCH_USEDITEMQUESTIONS,
  UPDATE_USEDITEMQUESTION,
} from "./MarketDetail.queries";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useContext, useState } from "react";
import DeleteModal from "../../../../components/commons/modal/modal";
import MarketDetailItemItemUI from "./MarketDetail.presenterItemItem";
import { GlobalContext } from "../../../../../pages/_app";

export default function MarketDetailItemUI({ comments, refetch, index }) {
  const router = useRouter();

  const { userInfo } = useContext(GlobalContext);

  const inputsCommentEdit = {
    contents: "",
  };
  //Stating state variables
  const [inputsEdit, setInputsCommentEdit] = useState(inputsCommentEdit);
  const [characterCount, setCharacterCount] = useState(0);
  const [showEditComment, setShowEditComment] = useState(false);
  const [showReplyToComment, setShowReplyToComment] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  // Stating gql components
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEMQUESTION);
  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEMQUESTION);
  const [createUseditemQuestionAnswer] = useMutation(CREATE_USEDITEMANSWER);

  const { data: answers, refetch: refetch2 } = useQuery(FETCH_USEDITEMANSWERS, {
    variables: {
      useditemQuestionId: comments._id,
    },
  });
  // Input값들을 state상태에 set
  const onChangeInputComment = (event) => {
    const result = { ...inputsEdit, [event.target.name]: event.target.value };
    setCharacterCount(event.target.value.length);
    setInputsCommentEdit({ ...result });
  };
  // 댓글 수정 div show
  const onClickShowEditComment = () => {
    showEditComment === false
      ? setShowEditComment(true)
      : setShowEditComment(false);
  };
  const onClickHideEditComment = () => {
    setShowEditComment(false);
  };
  const onClickDeleteComment = async (event) => {
    try {
      const result = await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: event.target.id,
        },
      });
      refetch();
    } catch (error) {
      alert(error.message);
    }
  };
  // 댓글 수정 -> CommentEdit
  const onClickEditComment = async (event) => {
    try {
      const result = await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: inputsEdit.contents,
          },
          useditemQuestionId: event.target.id,
        },
      });
      refetch();
      setShowEditComment(false);
    } catch (error) {
      alert(error.message);
    }
  };
  const onClickCreateAnswer = async (event) => {
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: inputsEdit.contents,
          },
          useditemQuestionId: event.target.id,
        },
      });
      refetch2();
      setShowReplyToComment(false);
    } catch (error) {
      alert(error.message);
    }
  };
  const onClickShowReplyComment = () => {
    showReplyToComment === false
      ? setShowReplyToComment(true)
      : setShowReplyToComment(false);
  };

  return (
    <WrapperColumnComment
      key={index}
      index={index}
      isClicked={isClicked}
      style={{ borderTop: "1px solid #BDBDBD" }}
    >
      {showEditComment ? null : (
        <>
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
                    src="/replyButton.svg"
                    onClick={onClickShowReplyComment}
                  />
                  {userInfo._id !== comments.user._id ? null : (
                    <>
                      <CommentEditDelete
                        src="/commentedit.png"
                        id={comments._id}
                        onClick={onClickShowEditComment}
                      />
                      <CommentEditDelete
                        src="/commentdelete.png"
                        id={comments._id}
                        onClick={onClickDeleteComment}
                      />
                    </>
                  )}
                </WrapperCommentEditDelete>
              </WrapperRowCommentLeftRight>
              <CommentContent>{comments.contents}</CommentContent>
              <CommentDate>
                {comments.createdAt.slice(0, 10).replaceAll("-", ".")}
              </CommentDate>
            </WrapperColumnCommentTop>
          </WrapperRowCommentNew>
          {answers?.fetchUseditemQuestionAnswers.map((answers, index) => (
            <MarketDetailItemItemUI
              comments={comments}
              answers={answers}
              refetch={refetch}
              refetch2={refetch2}
              key={index}
              index={index}
            />
          ))}
          {showReplyToComment ? (
            <WrapperRow
              style={{ paddingLeft: "65px", borderTop: "1px solid #F2F2F2" }}
            >
              <img src="/reply.svg" style={{ paddingRight: "29px" }} />
              <div style={{ width: "100%" }}>
                <WrapperColumn>
                  <InputCommentTextEdit
                    name="contents"
                    placeholder="답글을 등록해주세요."
                    maxLength={100}
                    onChange={onChangeInputComment}
                  ></InputCommentTextEdit>
                </WrapperColumn>
                <WrapperColumn>
                  <WrapperRow>
                    <InputCommentMaxText>
                      {characterCount}/100
                    </InputCommentMaxText>
                    <InputCommentTextButtonEdit
                      id={comments._id}
                      onClick={onClickCreateAnswer}
                    >
                      답글등록
                    </InputCommentTextButtonEdit>
                  </WrapperRow>
                </WrapperColumn>
              </div>
            </WrapperRow>
          ) : null}
        </>
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
              {answers?.fetchUseditemQuestionAnswers.map((answers, index) => (
                <MarketDetailItemItemUI
                  comments={comments}
                  answers={answers}
                  refetch={refetch}
                  refetch2={refetch2}
                  key={index}
                  index={index}
                />
              ))}
            </WrapperColumn>
          </div>
        ) : null}
      </WrapperRow>
    </WrapperColumnComment>
  );
}
