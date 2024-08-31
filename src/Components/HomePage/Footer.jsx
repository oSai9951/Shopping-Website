import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProduct } from '../store/productSlice'
const Footer = () => {


const dispatch = useDispatch()

  return (
    <div className='bg-black text-white grid min-[800px]:grid-cols-3 min-h-[120px] items-center
    min-[400px]:grid-cols-1 min-[400px]:text-center '>
      <div>
<h1 className='font-playwrite text-4xl  ml-7 max-[800px]:mt-4'>Shop Sphere</h1>
      </div>
      <div className='ml-2 text-center flex min-[800px]:flex-row gap-4 min-[400px]:flex-col min-[400px]:mt-4'>
<Link to="/"><h3>Home</h3></Link>
<Link to="/products"><h3 onClick={()=> dispatch(fetchProduct(" "))}>Products</h3></Link>
<Link to="/about"><p>About</p></Link>
<Link to="/contact"><p>Contact</p></Link>
<p></p>
      </div>
      <div className='text-center max-[800px]:mb-4'>
      &copy; 2024 E-Commerce Project. All rights reserved!
      </div>
    </div>
  )
}

export default Footer