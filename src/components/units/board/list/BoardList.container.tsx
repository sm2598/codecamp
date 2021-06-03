import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDSOFTHEBEST, FETCH_BOARDSCOUNT } from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();

  // OnClick Router-to-Board
  const onClickToBoard = (event) => {
    router.push(`/boards/${event.target.id}`)
  }

  // onClick Router-to-BoardWrite
  const onClickRouterToNewBoard = (event) => {
    router.push('/boards/new')
  }

  // Pagination/Query Board
  const [ currentPage, setCurrentPage ] = useState(1)
  const { data } = useQuery(FETCH_BOARDS, 
      {variables: {page: currentPage}})
  const { data: best } = useQuery(FETCH_BOARDSOFTHEBEST)
  const { data: boardscount } = useQuery(FETCH_BOARDSCOUNT)
  const [disabled, setDisabled] = useState(false)

  // Pagination constants
  const result = boardscount?.fetchBoardsCount // ex: 1364
  const result2 = Math.ceil(result/10) // ex. 137
  const basiclist = [0,1,2,3,4,5,6,7,8,9]
  const [holder, setHolder] = useState(1)
  const [pageArr, setPageArr] = useState(basiclist)

  // Pagination buttons
  const onLeftArrowClick = () => {
    if(holder === 1) return;
    setHolder(holder-10)
    let newArr = pageArr.map(data => data-10)
    setPageArr(newArr)
    setCurrentPage(newArr[9])
  }
  const onRightArrowClick = () => {
    if(holder >= Math.floor(result2/10)*10) return;
    setHolder(holder+10)
    let newArr = pageArr.map(data => data+10)
    setPageArr(newArr)
    setCurrentPage(newArr[0])
  }
  const onLeftFirstArrowClick = () => {
    setHolder(1)
    setPageArr(basiclist)
    setCurrentPage(1)
  }
  const onRightLastArrowClick = () => {
    const holderSetter = Math.floor(result2/10)*10+1
    let newArr = basiclist.map(data => data + holderSetter)
    setPageArr(newArr)
    setHolder(holderSetter)
    setCurrentPage(result2)
  }
  const onClickPage = (event) => {
      setCurrentPage(Number(event.target.id))
  }

  // onClick card Router-to-Board
  const onClickToCard = (event) => {
    router.push(`/boards/${event.target.id}`)
  }

  return (
    <BoardListUI 
    pageArr={pageArr}
      data={data}
      best={best}
      boardscount={boardscount}
      holder={holder}
      disabled={disabled}
      currentPage={currentPage}
      onClickPage={onClickPage}
      onClickToBoard={onClickToBoard}
      onClickToCard={onClickToCard}
      onRightArrowClick={onRightArrowClick}
      onLeftArrowClick={onLeftArrowClick}
      onClickRouterToNewBoard={onClickRouterToNewBoard}
      onLeftFirstArrowClick={onLeftFirstArrowClick}
      onRightLastArrowClick={onRightLastArrowClick}
     />
  )
}
