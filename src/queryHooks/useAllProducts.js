import Axios from "axios";
import { useQuery } from "react-query";
// import { useContext } from 'react';
// import { StoreContext } from '../Contexts/StoreContext.js';

const getAllProducts = () => {
    return Axios.get('https://dummyjson.com/products').then((res) => {
        return res.data.products; 
    });
};

export const useAllProductData = (onSuccess) => {
    return useQuery(['all-products-query'], getAllProducts, {
        onSuccess,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });
};