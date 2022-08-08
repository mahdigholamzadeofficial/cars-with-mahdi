import React from 'react'
import styles from "./serverError.module.css"
import {BsFillExclamationCircleFill} from "react-icons/bs"
const ServerError = () => {
  return (
    <div className={styles.errorContainer}>
      <span><BsFillExclamationCircleFill/></span>
      <h3 className='my-5'>Server error</h3>
      <p>An error occurred in the application and your page could not be served</p>
    </div>
  )
}

export default ServerError
