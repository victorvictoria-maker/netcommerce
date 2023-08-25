import { createContext, useState } from "react";
import { useAllProductData} from "../queryHooks/useAllProducts";


export const StoreContext = createContext(null);


const defaultCart = () => {
    const cart = {};
    for (let index = 1; index <= 30; index++) {
        cart[index] = 0; 
    };
    return cart;
};
defaultCart();

export const StoreContextProvider = (props) => {
    const {data:allStoreProducts} = useAllProductData();
    const [allProducts, setAllProducts] = useState([]);
    
    const [cartItems, setCartItems] = useState(defaultCart());
    
    const getAllProducts = () => {
        if(allProducts.length === 0 && allStoreProducts !== undefined) {
            setAllProducts(allStoreProducts);
        };
    };
    getAllProducts();


    const addToCart = (id) => {
        setCartItems((prev) => {
            return {...prev, [id]: prev[id]+1};
        });
    }; 



    const storeContextValue = {allProducts, cartItems, addToCart};

    return <StoreContext.Provider value={storeContextValue}>{props.children}</StoreContext.Provider>;
}; 