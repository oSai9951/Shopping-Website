import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { add, remove, removeFromCart } from '../store/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartProduct = useSelector((state) => state.cart.cart);


  const totalAmount = useSelector((state) => state.cart.TotalAmount);

  const blankPage = (
    <div className='mx-auto my-auto w-[50%] text-center h-[200px] border-2 shadow-xl border-rose-700 content-center'>
      <h2 className='text-4xl font-playwrite font-semibold'>The Cart is Empty! </h2>
      <h3 className='text-2xl font-medium pt-2 text-slate-600 font-roboto'> Fill your cart with items... Enjoy your Shopping🛒 </h3>
      <p className='text-xl text-red-500 mb-3'>Click on these links to move back to your respective page</p>
     <div className='flex justify-around'> <Link to="/"><button className='border p-2 rounded-xl bg-blue-800 hover:scale-105 transition duration-100 ease-in hover:bg-black  text-white'>Home</button></Link>
      <Link to="/products"><button className='border p-2 rounded-xl bg-blue-800 hover:scale-105 transition duration-100 ease-in hover:bg-black  text-white'>Product</button></Link>
   </div> </div>
  )


  const dispatch = useDispatch()


  return (
    <>
      {cartProduct.length ? (<> {cartProduct.map((item) => {
        return (<div className=' bg-slate-300'>
          <ul>
            <li className='flex  w-[70%] mx-auto bg-white my-4 rounded-lg
            max-[1200px]:flex-col  max-[1200px]:justify-center  max-[1200px]:items-center
             max-[1050px]:w-[90%]
            ' key={item.id}>
              <div className='w-[40%] flex flex-col items-center'>
                <img src={item.image} className='w-[300px] p-5 ' />
                <div className='flex flex-row justify-center items-center gap-6 mb-4'>
                  <button className='hover:scale-125 transition ease-in-out delay-150'
                    onClick={() => dispatch(remove(item))}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className='text-xl font-bold text-red-600'>{item.quantity}</div>
                  <button className='hover:scale-125 transition ease-in-out delay-150'
                    onClick={() => dispatch(add(item))}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='w-[700px] mt-[30px] 
              max-[850px]:w-[500px]
              max-[600px]:w-[400px]'>
                <h2 className='font-bold text-2xl
                '>{item.title}</h2>
                <h3 className='font-medium text-lg mt-3'>{item.description}</h3>
                <h3 className='font-bold text-lg mt-[40px]'>Price:<span className='text-2xl ml-3'> {item.price} </span><span className='ml-4 text-2xl text-green-500'>+{item.totalPrice.toFixed(2)}</span></h3>

                <div className='mt-[20px]'>
                  <button onClick={() => dispatch(removeFromCart(item))}

                    className=' bg-black text-white p-2 rounded-lg h-[45px] mr-3
                     max-[1200px]:mb-5'>Remove</button>

                </div>
              </div>
            </li>
          </ul>
          
        </div>)
      })}
      
      <div className='flex justify-end items-center mx-auto w-full h-[90px] border-t-4 border-black '>
            <h3 className='text-2xl font-semibold mr-[10%]'>Total:-</h3>
            <div className='text-2xl font-semibold mr-[20%]'>Rs. {totalAmount.toFixed(2)}/-</div>
          </div> </>) : <> {blankPage} </>}


    </>
  )
}
export default Cart