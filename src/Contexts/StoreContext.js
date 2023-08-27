import { createContext, useEffect, useState} from "react";
import { useAllProductData} from "../queryHooks/useAllProducts";

export const StoreContext = createContext();

const defaultCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("netcommercecart"));
    if(storedCart) {
        return storedCart;
    } else {
        const cart = {};
        for (let index = 1; index <= 30; index++) {
            cart[index] = 0; 
        };
        return cart;
    };
};

// defaultCart();

export const StoreContextProvider = (props) => {
    const [allProduct, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState(defaultCart);

    const onSuccess = (data) => {
        // const storedData = JSON.parse(localStorage.getItem('netcommerceproducts'));
        // if(storedData.length > 0) {
        //     setAllProducts(storedData);
        // } else {
        //     setAllProducts(data);
        // };
        setAllProducts(data);
    };

    useAllProductData(onSuccess);
    // console.log(allProduct);

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



    // useEffect(() => {
    //     const storedData = localStorage.getItem('netcommerceproducts');
    //     if(storedData) {
    //         console.log('db');
    //         // setAllProducts(JSON.parse(storedData));
    //     //     return;
    //     };
    //     console.log('hi');
    //     localStorage.setItem('netcommerceproducts', JSON.stringify(allProduct));
    // }, [allProduct]);

    // useEffect(() => {
    //     const storedData = JSON.parse(localStorage.getItem('netcommerceproducts'));
    //     if(storedData) {
    //         setAllProducts(storedData);
    //     };
    //     // console.log(storedData);
    //     // console.log(allProduct);
    // }, []);
  

    const addToCart = (id) => {
        setCartItems((prev) => {
            return {...prev, [id]: prev[id]+1};
        });
    }; 

    const findTotalCartCost = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                // console.log(cartItems[item]);
                let itemInfo = allProduct.find((product) => product.id === Number(item));
                // console.log(itemInfo?.price);
        //         // console.log(itemInfo.price);
                totalAmount += cartItems[item] * itemInfo?.price;
            };
        };
        // return totalAmount;
        return totalAmount;
    };
    // console.log(cartItems);

    const removeFromCart = (productId) => {
        console.log(productId);
        setCartItems((prev) => {
            return {...prev, [productId]: 0};
        }); 
    };

    const storeContextValue = {
        allProduct, 
        cartItems, 
        addToCart, 
        findTotalCartCost, 
        removeFromCart
    };

    return  <StoreContext.Provider value={storeContextValue}>
                {props.children}
            </StoreContext.Provider>;
}; 


