import { WrapperContent, Wrapper, WrapperLinkMap, PostTitle, PostContent, WrapperProfileIcon, ProfileIcon, WrapperUserInfoColumn, Name, DateCreated, ImgLink, ImgMap, WrapperRowButtons, WrapperRow, WrapperRowBoardCreator, WrapperColumn, WrapperColumnButton, WrapperGoToList, WrapperEditBoard} from './MarketDetail.styles';

const MarketDetailUI = ({ data }) => {
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
            <PostTitle>{data?.fetchUseditem.name}</PostTitle>
            <PostContent>{data?.fetchUseditem.contents}</PostContent>
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
    </Wrapper>
  )
}

export default MarketDetailUI;