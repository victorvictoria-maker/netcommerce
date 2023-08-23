// import { useState } from "react";
import { useAllProductData} from "../queryHooks/useAllProducts"
import { ProductSummary } from "../Components/ProductSummary";
import { Link } from "react-router-dom";

export const Shop = () => {
  
  const onSuccess = (allProducts) => {
    console.log(allProducts);
  };

  const {data:allProducts} = useAllProductData(onSuccess);
  // console.log(allProducts);
 

  return (
    // <p>hi</p>
    <div className="container">
    <div className="row">
      {allProducts?.map((product, key) => {
        return (
          <div className="col-12 col-md-6 col-lg-4" key={product.id}>
            <Link to={product.id.toString()}>
              <ProductSummary data={product}/>
            </Link>
          </div>  
        );
      })}
    </div>
    </div>
  )
}