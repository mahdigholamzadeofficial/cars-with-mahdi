import React from 'react'
import { profile } from '../../helpers/functions'

///////////////////loader
import Loader from '../../loader/Loader'

///////////////////Graphql
import { useQuery } from '@apollo/client'
import { GET_COMMENTS } from '../../../graphql/queries'

const Comments = ({slug}) => {

  ///////////////////Query
  const {data,loading} = useQuery(GET_COMMENTS,{
    variables:{
      slug:slug
    }
  });

  if(loading)return <Loader/>
  return (
    <div className='container rounded-2 rounded-2 p-3 mt-4' style={{backgroundColor:"var(--primary1)"}}>
      <h4>Comments</h4>
      <div className="row justify-content-center">
        {data.comments.map(item=>(

          <div key={item.id} className='col-md-10 border-start border-2 border-light px-3 my-4'>
            <div className='d-flex align-items-center mb-3'>
              <span style={{marginRight:"5px",backgroundColor:"#fff",padding:"5px 10px" ,color:"#1e0d5d", borderRadius:"10px"}}>{profile(item.name)}</span>
              <h6 className='m-0'>{item.name} :</h6>
            </div>
            <p className='m-0'>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comments;
