import { gql } from "@apollo/client";

const GET_ALL_BLOGPOSTS = gql`

query {
    blogposts {
      data {
        attributes {
          title
          blogbody
          slug
          splash {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  
  }

`; 


export { GET_ALL_BLOGPOSTS };