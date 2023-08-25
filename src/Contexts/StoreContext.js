import { createContext, useState, useEffect } from "react";
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
    const [productsFromLS, setProductsFromLS] =useState([]);
    
    const [cartItems, setCartItems] = useState(defaultCart());
    
    const storeAllProductsToStorage = () => {
        if(allProducts.length === 0 && allStoreProducts !== undefined) {
            setAllProducts(allStoreProducts);
        };

        // save to local storage
        if(localStorage.getItem('netcommerceproducts') === null) {
            localStorage.setItem('netcommerceproducts', []);
        };

        localStorage.setItem('netcommerceproducts', JSON.stringify(allProducts));

    };
    storeAllProductsToStorage();


    useEffect(() => {
        const allProductsFromLocalStorage = JSON.parse(localStorage.getItem('netcommerceproducts'));
        if(allProductsFromLocalStorage.length > 0) {
            setProductsFromLS(allProductsFromLocalStorage);
        };
      }, [allProducts]);


    const addToCart = (id) => {
        setCartItems((prev) => {
            return {...prev, [id]: prev[id]+1};
        });
    }; 



    const storeContextValue = {productsFromLS, cartItems, addToCart};

    return <StoreContext.Provider value={storeContextValue}>{props.children}</StoreContext.Provider>;
}; 