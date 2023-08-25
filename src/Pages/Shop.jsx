import { useContext } from 'react';
import { StoreContext } from '../Contexts/StoreContext.js';
import { ProductSummary } from "../Components/ProductSummary";

export const Shop = () => {

  const { productsFromLS } = useContext(StoreContext);

  return (
    // <p>hi</p>
    <div className="container">
    <div className="row">
    {productsFromLS?.map((product, key) => {
        return (
          <div className="col-12 col-md-6 col-lg-4" key={product.id}>
            {/* <Link to={product.id.toString()}> */}
              <ProductSummary data={product}/>
            {/* </Link> */}
          </div>  
        );
      })}
    </div>
    </div>
  )
}
