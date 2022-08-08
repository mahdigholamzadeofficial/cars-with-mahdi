import React from 'react'

///////////////////components
import Companies from '../companies/companies/Companies'
import Posts from "../posts/Posts"

const HomePage = () => {

  return (
    <div className='container' style={{minHeight:"100vh"}}>
      <div className="row my-5 g-4 justify-content-between">

        <div className="col-md-12 col-lg-3">
          <h3 className="text-light" >Companies</h3>
          <Companies/>
        </div>

        <div className="col-md-12 col-lg-9 ">
          <h3 className="text-light">Posts</h3>
          <Posts/>
        </div>

      </div>
    </div>
  )
}

export default HomePage
