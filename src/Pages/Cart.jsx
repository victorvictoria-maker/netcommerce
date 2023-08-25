import { useContext } from 'react';
import { StoreContext } from '../Contexts/StoreContext.js';

export const Cart = () => {

    const { cartItems } = useContext(StoreContext);
    console.log(cartItems);

  return (
    <div>Cart</div>
  )
}
