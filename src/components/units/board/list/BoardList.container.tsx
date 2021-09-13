import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  FETCH_BOARDS,
  FETCH_BOARDSOFTHEBEST,
  FETCH_BOARDSCOUNT,
} from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();

  // onClick Router-to-Board
  const onClickToBoard = (event) => {
    router.push(`/boards/${event.target.id}`);
  };

  // onClick Router-to-BoardWrite
  const onClickRouterToNewBoard = () => {
    router.push("/boards/new");
  };

  // onClick card Router-to-Board
  const onClickToCard = (event) => {
    router.push(`/boards/${event.target.id}`);
  };

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
  // console.log(new Date().getTime() /1000 / 60 / 60)

  ///////////////////////////////////////////////////////////

  // Pagination/Query Board
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useQuery(FETCH_BOARDS, {
    variables: { search: storeSearch, page: currentPage },
  });
  const { data: best } = useQuery(FETCH_BOARDSOFTHEBEST);
  const { data: boardscount } = useQuery(FETCH_BOARDSCOUNT, {
    variables: { search: storeSearch },
  });

  // Pagination constants
  const result = boardscount?.fetchBoardsCount; // ex: 1393
  const result2 = Number(String(result / 10).slice(0, 2)) * 10; // ex. 139
  const lastpage = Math.ceil(result / 10);
  const basiclist = [1, 10];
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
    setHolder(holderSetter + 1);

    let newArr = basiclist.map((data) => data + holderSetter);
    setPageArr(newArr);
    setCurrentPage(lastpage);
  };
  const onClickPage = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  ///////////////////////////////////////////////////////////

  return (
    <BoardListUI
      data={data}
      best={best}
      result={result}
      boardscount={boardscount}
      holder={holder}
      currentPage={currentPage}
      onClickSearch={onClickSearch}
      onChangeSearch={onChangeSearch}
      onClickPage={onClickPage}
      onClickToBoard={onClickToBoard}
      onClickToCard={onClickToCard}
      onRightArrowClick={onRightArrowClick}
      onLeftArrowClick={onLeftArrowClick}
      onClickRouterToNewBoard={onClickRouterToNewBoard}
      onLeftFirstArrowClick={onLeftFirstArrowClick}
      onRightLastArrowClick={onRightLastArrowClick}
    />
  );
}
