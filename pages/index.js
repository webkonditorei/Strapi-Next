import { ApolloClient, InMemoryCache } from '@apollo/client'
import Head from 'next/head'
import Link from 'next/link';
import { GET_ALL_BLOGPOSTS } from '../graphql/queries';
import { gql } from "@apollo/client";







export default function Home({posts}) {
  

  
  return (
    <>
  <Head>
    <title>ElDedo Blog</title>
    <meta name='description' content='Bla bla bla'/>
  </Head>
<h1>Mein Blog</h1>

{posts.map((val, i) => {
  return (
    <>
    <h3> { val.attributes.title } </h3>
    </>
  )
})}
              


    </>
  )
}



export async function getStaticProps() {

  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: GET_ALL_BLOGPOSTS
  })

  return {
    props: {
      posts: data.blogposts.data
    }
  }
}


