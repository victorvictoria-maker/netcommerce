import { createContext, useEffect, useState} from "react";
import { useAllProductData} from "../queryHooks/useAllProducts";

export const StoreContext = createContext();

const defaultCart = () => {
    const cart = {};
    for (let index = 1; index <= 30; index++) {
        cart[index] = 0; 
    };
    return cart;
};
defaultCart();

export const StoreContextProvider = (props) => {
    const [allProduct, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState(defaultCart());
   
    const onSuccess = (data) => {
        setAllProducts(data);
    };

    useAllProductData(onSuccess);
    console.log(allProduct);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('netcommerceproducts'));
        if(storedData) {
            setAllProducts(storedData);
        };
    }, []);

    useEffect(() => {
        // alert('There are data now');
        localStorage.setItem('netcommerceproducts', JSON.stringify(allProduct));
    }, [allProduct]);
  

    const addToCart = (id) => {
        setCartItems((prev) => {
            return {...prev, [id]: prev[id]+1};
        });
    }; 

    const findTotalCartCost = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = allProduct.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            };
        };
        return totalAmount;
    };

    const storeContextValue = {allProduct, cartItems, addToCart, findTotalCartCost};

    return <StoreContext.Provider value={storeContextValue}>{props.children}</StoreContext.Provider>;
}; 