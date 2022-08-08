import React from 'react'
import styles from "./postCard.module.css"
import { Link } from 'react-router-dom';

const PostCard = ({data}) => {

  return (
    <div className={`col-lg-5 col-md-6 col-xxl-4 p-2 ${styles.postCard}`}>

        <div className="d-flex justify-content-start align-items-center py-3">
            <img style={{width:"50px" ,height:'50px',marginRight:"5px"}} src={data.company.avatar.url} alt="" />
            <h5 className='text-light'>{data.company.name}</h5>
        </div>
        
        <div className={styles.postCardDetail}>
          <img  src={data.coverPhoto.url} alt="" />
          <div>
              <h4>{data.carName}</h4>
              <Link to={`/posts/${data.slug}`}>Read..</Link>
          </div>
        </div>

    </div>
  )
}

export default PostCard
