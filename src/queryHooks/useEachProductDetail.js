import { useQuery } from "react-query";
import Axios from "axios";


export const useGetEachProductDetails = (id) => {
    const getThisProduct = () => {
        return Axios.get(`https://dummyjson.com/products/${id}`)
                    .then((res) => {
                        // console.log(res.data);
                        return res.data;
                    });
    };

    return useQuery(['each-product-query'], getThisProduct);
};