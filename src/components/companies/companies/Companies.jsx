import React from 'react'

///////////////////Graphql
import { useQuery } from "@apollo/client"
import { GET_COMPANIES } from '../../../graphql/queries'

///////////////////components
import CompaniesCard from "../companiesCard/CompaniesCard"
import Loader from '../../loader/Loader'

const Companies = () => {
  
  ///////////////////Query
  const {loading,data} = useQuery(GET_COMPANIES)

  if(loading)return <Loader/>
  return (
    <div style={{backgroundColor:"#3d2b8e",position:"sticky",top:"63px"}}>
      {data && data.companies.map(item=> <CompaniesCard key={item.id} data = {item}/>)}
    </div>
  )
}

export default Companies
