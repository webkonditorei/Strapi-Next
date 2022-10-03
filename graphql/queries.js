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
                name
                url
              }
            }
          }
        }
      }
    }
  
  }

`; 


const GET_ALL_ABOUTCONTENTS = gql `

query {
    aboutcontents
    {
      data
      {
        attributes
        {
          Kontakt
          {
            Titel 
            Email
            Telefon
          
          }}}}}

`

export { GET_ALL_BLOGPOSTS, GET_ALL_ABOUTCONTENTS };