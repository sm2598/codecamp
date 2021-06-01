import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDSOFTHEBEST } from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();

  // OnClick Router-to-Board
  const onClickToBoard = (event) => {
    router.push(`/boards/${event.target.id}`)
  }

  // Pagination/Query Board
  const [ currentPage, setCurrentPage ] = useState(1)
  const { data } = useQuery(FETCH_BOARDS, 
      {variables: {page: currentPage}})
  const { data: best } = useQuery(FETCH_BOARDSOFTHEBEST)

  // Set page to clicked number
  const onClickPage = (event) => {
      setCurrentPage(Number(event.target.id))
  }

  // onClick card Router-to-Board
  const onClickToCard = (event) => {
    router.push(`/boards/${event.target.id}`)
  }

  return (
    <BoardListUI 
      data={data}
      best={best}
      currentPage={currentPage}
      onClickPage={onClickPage}
      onClickToBoard={onClickToBoard}
      onClickToCard={onClickToCard}
     />
  )
}
