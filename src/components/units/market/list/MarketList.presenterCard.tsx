import { useRouter } from "next/router"
import { BestCardsContent, BestCardsIMG, BestCardsPrice, BestCardsTitle, BestCardsTopHalf, ItemsListHashtag, WrapperColumn, WrapperColumnBestCards, WrapperColumnBestCardsChild, WrapperColumnBestCardsContent, WrapperColumnBestContentInner, WrapperRowBest, WrapperRowBestCards } from "./MarketList.styles"

const MarketListCardUI = ({usedItems}) => {
  const router = useRouter();
  const onClickRoutDetail = (event) => {
    router.push(`/market/${event.target.id}`)
  }
  
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
                    <BestCardsTitle id={data._id} onClick={onClickRoutDetail}>{data.name}</BestCardsTitle>
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
            {new Array(2).fill(1).map(()=>(
            <WrapperColumnBestCards>
            <WrapperColumnBestCardsChild>
              <BestCardsTopHalf>
              <BestCardsIMG src="/nyan-cat.gif"/>
              </BestCardsTopHalf>
              <WrapperColumnBestCardsContent>
                <BestCardsTitle>광고</BestCardsTitle>
                <WrapperRowBestCards>
                  <WrapperColumnBestContentInner>
                    <BestCardsContent>광고</BestCardsContent>
                    <ItemsListHashtag>#광고</ItemsListHashtag>
                    <BestCardsPrice>무료</BestCardsPrice>
                  </WrapperColumnBestContentInner>
                  <WrapperColumnBestContentInner>
                    <img src="/heartyellow.png" style={{display: "flex", justifyContent: "center", width: "20px", height: "20px"}}/>
                    <div>20</div>
                  </WrapperColumnBestContentInner>
                </WrapperRowBestCards>
              </WrapperColumnBestCardsContent>
            </WrapperColumnBestCardsChild>
          </WrapperColumnBestCards>
            ))}
        </WrapperRowBest>
      </WrapperColumn>
    </WrapperColumn>
  )
}

export default MarketListCardUI