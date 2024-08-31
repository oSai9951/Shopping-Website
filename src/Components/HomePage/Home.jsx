import React from 'react'

import Footer from './Footer'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const Home = () => {

  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
    <Nav/>
     <Outlet/>
    <Footer/>
    </div>
  )
}

export default Home