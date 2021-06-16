import { useQuery } from "@apollo/client";
import MarketListUI from "./MarketList.presenter";
import { createContext, useState } from 'react';
import { FETCH_USEDITEMS, FETCH_USEDITEMSBEST } from "./MarketList.queries";
import { VolumeDown } from "@material-ui/icons";

const MarketList = () => {


  
  const { data: bestItems } = useQuery(FETCH_USEDITEMSBEST)
  console.log(bestItems)
  ///////////////////////////////////////////////////////////

  // Search Items
  const [search, setSearch] = useState<string>("");
  const [storeSearch, setStoreSearch] = useState<string>(search);

  // onChange store search item to state
  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  // onClick search item
  const onClickSearch = () => {
    setStoreSearch(search);
  };

  ///////////////////////////////////////////////////////////

  // Pagination/Query Board
  const [currentPage, setCurrentPage] = useState(1);
  const { data: usedItems } = useQuery(FETCH_USEDITEMS, {
    variables: { search: storeSearch, page: currentPage },
  });
  // const { data: boardscount } = useQuery(FETCH_BOARDSCOUNT, {
  //   variables: { search: storeSearch },
  // });

  // Pagination constants
  const result = 1 // ex: 1393
  const result2 = Number(String(result/10).slice(0,2))*10; // ex. 139
  const lastpage = Math.ceil(result/10)
  const basiclist = [1,10];
  const firsttwo = Math.floor(result2 / 10) * 10; // ex. 130
  const [holder, setHolder] = useState<number>(1);
  const [pageArr, setPageArr] = useState(basiclist);

  // Pagination buttons
  const onLeftArrowClick = () => {
    if (holder === 1 && currentPage === 1) return;
    if (holder === 1 && currentPage !== 1) {
      setCurrentPage(1);
      return;
    }
    setHolder(holder - 10);
    let newArr = pageArr.map((data) => data - 10);
    setPageArr(newArr);
    setCurrentPage(newArr[1]);
  };
  const onRightArrowClick = () => {
    if (holder + 9 >= firsttwo && currentPage === result2) return;
    if (holder + 9 >= firsttwo && currentPage !== result2) {
      setCurrentPage(result2);
      return;
    }
    setHolder(holder + 10);
    let newArr = pageArr.map((data) => data + 10);
    setPageArr(newArr);
    setCurrentPage(newArr[0]);
  };
  const onLeftFirstArrowClick = () => {
    setHolder(1);
    setPageArr(basiclist);
    setCurrentPage(1);
  };
  const onRightLastArrowClick = () => {
    const holderSetter = firsttwo;
    setHolder(holderSetter+1);
    
    let newArr = basiclist.map((data) => data + holderSetter);
    setPageArr(newArr);
    setCurrentPage(lastpage);
  };
  const onClickPage = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  ///////////////////////////////////////////////////////////

  return (
    <MarketListUI 
      bestItems={bestItems}
      usedItems={usedItems}
      onLeftArrowClick={onLeftArrowClick}
      onLeftFirstArrowClick={onLeftFirstArrowClick}
      holder={holder}
      onRightArrowClick={onRightArrowClick}
      onRightLastArrowClick={onRightLastArrowClick}
      currentPage={currentPage}
      onClickPage={onClickPage}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
    />
  )
}

export default MarketList