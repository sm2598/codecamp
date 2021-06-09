import { useQuery } from "@apollo/client"
import MarketListUI from "./MarketList.presenter"
import { FETCH_USEDITEMS, FETCH_USEDITEMSBEST } from "./MarketList.queries"

const MarketList = () => {

  const { data: bestItems } = useQuery(FETCH_USEDITEMSBEST)
  const { data: usedItems } = useQuery(FETCH_USEDITEMS)


  return (
    <MarketListUI 
      bestItems={bestItems}
      usedItems={usedItems}
    />
  )
}

export default MarketList