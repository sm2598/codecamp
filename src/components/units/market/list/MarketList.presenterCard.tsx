import { BestCardsContent, BestCardsIMG, BestCardsPrice, BestCardsTitle, BestCardsTopHalf, ItemsListHashtag, WrapperColumn, WrapperColumnBestCards, WrapperColumnBestCardsChild, WrapperColumnBestCardsContent, WrapperColumnBestContentInner, WrapperRowBest, WrapperRowBestCards } from "./MarketList.styles"

const MarketListCardUI = ({usedItems}) => {
  return (
    <WrapperColumn>
      <WrapperColumn>
          <WrapperRowBest>
            {usedItems?.fetchUseditems.map((data) => 
              <WrapperColumnBestCards>
                <WrapperColumnBestCardsChild>
                  <BestCardsTopHalf>
                  <BestCardsIMG src="/loginbackground.png"/>
                  </BestCardsTopHalf>
                  <WrapperColumnBestCardsContent>
                    <BestCardsTitle>{data.name}</BestCardsTitle>
                    <WrapperRowBestCards>
                      <WrapperColumnBestContentInner>
                        <BestCardsContent>{data.contents}</BestCardsContent>
                        <ItemsListHashtag>{data.tags}</ItemsListHashtag>
                        <BestCardsPrice>{data.price}원</BestCardsPrice>
                      </WrapperColumnBestContentInner>
                      <WrapperColumnBestContentInner>
                        <img src="/heartyellow.png" style={{display: "flex", justifyContent: "center", width: "20px", height: "20px"}}/>
                        <div>20</div>
                      </WrapperColumnBestContentInner>
                    </WrapperRowBestCards>
                  </WrapperColumnBestCardsContent>
                </WrapperColumnBestCardsChild>
              </WrapperColumnBestCards>
            )}
        </WrapperRowBest>
      </WrapperColumn>
    </WrapperColumn>
  )
}

export default MarketListCardUI