import { useContext } from 'react';
import { StoreContext } from '../Contexts/StoreContext';

export const EachCartItem = (props) => {
    const { product, cartItems } = props;
    const eachProductTotal = product.price * cartItems[product.id];

    const { removeFromCart } = useContext(StoreContext);
  return (
    <div>
        {product.title}
        <p>{product.description}</p>
        <p>{eachProductTotal}</p>
        <p>{cartItems[product?.id]}</p>
        <button className='btn btn-danger' onClick={() => removeFromCart(product.id)}>X</button>
    </div>
  )
}
