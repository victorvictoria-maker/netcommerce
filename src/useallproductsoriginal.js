import Axios from "axios";
import { useQuery } from "react-query";

export const useAllProductData = () => {
    const getAllProducts = () => {
        return Axios.get('https://dummyjson.com/products').then((res) => {
            // console.log(res.data);
            return res.data.products; 
          });
    };

    return useQuery(['all-products-query'], getAllProducts, {
        // onSuccess,
        // refetchOnWindowFocus: false
    });
};