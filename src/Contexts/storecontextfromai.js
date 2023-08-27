import { createContext, useEffect, useState } from "react";
import { useAllProductData } from "../queryHooks/useAllProducts";

export const StoreContext = createContext();

const defaultCart = () => {
  const cart = {};
  for (let index = 1; index <= 30; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(defaultCart());

  const { data: allProduct, isLoading } = useAllProductData();

  useEffect(() => {
    if (!isLoading && allProduct) {
      localStorage.setItem("netcommerceproducts", JSON.stringify(allProduct));
    }
  }, [allProduct, isLoading]);

  const addToCart = (id) => {
    setCartItems((prev) => {
      return { ...prev, [id]: prev[id] + 1 };
    });
  };

  const findTotalCartCost = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0 && allProduct) {
        let itemInfo = allProduct.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      return { ...prev, [productId]: 0 };
    });
  };

  const storeContextValue = {
    allProduct,
    cartItems,
    addToCart,
    findTotalCartCost,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={storeContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
