import React from 'react';
import { useSelector } from 'react-redux';

import RenderedJSX from './renderedJSX';

const ProductDetails = ({ search }) => {
  const productDetail = useSelector((state) => state.product.data);
  const searchDetail = useSelector((state) => state.product.search);
  const loading = useSelector((state) => state.product.isLoading);

  return (
    <>
      {loading ? (
        <h1 className='font-semibold text-2xl mx-auto mt-[10%] '>
          Loading <span>...</span>
        </h1>
      
      ) : (
        <ul className='grid grid-cols-3 gap-16 items-center xl:grid-cols-3 md:grid-cols-2 min-[460px]:grid-cols-1'>
          {search
            ? searchDetail.map((item) => (
                <RenderedJSX key={item.id} item={item} />
              ))
            : productDetail.map((item) => (
                <RenderedJSX key={item.id} item={item} />
              ))}
        </ul>
      )}
    </>
  );
};

export default ProductDetails;
