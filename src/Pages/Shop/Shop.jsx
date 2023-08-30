import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../Contexts/StoreContext.js';
import { ProductSummary } from "../../Components/ProductSummary.jsx";

export const Shop = () => {

  const { allProduct, isLoading, isFetching, isError, error,} = useContext(StoreContext);
  // const [loadingData, setLoadingData] = useState(false);

  // useEffect(() => {
    // if(isLoading) {
    //   // console.log('Loading');
    //   setLoadingData(true);
    //   console.log(loadingData, 'loading');
    // };

    // if(!isLoading) {
    //   setLoadingData(false);
    //   console.log(loadingData,'done loading');
    // }


    // } else {
    //   setLoadingData(false);
    //   console.log(loadingData, 'done loading');
    // };
  // }, []);

  // if(isLoading) {
    // console.log('Products loading');
    // setLoadingData(true);
    // console.log(loadingData);
    // return <div className="d-flex justify-content-center align-items-center vh-100 vw-100 position-fixed top-0 start-0 bg-white opacity-75">
    //     <div className="spinner-border text-primary" role="status">
    //       <span className="visually-hidden">Loading...</span>
    //     </div>
    //   </div>
  // } else {
    // setLoadingData(false);
    // console.log(loadingData);
  // };

  // if(isFetching) {
  //   console.log('Products fetching');
  // } else {
  //   console.log('Products are already fetched');
  // };

  if(isError) {
    console.log(error.message);
  };
  // console.log(allProduct);

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
