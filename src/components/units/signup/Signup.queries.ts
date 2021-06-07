import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserinput: $createUserInput)
  }
`