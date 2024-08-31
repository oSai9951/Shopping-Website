import React from 'react'
import { BsCartXFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { fetchProduct } from '../store/productSlice';
const Nav = () => {
    const cartTotal = useSelector(state=>state.cart.cart)
const dispatch = useDispatch()

    return (<>
        <div className='bg-black py-4 px-4  md:text-2xl min-[460px]:text-lg'>
        <div className='flex justify-normal w-[90%] mx-auto items-center  max-[800px]:flex-col
        max-[800px]:justify-center
        '>
            <h1 className='font-playwrite md:text-4xl text-yellow-500 min-[460px]:text-2xl'>Shop Sphere</h1>
            <div className='flex gap-[60px] text-white ml-auto
            max-[800px]:ml-0 max-[800px]: mt-4'>
                <Link to="/"
                
                >Home</Link>
                <Link  to="/products"
                ><button onClick={()=> dispatch(fetchProduct(" "))}>All Products</button></Link>
            </div>
            <div className='flex items-center border p-2 rounded-xl md:w-[60px] min-[460px]:w-[50px] min-[460px]:h-[40px] ml-auto'>
             <Link className='' to="/cart"><BsCartXFill className='text-white'/></Link>   
                
                {cartTotal.length ? <span className='p-1 text-sm text-red-800 font-bold' >{cartTotal.length}</span> : <span className='p-1 text-sm text-red-800 font-bold' >0</span>}
            </div>
        </div>
   </div> </>)
}

export default Nav