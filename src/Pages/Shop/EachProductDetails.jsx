import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetEachProductDetails } from '../../queryHooks/useEachProductDetail';
import { useContext } from 'react';
import { StoreContext } from '../../Contexts/StoreContext';

export const EachProductDetails = () => {

  const {id} = useParams();
  const {data:thisProduct} = useGetEachProductDetails(parseInt(id));

  const { addToCart, cartItems } = useContext(StoreContext);
  // console.log(thisProduct);

  return (
    <div className='product-detail container-fluid'>
      <div className="row p-md-5 mt-5 mb-5">
        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center img">
           <img src={thisProduct?.image} alt={thisProduct?.title} height='300' width='300'/>
        </div>
        <div className="col-12 col-md-6 pt-5 text">
        <h2 className='title'>{thisProduct?.title}</h2>
          <p className='category'>{thisProduct?.category}</p>
          <p className='mb-4'>{thisProduct?.description}</p> 
          <p className='price mb-2'>${thisProduct?.price}</p>
          <button className='btn btn-danger rounded-pill' onClick={() => addToCart(thisProduct?.id)}>
            ADD TO CART {cartItems[thisProduct?.id] !== 0 && <span>({cartItems[thisProduct?.id]})</span>}
          </button>
        </div>
      </div>
    </div>
  )
}
