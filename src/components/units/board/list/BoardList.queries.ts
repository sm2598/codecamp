import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query FETCHBOARDS($page:Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;
export const FETCH_BOARDSOFTHEBEST = gql`
  query FETCHBEST {
    fetchBoardsOfTheBest{
      _id
      writer
      title
      likeCount
      createdAt
    }
  }
`
export const FETCH_BOARDSCOUNT = gql`
  query FETCHCOUNT {
    fetchBoardsCount
  }
`