import React from 'react'

///////////////////Graphql
import { useQuery } from '@apollo/client'
import { GET_POST } from '../../graphql/queries'

///////////////////components
import PostCard from './postCard/PostCard'
import Loader from '../loader/Loader'
import ServerError from '../errors/server-error/ServerError'

const Posts = () => {

  const {data,loading,error} = useQuery(GET_POST)

  if(error) return <ServerError/>
  if(loading)return <Loader/>

  return(
      <div className="row justify-content-around g-3">
        {
          data.posts.map(item=><PostCard data = {item} key={item.id}/>)
        }
      </div>
  )
}

export default Posts
