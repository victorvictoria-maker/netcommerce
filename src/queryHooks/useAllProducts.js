import Axios from "axios";
import { useQuery } from "react-query";
// import { useContext } from 'react';
// import { StoreContext } from '../Contexts/StoreContext.js';

const getAllProducts = () => {
    return Axios.get('https://fakestoreapi.com/products').then((res) => {
        // https://dummyjson.com/products
        // return res.data.products;
        // console.log(res.data);
        return res.data; 
    });
};

export const useAllProductData = (onSuccess) => {
    return useQuery(['all-products-query'], getAllProducts, {
        onSuccess,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });
};