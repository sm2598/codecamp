import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query FETCHBOARDS($search: String, $page:Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
      images
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
      images
    }
  }
`
export const FETCH_BOARDSCOUNT = gql`
  query FETCHCOUNT($search: String) {
    fetchBoardsCount(search: $search)
  }
`
