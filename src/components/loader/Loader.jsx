import React from 'react'
import { Oval } from "react-loader-spinner";

const Loader = () => {
    return(
      <div style={{minHeight:"100vh"}} className='d-flex justify-content-center align-items-center'>
            <Oval height={100} width={100} color='#fff' ariaLabel='loading'/>
      </div>
      )
}

export default Loader
