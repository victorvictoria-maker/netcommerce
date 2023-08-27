import { useContext } from 'react';
import { StoreContext } from '../Contexts/StoreContext.js';
import { EachCartItem } from './EachCartItem.jsx';

export const Cart = () => {

    const { allProduct, cartItems, findTotalCartCost } = useContext(StoreContext);
    // , findTotalCartCost
    let totalCartAmount = findTotalCartCost();
    // let totalCartAmount = 0;
    // console.log(productsFromLS, cartItems);

  return (
    <div className='container-fluid'>
        <div className="row bg-primary">
            {allProduct.map((product, key) => {
                if(cartItems[product.id] !== 0) {
                return (
                    <div key={key} className='col-12 col-md-6 col-lg-4'>
                        <EachCartItem  
                            product={product} 
                            cartItems={cartItems}
                        />
                    </div>
                );
            };
        })}
        </div>
        <div className="row bg-success">
            {totalCartAmount > 0 ? <p>Total: ${totalCartAmount}</p> : <p>Your cart is empty</p>} 
        </div>
    </div>
  )
}
