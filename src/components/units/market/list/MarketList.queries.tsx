import { gql } from '@apollo/client'

export const FETCH_USEDITEMSBEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      contents
      price
    }
  }
`
export const FETCH_USEDITEMS = gql`
  query fetchUseditems {
    fetchUseditems {
      _id
      name
      contents
      price
      tags
      seller {
        name
      }
      createdAt
    }
  }
`