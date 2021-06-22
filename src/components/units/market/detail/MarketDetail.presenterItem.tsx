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

  const inputsQuestionEdit = {
    contents: "",
  };
  //Stating state variables
  const [inputsEdit, setInputsEdit] = useState(inputsQuestionEdit);
  const [characterCount, setCharacterCount] = useState(0);
  const [showEditQuestion, setShowEditQuestion] = useState(false);
  const [showReplyToQuestion, setShowReplyToQuestion] = useState(false);
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
  const onChangeInputQuestion = (event) => {
    const result = { ...inputsEdit, [event.target.name]: event.target.value };
    setCharacterCount(event.target.value.length);
    setInputsEdit({ ...result });
  };
  // 댓글 수정 div show
  const onClickShowEditQuestion = () => {
    showEditQuestion === false
      ? setShowEditQuestion(true)
      : setShowEditQuestion(false);
  };
  const onClickHideEditQuestion = () => {
    setShowEditQuestion(false);
  };
  const onClickDeleteQuestion = async (event) => {
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
  const onClickEditQuestion = async (event) => {
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
      setShowEditQuestion(false);
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
      setShowReplyToQuestion(false);
    } catch (error) {
      alert(error.message);
    }
  };
  const onClickShowReplyQuestion = () => {
    showReplyToQuestion === false
      ? setShowReplyToQuestion(true)
      : setShowReplyToQuestion(false);
  };

  return (
    <WrapperColumnComment
      key={index}
      style={{ borderTop: "1px solid #BDBDBD" }}
    >
      {showEditQuestion ? null : (
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
                    onClick={onClickShowReplyQuestion}
                  />
                  {userInfo._id !== comments.user._id ? null : (
                    <>
                      <CommentEditDelete
                        src="/commentedit.png"
                        id={comments._id}
                        onClick={onClickShowEditQuestion}
                      />
                      <CommentEditDelete
                        src="/commentdelete.png"
                        id={comments._id}
                        onClick={onClickDeleteQuestion}
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
          {/* 답글들이 여기서 생성됨 */}
          {answers?.fetchUseditemQuestionAnswers.map((answers, index) => (
            <MarketDetailItemItemUI
              comments={comments}
              answers={answers}
              refetch={refetch}
              refetch2={refetch2}
              key={index}
              index={index}
              onClickShowReplyQuestion={onClickShowReplyQuestion}
            />
          ))}
          {showReplyToQuestion ? (
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
                    onChange={onChangeInputQuestion}
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
        {showEditQuestion ? (
          <div>
            <WrapperColumn>
              <WrapperNameReview>
                <CommentName>
                  <strong>{comments.user.name}</strong>
                </CommentName>
                <CommentEditDelete
                  src="/commentedit.png"
                  onClick={onClickHideEditQuestion}
                />
              </WrapperNameReview>
              <InputCommentTextEdit
                name="contents"
                defaultValue={comments.contents}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                maxLength={100}
                onChange={onChangeInputQuestion}
              ></InputCommentTextEdit>
            </WrapperColumn>
            <WrapperColumn>
              <WrapperRow>
                <InputCommentMaxText>{characterCount}/100</InputCommentMaxText>
                <InputCommentTextButtonEdit
                  id={comments._id}
                  onClick={onClickEditQuestion}
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
                  onClickShowReplyQuestion={onClickShowReplyQuestion}
                />
              ))}
            </WrapperColumn>
          </div>
        ) : null}
      </WrapperRow>
    </WrapperColumnComment>
  );
}
