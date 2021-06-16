import {
  Wrapper,
  Name,
  WrapperComments,
  WrapperColumnButton,
  WrapperGoToList,
  WrapperEditBoard,
  LikeIcon,
  WrapperUserInfoColumn,
  CommentIcon,
  CommentText,
  InputCommentMaxText,
  InputCommentRating,
  InputCommentAuthor,
  InputCommentPassword,
  InputCommentText,
  InputCommentTextButton,
  WrapperContent,
  WrapperRow,
  WrapperColumn,
  DateCreated,
  ProfileIcon,
  Concert,
  PostTitle,
  PostContent,
  Video,
  DislikeIcon,
  LikeColor,
  DislikeColor,
  WrapperRowBoardCreator,
  WrapperYouTubePlayer,
  WrapperRowLikeButtons,
  WrapperColumnBoardBottom,
  WrapperRowButtons,
  WrapperColumnLikeButtons,
  WrapperCenterLike,
  WrapperProfileIcon,
  WrapperLinkMap,
  ImgLink,
  ImgMap,
} from "./BoardDetail.styles";
import React from "react";
import ReactPlayer from "react-player/youtube";
import BoardDetailItemUI from "./BoardDetail.presenterItem";
import { HalfRating } from "../../../commons/star";

export default function BoardDetailUI({
  data,
  onClickRegister,
  onChangeInput,
  comments,
  characterCount,
  onClickRouting,
  onClickEdit,
  onClickLike,
  onClickDislike,
  refetch,
}) {

  console.log(data?.fetchBoard.images)
  return (
    <Wrapper>
      <WrapperContent>
        <WrapperRow>
          <WrapperRowBoardCreator>
            <WrapperProfileIcon>
              <ProfileIcon src="/ProfileIcon.png" />
            </WrapperProfileIcon>
            <WrapperUserInfoColumn>
              <Name>{data?.fetchBoard.writer}</Name>
              <DateCreated>
                Date:{" "}
                {data?.fetchBoard.createdAt.slice(0, 10).replaceAll("-", ".")}
              </DateCreated>
            </WrapperUserInfoColumn>
            <WrapperLinkMap>
              <ImgLink src="/link.png" />
              <ImgMap src="/map.png" />
            </WrapperLinkMap>
          </WrapperRowBoardCreator>
        </WrapperRow>
        <WrapperRow>
          <WrapperColumn>
            <PostTitle>{data?.fetchBoard.title}</PostTitle>
            <img src={data?.fetchBoard.images[0]} />
            <PostContent>{data?.fetchBoard.contents}</PostContent>
            <Video src={data?.fetchBoard.video}></Video>
          </WrapperColumn>
        </WrapperRow>
        <WrapperRow>
          <WrapperColumnBoardBottom>
            <WrapperYouTubePlayer>
              <ReactPlayer
                controls={true}
                width={486}
                height={240}
                url={data?.fetchBoard.youtubeUrl}
              />
            </WrapperYouTubePlayer>
            <WrapperCenterLike>
              <WrapperRowLikeButtons>
                <WrapperColumnLikeButtons>
                  <LikeIcon src="/likebutton.png" onClick={onClickLike} />
                  <LikeColor>{data?.fetchBoard.likeCount}</LikeColor>
                </WrapperColumnLikeButtons>
                <WrapperColumnLikeButtons>
                  <DislikeIcon
                    src="/dislikebutton.png"
                    onClick={onClickDislike}
                  />
                  <DislikeColor>{data?.fetchBoard.dislikeCount}</DislikeColor>
                </WrapperColumnLikeButtons>
              </WrapperRowLikeButtons>
            </WrapperCenterLike>
          </WrapperColumnBoardBottom>
        </WrapperRow>
      </WrapperContent>
      {/* 목록으로/수정하기 */}
      <WrapperColumnButton>
        <WrapperRowButtons>
          <WrapperGoToList onClick={onClickRouting}>
            <strong>목록으로</strong>
          </WrapperGoToList>
          <WrapperEditBoard onClick={onClickEdit}>
            <strong>수정하기</strong>
          </WrapperEditBoard>
        </WrapperRowButtons>
      </WrapperColumnButton>
      {/* 댓글 text */}
      <WrapperComments>
        <WrapperColumn>
          <WrapperColumn>
            <WrapperRow>
              <CommentIcon src="/CommentIcon.png" />
              <CommentText>댓글</CommentText>
            </WrapperRow>
          </WrapperColumn>
          <div>
            <WrapperColumn>
              <WrapperRow>
                <InputCommentAuthor
                  type="text"
                  name="writer"
                  placeholder="작성자"
                  onChange={onChangeInput}
                ></InputCommentAuthor>
                <InputCommentPassword
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  onChange={onChangeInput}
                ></InputCommentPassword>
                <HalfRating onChangeInput={onChangeInput} />
              </WrapperRow>
            </WrapperColumn>
            <WrapperColumn>
              <InputCommentText
                name="contents"
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                maxLength={100}
                onChange={onChangeInput}
              ></InputCommentText>
            </WrapperColumn>
            <WrapperColumn>
              <WrapperRow>
                <InputCommentMaxText>{characterCount}/100</InputCommentMaxText>
                <InputCommentTextButton onClick={onClickRegister}>
                  등록하기
                </InputCommentTextButton>
              </WrapperRow>
            </WrapperColumn>
          </div>
          <WrapperColumn>
            {comments?.fetchBoardComments.map((comments, index) => (
              <BoardDetailItemUI
                key={comments._id}
                index={index}
                comments={comments}
                refetch={refetch}
              />
            ))}
          </WrapperColumn>
        </WrapperColumn>
      </WrapperComments>
    </Wrapper>
  );
}
