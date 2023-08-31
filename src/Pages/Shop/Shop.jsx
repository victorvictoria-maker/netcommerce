import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../Contexts/StoreContext.js';
import { ProductSummary } from "../../Components/ProductSummary.jsx";

export const Shop = () => {

  const { allProduct, isLoading, isFetching, isError, error,} = useContext(StoreContext);
  const [loadingData, setLoadingData] = useState(isLoading);

  useEffect(() => {
    if (!isLoading || !isFetching) {
      setLoadingData(false);
    };
  }, []);

  if (isLoading || isFetching) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 vw-100 position-fixed top-0 start-0 bg-white opacity-95">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
    </div>
    );
  };


  if(isError) {
    console.log(error.message);
  };

  return (
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
