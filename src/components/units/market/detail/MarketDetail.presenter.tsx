import { WrapperContent, CommentText, CommentIcon, InputCommentMaxText, InputCommentText, InputCommentTextButton, WrapperComments, WrapperColumnHeart, WrapperRowContentTop, WrapperCenter, Wrapper, Holder, WrapperLinkMap, PostTitle, PostContent, WrapperProfileIcon, ProfileIcon, WrapperUserInfoColumn, Name, DateCreated, ImgLink, ImgMap, WrapperRowButtons, WrapperRow, WrapperRowBoardCreator, WrapperColumn, WrapperColumnButton, WrapperGoToList, WrapperEditBoard, PostRemarks, PostPrice, PostTags, Linebreak} from './MarketDetail.styles';
import MarketDetailItemUI from "./MarketDetail.presenterItem"

const MarketDetailUI = ({ data, onChangeInput, refetch, onClickRegister, characterCount, comments }) => {
  return ( 
    <Wrapper>
      <WrapperContent>
        <WrapperRow>
          <WrapperRowBoardCreator>
            <WrapperProfileIcon>
              <ProfileIcon src="/ProfileIcon.png" />
            </WrapperProfileIcon>
            <WrapperUserInfoColumn>
              <Name>{data?.fetchUseditem.seller.name}</Name>
              <DateCreated>
                Date:{" "}
                {data?.fetchUseditem.createdAt.slice(0, 10).replaceAll("-", ".")}
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
            <WrapperRowContentTop>
              <WrapperColumn>
                <PostRemarks>{data?.fetchUseditem.remarks}</PostRemarks>
                <PostTitle>{data?.fetchUseditem.name}</PostTitle>
              </WrapperColumn>
              <WrapperColumnHeart>
                <img src="/heartyellow.png" style={{display: "flex", justifyContent: "center", width: "20px", height: "20px"}}/>
                <div>20</div>
              </WrapperColumnHeart>
            </WrapperRowContentTop>
            <PostPrice>{data?.fetchUseditem.price}원</PostPrice>
            <WrapperCenter>
             <Holder src="/holder.png"/>
            </WrapperCenter>
            <PostContent>{data?.fetchUseditem.contents}</PostContent>
            <PostTags>{data?.fetchUseditem.tags}</PostTags>
            <Linebreak />
            <WrapperCenter>
              <img src="/mapholder.png" style={{width: "792px", height: "360px", marginBottom: "80px"}} />
            </WrapperCenter>
            <Linebreak />
          </WrapperColumn>
        </WrapperRow>
      </WrapperContent>
      {/* 목록으로/수정하기 */}
      <WrapperColumnButton>
        <WrapperRowButtons>
          <WrapperGoToList>
            <strong>목록으로</strong>
          </WrapperGoToList>
          <WrapperEditBoard>
            <strong>구매하기</strong>
          </WrapperEditBoard>
        </WrapperRowButtons>
      </WrapperColumnButton>
      <hr style={{width: "1200px", height: "1px", background: "#BDBDBD"}}/>
      <WrapperComments>
        <WrapperColumn>
          <WrapperColumn>
            <WrapperRow>
              <CommentIcon src="/CommentIcon.png" />
              <CommentText>문의하기</CommentText>
            </WrapperRow>
          </WrapperColumn>
          <div>
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
            {comments?.fetchUseditemQuestions.map((comments, index) => (
              <MarketDetailItemUI
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
  )
}

export default MarketDetailUI;