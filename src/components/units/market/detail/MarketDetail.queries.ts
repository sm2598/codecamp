import { gql } from '@apollo/client';

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      useditemAddress {
        zipcode
        address
        lat
        lng
      }
      buyer {
        name
      }
      seller {
        name
      }
      soldAt
      createdAt
    }
  }
`
export const FETCH_USEDITEMQUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      user {
        name
      }
      createdAt
      contents
    }
  }
`
export const FETCH_USEDITEMANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: page, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(page: $page, useditemQuestionId: $useditemQuestionId) {
      contents
      useditemQuestion
      user
      _id
      createdAt
    }
  }
`
export const CREATE_USEDITEMQUESTION = gql`
  mutation createUseditemQuestion($createUseditemQuestionInput: CreateUseditemQuestionInput!, $useditemId: ID!) {
    createUseditemQuestion(createUseditemQuestionInput: $createUseditemQuestionInput, useditemId: $useditemId) {
      _id
    }
  }
`
export const DELETE_USEDITEMQUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`
export const UPDATE_USEDITEMQUESTION = gql`
  mutation updateUseditemQuestion($updateUseditemQuestionInput: UpdateUseditemQuestionInput!, $useditemQuestionId: ID!) {
    updateUseditemQuestion(updateUseditemQuestionInput: $updateUseditemQuestionInput, useditemQuestionId: $useditemQuestionId) {
      contents
    }
  }
`