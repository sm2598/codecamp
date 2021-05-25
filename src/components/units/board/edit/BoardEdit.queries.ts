import { gql } from "@apollo/client";

export const EDIT_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId: ID!) {
    updateBoard(updateBoardInput: $updateBoardInput, password: $password, boardId: $boardId) {
      _id
    }
  }
`;
