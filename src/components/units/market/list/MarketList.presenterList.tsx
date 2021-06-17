import { useRouter } from "next/router"
import { Credit, ItemsListContent, ItemsListHashtag, ItemsListImg, ItemsListPrice, ItemsListTitle, ItemsListUser, ItemsListUserIcon, WrapperColumnItemsList, WrapperItems, WrapperRow, WrapperRowItemsList, WrapperRowItemsListChild, WrapperRowUser } from "./MarketList.styles"

const MarketListListUI = ({usedItems}) => {
  const router = useRouter();
  const onClickRoutDetail = (event) => {
    router.push(`/market/${event.target.id}`)
  }

  return (
    <WrapperColumnItemsList>
    {usedItems?.fetchUseditems.map((data) =>
      <WrapperRowItemsList>
          <WrapperRowItemsListChild>
            <WrapperRow>
              <WrapperItems style={{display:"flex",flexDirection:"column",justifyContent:"center",marginRight:"40px"}}>
                <ItemsListImg src="/keyboard.png" />
              </WrapperItems>
              <WrapperItems>
                <ItemsListTitle id={data._id} onClick={onClickRoutDetail}>{data.name}</ItemsListTitle>
                <ItemsListContent>{data.contents.substring(0,90)}</ItemsListContent>
                <ItemsListHashtag style={{fontStyle:"normal",fontSize:"16px",color:"#828282",marginBottom:"24px"}}>{data.tags}</ItemsListHashtag>
                <WrapperRowUser style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                  <ItemsListUserIcon src="/ProfileIcon.png" />
                  <ItemsListUser>{data.seller.name}</ItemsListUser>
                </WrapperRowUser>
              </WrapperItems>
            </WrapperRow>
            <WrapperItems >
              <ItemsListPrice><Credit src="/credit.svg" />{`${data.price}원`}</ItemsListPrice>
            </WrapperItems>
          </WrapperRowItemsListChild>
      </WrapperRowItemsList>
    )}
  </WrapperColumnItemsList>
  )
}

export default MarketListListUI