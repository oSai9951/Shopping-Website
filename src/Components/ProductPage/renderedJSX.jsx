import React from 'react'
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const RenderedJSX = ({item}) => {

    const dispatch = useDispatch()
console.log(item)
    function handleCart(item){
      console.log("renderedJsx: ",item)
      dispatch(add({
        id: item.id,
         image: item.image,
         title: item.title,
         price: parseFloat(item.price.toFixed(2))*80,
         description: item.description,
         totalPrice:0,
         quantity : 1
     }))
    }
   
  return (
    <>
        <li key={item.id} className=' border w-[320px] bg-white mb-8'>
<img src={item.image} className='w-[300px] p-5' />
                 
<div className=''>
  <h2 className='font-roboto font-semibold text-center text-xl'>{item.title}</h2>
  <div className='flex flex-row justify-between m-3'>
    <p>Rs. { parseFloat(item.price.toFixed(2))*80}</p>
    <div>
      <p>Rating:<span className=''>{item.rating.rate}</span></p>
      <p className='mt-1'>Availability:<span className=''>{item.rating.count}</span></p>
    </div>
  </div>
  <div className='flex justify-around text-xl mb-3 font-Ubuntu font-semibold text-slate-200 '>
    <button className='border-[2.5px] p-2 bg-slate-600' onClick={()=>handleCart(item)}>Add to Cart
    </button>
    <button className='border-[2.5px] p-2 bg-slate-600'>
Details
    </button>
  </div>
</div>
</li>
    </>
  )
}

export default RenderedJSX