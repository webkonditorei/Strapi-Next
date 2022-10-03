import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_ALL_BLOGPOSTS } from '../graphql/queries';



export default function BlogPosts({posts}) {
  
  return (
    <>
  
<h1>Mein Blog</h1>

<h2> { posts[0].attributes.title } </h2>
              
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