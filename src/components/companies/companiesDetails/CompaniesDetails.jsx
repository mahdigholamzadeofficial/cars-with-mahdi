import React from 'react'
import { useParams } from "react-router-dom"
import sanitizeHtml from "sanitize-html"

///////////////////Graphql
import { useQuery } from "@apollo/client"
import { GET_ONE_COMPANY } from "../../../graphql/queries"

///////////////////components
import PostCard from "../../posts/postCard/PostCard"
import Loader from '../../loader/Loader'
import ServerError from '../../errors/server-error/ServerError'

const CompaniesDetails = () => {

  const params = useParams()
  
  ///////////////////Query
  const {loading,data,error} = useQuery(GET_ONE_COMPANY,{
    variables:{
      slug:params.slug
    }
  })
  
  if(error)return <ServerError/>

  if(loading) return <Loader/>
  
  return (
    <div style={{minHeight:"100vh"}}>
      <div className="container"> 
        <div className="row  mx-auto justify-content-center py-5">
          <div className="col-md-9 text-center text-light">

            <img src={data.company.avatar.url} className="w-25 " alt="images" />
            <h3 className="my-4">{data.company.name}</h3>
            <h5 className="my-4" >{data.company.country}</h5>
            <div className="text-start" dangerouslySetInnerHTML = {{__html:sanitizeHtml(data.company.description.html)}} ></div> 

          </div>
        </div>
        <div className="row justify-content-center py-4">
          <div className="col-md-9 text-light">
            <h2>{data.company.name} cars :</h2>
            <div className="row">
              {data.company.post.map(item=><PostCard data={item} key={item.id} />)}

            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default CompaniesDetails
