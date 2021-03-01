import { gql } from '@apollo/client'

export const getCharacters = gql`
  query getCharacters($page: Int!, $filter: String!) {
    characters(page: $page, filter: { name: $filter }) {
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
