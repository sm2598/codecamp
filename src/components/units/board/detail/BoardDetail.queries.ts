import {gql} from '@apollo/client'

export const FETCH_BOARD = gql`
    query fb($boardId: ID!) {
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
            createdAt
            youtubeUrl
            likeCount
            dislikeCount
        }
    } 

`
export const FETCH_COMMENTS = gql`
    query FETCHBOARDCOMMENTS($boardId: ID!) {
        fetchBoardComments(boardId: $boardId) {
            _id
            writer
            contents
            rating
            createdAt
        }
    }
`
export const CREATE_COMMENT = gql`
    mutation CREATECOMMENT($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
        createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {
            writer
            contents
            rating
        }
    }
`
export const EDIT_COMMENT = gql`
    mutation updateBoardComment($updateBoardCommentInput: UpdateBoardCommentInput!, $password: String, $boardCommentId: ID!){
        updateBoardComment(updateBoardCommentInput: $updateBoardCommentInput, password: $password, boardCommentId: $boardCommentId){
            contents
            rating
        }
    }
`