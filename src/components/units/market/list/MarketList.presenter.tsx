import MarketListListUI from './MarketList.presenterList';
import MarketListCardUI from './MarketList.presenterCard';
import AppsIcon from '@material-ui/icons/Apps';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import { Search, WrapperRowButton, WrapperRowButtonInputs, WrapperRowItemsListChild, WrapperColumnItemsList, WrapperRowItemsList, ButtonSearch, WrapperSearchInputDiv, SearchImg, BestCardsIMG, WrapperRow, WrapperRowButtonSelling, BestCardsTitle, WrapperColumnBestContentInner, BestCardsTopHalf, BestCardsPrice, Wrapper, WrapperColumnBestCardsChild, WrapperColumn, WrapperRowBestCards, WrapperColumnBestCards, WrapperColumnBestCardsContent, WrapperColumnBestCardsTitle, BestCardsContent, WrapperRowBest, ButtonSelling, ItemsListImg, ItemsListTitle, ItemsListContent, ItemsListHashtag, ItemsListUserIcon, ItemsListUser, ItemsListPrice, WrapperItems, ButtonCreateItem } from './MarketList.styles';
import { useState } from 'react';

const MarketListUI = ({bestItems, usedItems}) => {

  const [showDisplayChoice, setShowDisplayChoice] = useState<boolean>(true)
  const [showDisplayChoiceIcon, setShowDisplayChoiceIcon] = useState<boolean>(true)
  const [selltype, setIsActive] = useState<boolean>(true)

  const onClickDisplay = () => {
    setShowDisplayChoice(prev => !prev);
  }
  const onClickSellType = () => {
    setIsActive(prev => !prev);
  }

  return (
    <Wrapper>
      {/* Best Items */}
      <WrapperColumn>
        <WrapperColumn>
          <WrapperColumnBestCardsTitle>베스트 상품</WrapperColumnBestCardsTitle>
            <WrapperRowBest>
              {bestItems?.fetchUseditemsOfTheBest.map((data) => 
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
        {/* ItemLists */}
        <WrapperColumn>
          <WrapperRowButtonInputs>
              <WrapperRowButtonSelling>
                <ButtonSelling isActive={selltype} onClick={onClickSellType}>판매중 상품</ButtonSelling>
                <ButtonSelling isActive={!selltype} onClick={onClickSellType}>판매된 상품</ButtonSelling>
              </WrapperRowButtonSelling>
              <WrapperRow>
                변경하기: 
                {showDisplayChoice
                ? <ViewAgendaIcon style={{cursor:"pointer"}} onClick={onClickDisplay}/> 
                : <AppsIcon style={{cursor:"pointer"}} onClick={onClickDisplay}/>  }
                
                
              </WrapperRow>
              <WrapperSearchInputDiv>
                <SearchImg src="/search.png" /><Search placeholder="제품을 검색해주세요" />
              </WrapperSearchInputDiv>
              {/* 날짜 */}
              <ButtonSearch>검색</ButtonSearch>
          </WrapperRowButtonInputs>
        </WrapperColumn>
          {/* List */}
          {showDisplayChoice ? <MarketListCardUI usedItems={usedItems}/> : <MarketListListUI usedItems={usedItems}/>}
        <WrapperRowButton>
          <ButtonCreateItem>상품 등록하기</ButtonCreateItem>
        </WrapperRowButton>
      </WrapperColumn>
    </Wrapper>
  )
}

export default MarketListUI