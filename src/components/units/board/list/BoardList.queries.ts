import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query FETCHBOARDS {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;
