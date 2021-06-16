import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USEDITEM } from "../detail/MarketDetail.queries";
import MarketDetailUI from "./MarketDetail.presenter"


const MarketDetail = () => {

  const router = useRouter()

  const { data, refetch } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.id
  }})
  
  return ( 
    <MarketDetailUI 
      data={data}
    />
  )
}

export default MarketDetail;