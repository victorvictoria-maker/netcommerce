import { createContext, useEffect, useState} from "react";
import { useAllProductData} from "../queryHooks/useAllProducts";

export const StoreContext = createContext();

const defaultCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("netcommercecart"));
    if(storedCart) {
        return storedCart;
    } else {
        const cart = {};
        for (let index = 1; index <= 20; index++) {
            cart[index] = 0; 
        };
        return cart;
    };
};

export const StoreContextProvider = (props) => {
    const [allProduct, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState(defaultCart);

    const onSuccess = (data) => {
        setAllProducts(data);
    };

    useAllProductData(onSuccess);

    useEffect(() => {
        setAllProducts(allProduct);
    }, [allProduct]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("netcommercecart"));
        if (storedCart) {
            setCartItems(storedCart);
        };
    }, []);

    useEffect(() => {   
        localStorage.setItem('netcommercecart', JSON.stringify(cartItems));
    }, [cartItems]);

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
                totalAmount += cartItems[item] * itemInfo?.price;
            };
        };
        return totalAmount;
    };

    const findAmountOfItem = () => {
        let amountInCart = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                amountInCart++;
            };
        };
        return amountInCart;
    };

    const removeFromCart = (productId) => {
        setCartItems((prev) => {
            return {...prev, [productId]: 0};
        }); 
    };

    const addOneToProduct = (productId) => {
        setCartItems((prev) => {
            return {...prev, [productId]: prev[productId]+1};
        });
    };

    const removeOneFromProduct = (productId) => {
        setCartItems((prev) => {
            return {...prev, [productId]:prev[productId]-1};
        });
    };

    const storeContextValue = {
        allProduct, 
        setAllProducts,
        cartItems, 
        addToCart, 
        findTotalCartCost, 
        findAmountOfItem,
        removeFromCart,
        addOneToProduct,
        removeOneFromProduct
    };

    return  <StoreContext.Provider value={storeContextValue}>
                {props.children}
            </StoreContext.Provider>;
}; 


