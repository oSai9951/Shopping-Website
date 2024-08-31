import React from 'react';
import menImage from "./images/men.png"
import womenImage from "./images/women.png"
import electronicImage from "./images/electronic.jpeg"
import jewelleryImage from "./images/jewellery.png"
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProduct } from '../store/productSlice';
const Category = () => {
const dispatch = useDispatch()

  const homeCategoryList = [
    ["Electronics", electronicImage, "electronics" ],
    ["Jewelleries", jewelleryImage, "jewelery" ],
    ["Men's clothings", menImage,  "men's clothing"],
    ["Women's clothings", womenImage, "women's clothing"],
  ];

  function handleDispatch(item){
  
    dispatch(fetchProduct(item))
  }
  return (
    <>
      <h1 className='mx-auto w-[70%] font-bold  text-center mt-6 
      xl:text-4xl lg:text-3xl min-[460px]:text-2xl
     '>Collections we have...</h1>

      <div className="container grid md:grid-cols-2 
      mx-auto mt-6 
      min-[460px]:gap-5 
      
       bg-slate-200 p-3 rounded-md
     
     min-[460px]:grid-cols-1 
     ">
        {homeCategoryList.map((item) => {
          return (
            <div
              key={item[0]}
              className="flex-col justify-center items-center 
              lg:h-[300px]  
              mx-auto ">
              <h3 className='sm:text-2xl min-[460px]:xl text-center font-medium '>{item[0]}</h3>
<Link to="/products">

<img src={item[1]} className='lg:w-[500px] lg:h-[250px] rounded-lg shadow-lg border border-stone-700 hover:opacity-80   hover:scale-95 transition duration-300 ease-in-out
 md:gap-3
min-[460px]:w-[400px]
' onClick={()=>{handleDispatch(item[2])}}/>
</Link>
              </div>
        )})}
            </div>
    </>)
  
}

      export default Category;

