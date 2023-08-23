import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetEachProductDetails } from '../queryHooks/useEachProductDetail';

export const EachProductDetails = () => {

  const {id} = useParams();
  // console.log(id);
  const {data:thisProduct} = useGetEachProductDetails(parseInt(id));
  console.log(thisProduct);

  return (
    <div>
        <div>
          EachProductDetails
          <img src={thisProduct?.thumbnail} alt={thisProduct.title}/>
          <h2>{thisProduct?.title}</h2>
          <p>{thisProduct?.description}</p> 
          <p>{thisProduct?.thumbnail}</p>
        </div>
    </div>
  )
}
