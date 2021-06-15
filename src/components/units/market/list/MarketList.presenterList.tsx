import { ItemsListContent, ItemsListHashtag, ItemsListImg, ItemsListPrice, ItemsListTitle, ItemsListUser, ItemsListUserIcon, WrapperColumnItemsList, WrapperItems, WrapperRow, WrapperRowItemsList, WrapperRowItemsListChild, WrapperRowUser } from "./MarketList.styles"

const MarketListListUI = ({usedItems}) => {


  return (
    <WrapperColumnItemsList>
    {usedItems?.fetchUseditems.map((data) =>
      <WrapperRowItemsList>
          <WrapperRowItemsListChild>
            <WrapperRow>
              <WrapperItems style={{display:"flex",flexDirection:"column",justifyContent:"center",marginRight:"40px"}}>
                <ItemsListImg src="/loginbackground.png" />
              </WrapperItems>
              <WrapperItems>
                <ItemsListTitle>{data.name}</ItemsListTitle>
                <ItemsListContent>{data.contents}</ItemsListContent>
                <ItemsListHashtag>{data.tags}</ItemsListHashtag>
                <WrapperRowUser>
                  <ItemsListUserIcon src="/ProfileIcon.png" />
                  <ItemsListUser>{data.seller.name}</ItemsListUser>
                </WrapperRowUser>
              </WrapperItems>
            </WrapperRow>
            <WrapperItems >
              <ItemsListPrice>{`${data.price}원`}</ItemsListPrice>
            </WrapperItems>
          </WrapperRowItemsListChild>
      </WrapperRowItemsList>
    )}
  </WrapperColumnItemsList>
  )
}

export default MarketListListUI