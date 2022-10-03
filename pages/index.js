import Head from 'next/head'
import Link from 'next/link';
import BlogPosts from '../components/blogposts';
import { GET_ALL_BLOGPOSTS } from '../graphql/queries';
import { ApolloClient, InMemoryCache } from '@apollo/client'







export default function Home({posts}) {
  

  
  return (
    <>
  
<BlogPosts/>

</>

  )
}








