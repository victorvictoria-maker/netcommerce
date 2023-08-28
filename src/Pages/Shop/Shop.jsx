import { useContext } from 'react';
import { StoreContext } from '../../Contexts/StoreContext.js';
import { ProductSummary } from "../../Components/ProductSummary.jsx";

export const Shop = () => {

  const { allProduct } = useContext(StoreContext);
  // console.log(allProduct);

  return (
    // <p>hi</p>
    <div className="container">
    <div className="row">
    {allProduct?.map((product, key) => {
        return (
          <div className="col-12 col-md-6 col-lg-4" key={product.id}>
            <ProductSummary data={product}/>
          </div>  
        );
      })}
    </div>
    </div>
  )
}
