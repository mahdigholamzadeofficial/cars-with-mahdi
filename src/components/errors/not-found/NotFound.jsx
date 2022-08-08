import React from 'react'
import styles from "./notFound.module.css"
import { useNavigate } from 'react-router-dom'
const NotFound =()=> {
  
  const navigate = useNavigate();

  return (
    <div className={styles.notFound}>
      <button onClick={()=>navigate("/")}>Go Home</button>
    </div>
  )
}
export default NotFound;