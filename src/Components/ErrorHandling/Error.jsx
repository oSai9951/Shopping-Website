import React from 'react'
import { Link } from 'react-router-dom'

const error = () => {
  return (
    <div className='content-center text-center'>
        <h1 className='text-4xl text-slate-950'>This page does not exist.</h1> 
        <h2 className='text-2xl text-slate-500'>Error 404!</h2>
        <Link to="/"><button className='border p-2 bg-red-500 font-semibold'>Home Page</button></Link>
    </div>
  )
}

export default error