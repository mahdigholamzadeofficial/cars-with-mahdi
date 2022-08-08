import React from 'react'
import sanitizeHtml from 'sanitize-html'
import {BsFillArrowRightSquareFill} from "react-icons/bs"

//////////////GraphQl
import { useQuery } from '@apollo/client'
import { GET_ONE_POST } from '../../../graphql/queries'

/////////////react-router-dom
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

///////////////////components
import Comments from '../../comments/comments/Comments'
import CommentForm from "../../comments/commentsForm/CommentForm"
import ServerError from '../../errors/server-error/ServerError'
import Loader from '../../loader/Loader'

const PostDetailes = () => {

  ///////////////////react-router-dom
  const params = useParams()
  const navigate = useNavigate()

  ///////////////////Query
  const {data,error,loading} = useQuery(GET_ONE_POST,{
    variables:{
      slug:params.slug
    }
  });

  if(error) return <ServerError/>
  if(loading) return <Loader/>

  return (
    <div style={{minHeight:"100vh",backgroundColor:"#3d2b8e"}}>
      <div className='container'>
        <div className="row py-5 justify-content-center">
          <div className="col-md-9 text-light">
            <div className='d-flex justify-content-between align-items-center mb-5'>
              <h5 style={{fontFamily:"libraBold"}}>{data.post.carName}</h5>
              <span role="button" onClick={()=>navigate(-1)} className='fs-2'><BsFillArrowRightSquareFill/></span>
            </div>

            <img className="w-100 rounded-2" src={data.post.coverPhoto.url} alt={data.post.carName} />

            <div className='d-flex align-items-center py-5 '>
              <img style={{width:"60px",marginRight:"10px"}} src={data.post.company.avatar.url} alt="" />
              <div>
                <h5 style={{fontFamily:"semiBoldItalic"}}>{data.post.company.name}</h5>
                <p className='mb-0'>{data.post.company.country}</p>
              </div>
            </div>

            <div>
              <h2 style={{fontFamily:"libraBold"}}>{data.post.carName}</h2>
              <div dangerouslySetInnerHTML ={{__html:sanitizeHtml(data.post.content.html)}}></div>
            </div>
            
            <CommentForm slug={params.slug}/>
            <Comments slug={params.slug}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetailes
