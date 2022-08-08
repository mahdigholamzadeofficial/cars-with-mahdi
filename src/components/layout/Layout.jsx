import React from 'react'

///////////////////Components
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = ({children}) => {
  
  return (
    <div style={{backgroundColor:"#1e0d5d"}}>

      <Header/>
        {children}
      <Footer/>

    </div>
  )
}

export default Layout
