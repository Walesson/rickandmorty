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
        }
        location {
          id
          name
          type
        }
        image
        created
      }
    }
  }
`

// import { gql } from '@apollo/client'
// import { HttpClient } from '../config'

// export const getRicks = async () => {
//   try {
//     const resp = await HttpClient.query({
//       query: gql`
//         query GetRicks {
//           characters(page: 2, filter: { name: "rick" }) {
//             info {
//               count
//             }
//             results {
//               id
//               name
//             }
//           }
//         }
//       `,
//     })
//     return resp
//   } catch (error) {
//     throw {
//       httpError: error,
//     }
//   }
// }
