import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./CompaniesCard.module.css"

const CompaniesCard = ({data}) => {
  return (
    <div className={styles.companiesCard}>
      <Link to={`/companies/${data.slug}`}>
        <img src={data.avatar.url} alt="" />
        <h5>{data.name}</h5>
      </Link>
    </div>
  )
}

export default CompaniesCard
