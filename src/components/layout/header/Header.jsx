import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./header.module.css"

const Header = () => {

  return (
    <nav className={`${styles.navbar}`}>
      <div className='container'>
        <Link to="/">Cars With Mahdi</Link>
      </div>
    </nav>
  )
}

export default Header
