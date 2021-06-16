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