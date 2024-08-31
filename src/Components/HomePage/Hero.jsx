import React from 'react';
import Category from './Category';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { fetchProduct } from '../store/productSlice';
const Hero = () => {
  const dispatch = useDispatch()
  return (<>
  <div className='bg-gradient-to-b from-red-400 to-red-50 '>
 <div className='mx-auto bg-banner  bg-cover w-[1200px] h-[700px]

 xl:w-[1000px] xl:h-[600px]
 lg:w-[800px] lg:h-[500px]
 md:w-[700px] md:h-[420px]
 sm:w-[600px]  sm:h-[350px]
 min-[460px]:w-[600px]  min-[460px]:h-[300px]
  '>
 <h1 className='text-5xl text-center font-playwrite font-semibold translate-x-[-50px] translate-y-[80px] h-[300px] w-[500px]
 max-[1000px]:text-4xl
 max-[900px]:text-3xl  max-[900px]:translate-x-[10px] max-[900px]:w-[300px]
  max-[600px]:text-2xl'>
 
 Discover Your World of Style, Tech, and Glamour.

</h1>
<Link to="/products" ><button className=" border-2 min-[1000px]:p-2 cursor-pointer font-semibold min-[1000px]:text-2xl min-[1000px]:translate-y-[40px] rounded-lg bg-amber-500 border-stone-950  
min-[800px]:translate-y-[-80px] min-[800px]:text-xl
min-[400px]:translate-y-[-90px] mmin-[400px]:text-lg  min-[400px]:p-0.5  min-[400px]:translate-x-[50px]" onClick={()=> dispatch(fetchProduct(" "))}  >
Products</button></Link>
 </div>
</div>
  <Category/>
  </>);
};

export default Hero;