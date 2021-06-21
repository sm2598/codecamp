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
import { useContext, useState } from "react";
import {
  DELETE_USEDITEMANSWER,
  FETCH_USEDITEMANSWERS,
  UPDATE_USEDITEMANSWER,
} from "./MarketDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../../pages/_app";

const inputsCommentEdit = {
  contents: "",
};

const MarketDetailItemItemUI = ({ comments, refetch, key, index, answers }) => {
  const router = useRouter();

  const { userInfo } = useContext(GlobalContext);

  //Stating state variables
  const [inputsEdit, setInputsCommentEdit] = useState(inputsCommentEdit);
  const [characterCount, setCharacterCount] = useState(0);
  const [showEditComment, setShowEditComment] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  //Stating gql components
  const [updateUseditemQuestionAnswer] = useMutation(UPDATE_USEDITEMANSWER);
  const [deleteUseditemQuestionAnswer] = useMutation(DELETE_USEDITEMANSWER);
  //Input값들을 state상태에 set
  const onChangeInputComment = (event) => {
    const result = { ...inputsEdit, [event.target.name]: event.target.value };
    setCharacterCount(event.target.value.length);
    setInputsCommentEdit({ ...result });
  };
  //댓글 수정 div show
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
      const result = await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: event.target.id,
        },
      });
      refetch();
    } catch (error) {
      alert(error.message);
    }
  };
  //댓글 수정 -> CommentEdit
  const onClickEditComment = async (event) => {
    try {
      const result = await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: inputsEdit.contents,
          },
          useditemQuestionAnswerId: event.target.id,
        },
      });
      setShowEditComment(false);
      refetch();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <WrapperRow style={{ paddingLeft: "65px", borderTop: "1px solid #F2F2F2" }}>
      <img src="/reply.svg" style={{ paddingRight: "29px" }} />
      <WrapperColumnComment key={index} index={index} isClicked={isClicked}>
        {showEditComment ? null : (
          <>
            <WrapperRowCommentNew>
              <ProfileIconComment src="/ProfileIcon.png" />
              <WrapperColumnCommentTop>
                <WrapperRowCommentLeftRight>
                  <WrapperNameReview>
                    <CommentName>
                      <strong>{answers.user.name}</strong>
                    </CommentName>
                  </WrapperNameReview>
                  <WrapperCommentEditDelete>
                    <CommentEditDelete src="/replyButton.svg" />
                    {userInfo._id !== answers.user._id ? null : (
                      <>
                        <CommentEditDelete
                          src="/commentedit.png"
                          id={answers._id}
                          onClick={onClickShowEditComment}
                        />
                        <CommentEditDelete
                          src="/commentdelete.png"
                          id={answers._id}
                          onClick={onClickDeleteComment}
                        />
                      </>
                    )}
                  </WrapperCommentEditDelete>
                </WrapperRowCommentLeftRight>
                <CommentContent>{answers.contents}</CommentContent>
                <CommentDate>
                  {answers.createdAt.slice(0, 10).replaceAll("-", ".")}
                </CommentDate>
              </WrapperColumnCommentTop>
            </WrapperRowCommentNew>
          </>
        )}
        {/* 댓글수정 */}
        <WrapperRow>
          {showEditComment ? (
            <div>
              <WrapperColumn>
                <WrapperNameReview>
                  <CommentName>
                    <strong>{answers.user.name}</strong>
                  </CommentName>
                  <CommentEditDelete
                    src="/commentedit.png"
                    onClick={onClickHideEditComment}
                  />
                </WrapperNameReview>
                <InputCommentTextEdit
                  name="contents"
                  defaultValue={answers.contents}
                  placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
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
                    id={answers._id}
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
    </WrapperRow>
  );
};

export default MarketDetailItemItemUI;
