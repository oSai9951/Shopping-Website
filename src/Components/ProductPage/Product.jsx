import React, { useState } from 'react'
import ProductDetails from './ProductDetails'
import Category from "./Category"
import { useDispatch } from "react-redux"

import { searching } from '../store/productSlice'



const Product = () => {

  const dispatch = useDispatch()
  const [search, setSearch] = useState("")



  function handleChange(e) {
    setSearch(() => e.target.value);
    dispatch(searching(e.target.value));

  }


  return (
    <div className='flex bg-slate-900 min-h-screen'>
      <section className='w-[20%] p-[50px] border-4 '>
        <Category />

      </section>

      <main className=' w-full bg-slate-200'>
        <div className='h-[70px] bg-purple-700 flex justify-center items-center mb-9 border-white border-4'>

          <input type='text' value={search} placeholder="Type to search..." onChange={(e) => handleChange(e)}
            className='mx-auto w-[50%] h-9 rounded-lg text-center text-2xl border-2 border-zinc-950 '
          />

        </div>
        <div className='flex justify-center items-center'>
          <ProductDetails search={search} />
        </div>
      </main>
    </div>
  )
}

export default Product