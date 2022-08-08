import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/helpers/ScrollToTop'
//////////////Components
import HomePage from './components/home/HomePage'
import Layout from './components/layout/Layout'
import CompaniesDetails from './components/companies/companiesDetails/CompaniesDetails'
import PostDetailes from './components/posts/postDetailes/PostDetailes'
import NotFound from './components/errors/not-found/NotFound'

const App = () => {
  return (
    <Layout>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/posts/:slug" element={<PostDetailes/>}/>
        <Route path="/companies/:slug" element={<CompaniesDetails/>}/>
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      
    </Layout>
  )
}

export default App
