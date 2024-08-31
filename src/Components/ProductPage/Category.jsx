import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchProduct } from '../store/productSlice';

const categoryList = [
  "All",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
];

const Category = () => {
  const dispatch = useDispatch();

  return (
    <ul className='flex flex-col items-center font-semibold text-xl h-full '>
      {categoryList.map((list, index) => (
        <li key={index}>
          <button
            className='py-8 border-b  text-amber-400'
            onClick={() => dispatch(fetchProduct(list))}
          >
            {list[0].toUpperCase() + list.slice(1)}
          </button>
          <hr className=''/>
        </li>
      ))}
    </ul>
  );
};

export default Category;