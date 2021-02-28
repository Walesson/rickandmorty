import { gql } from '@apollo/client'

export const getRicks = gql`
  query GetRicks {
    characters(page: 0) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
          type
          dimension
          residents {
            id
          }
        }
        location {
          id
          name
          type
          dimension
          residents {
            id
          }
        }
        image
        created
      }
    }
  }
`
