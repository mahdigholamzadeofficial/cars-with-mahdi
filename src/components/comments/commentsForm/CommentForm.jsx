import React, { useState } from 'react'
import ServerError from '../../errors/server-error/ServerError'
import styles from "./commentsForm.module.css"

///////////////////Graphql
import { useMutation } from '@apollo/client'
import { SEND_POST } from '../../../graphql/mutations'

///////////////////react-toastify
import { toast,ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const CommentForm = ({slug}) => {

  ///////////////////state of sent message
  const [sent,setSent] = useState(false)

  ///////////////////States of Comments
  const [comment,setComment] = useState({
    name:"",
    email:"",
    comment:"",

  })

  /////////////////////setStates of Comment
  const changeHandler = (event) =>{
    setComment({...comment,[event.target.name]:event.target.value})
  }

  /////////////////////Mutation
  const [sendComment ,{data,loading,error}] = useMutation(SEND_POST,{
    variables:{
      name:comment.name,
      email:comment.email,
      text:comment.comment,
      slug:slug
    }
  })

  /////////////////////clickHandler(Data validation for sending comments)
  const clickHandler = () =>{
    if(comment.name && comment.email && comment.comment){
      sendComment()
      setSent(true)

    }else{
      toast.error("Invalid Data!" ,{position:"bottom-right"})
    }
  }

  /////////////////////success meaage for comment that has sent!
  if(data && sent){
    toast.success("comment sent!" ,{position:"top-center"})
    setSent(false)
  }
  ///////////////////// in case that we faced some error!
  if(error) return <ServerError/>
  return (
    <div className="container p-3 rounded-2" style={{backgroundColor:"var(--primary1"}}>
        <h2 className='p-3'>Comments</h2>
        <div className="row justify-content-evenly">
          <div className="col-md-6 ">
              <input className={`${comment.name ?  styles.active : styles.inputs}`} 
                placeholder='Name'
                type="text"
                name= "name"
                value={comment.name}
                onChange={changeHandler}
              />
          </div>
          <div className="col-md-6">
              <input className={`${comment.email ?  styles.active : styles.inputs}`}
                placeholder='Email'
                type="email"
                name= "email"
                value={comment.email} 
                onChange={changeHandler}
              />
          </div>

        </div>
        <div className="row justify-content-center">
        <div className="col-md-12 ">
              <textarea className={`${comment.comment ?  styles.active : styles.inputs}`} 
                name="comment"
                cols="30"
                rows="10"
                onChange={changeHandler}
                value={comment.comment}>
              </textarea>
          </div>
          <div className="col-md-12">
            {loading ? <button disabled onClick={clickHandler} className={styles.button}>Sending..</button> : <button onClick={clickHandler} className={styles.button}>Send</button>}
          </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default CommentForm
