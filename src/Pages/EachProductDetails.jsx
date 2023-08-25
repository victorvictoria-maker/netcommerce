import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetEachProductDetails } from '../queryHooks/useEachProductDetail';
import { useContext } from 'react';
import { StoreContext } from '../Contexts/StoreContext';

export const EachProductDetails = () => {

  const {id} = useParams();
  const {data:thisProduct} = useGetEachProductDetails(parseInt(id));
  // console.log(thisProduct);

  const { addToCart } = useContext(StoreContext);

  return (
    <div>
        <div>
          EachProductDetails
          <p>{thisProduct?.id}</p>
           <img src={thisProduct?.thumbnail} alt={thisProduct?.title}/>
          <h2>{thisProduct?.title}</h2>
          <p>{thisProduct?.description}</p> 
          <p>{thisProduct?.thumbnail}</p>
          <button className='btn btn-success' onClick={() => addToCart(thisProduct?.id)}>Add to Cart</button>
        </div>
    </div>
  )
}
