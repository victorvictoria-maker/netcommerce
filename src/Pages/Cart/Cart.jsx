import { useContext } from 'react';
import { StoreContext } from '../../Contexts/StoreContext.js';
import { EachCartItem } from './EachCartItem.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { FeaturedProducts } from '../../Components/FeaturedProducts.jsx';

export const Cart = () => {

    const navigate = useNavigate();

    const { allProduct, cartItems, findTotalCartCost, findAmountOfItem } = useContext(StoreContext);

    let totalCartAmount = findTotalCartCost();
    let cartItemsAmount = findAmountOfItem();

  return (
    <div className='container'>
        <div className="row">
            <div className="heading mb-4">
                <h2>Your Cart</h2>
                {cartItemsAmount !== 0 &&
                    <h4>{cartItemsAmount > 1 ? <span>{cartItemsAmount} Items</span> : <span>{cartItemsAmount} Item</span>}</h4>
                }
            </div>
            <table className="table">
                <tbody>
                    {allProduct.map((product, key) => {
                        if(cartItems[product.id] !== 0) {
                            return (
                                <EachCartItem 
                                    key={key} 
                                    product={product} 
                                    cartItems={cartItems}
                                />
                            );
                        };
                    })}
                </tbody>
            </table>
        </div>
        <div className="row fw-bold">
            {
                totalCartAmount > 0 ? <p>Total Cost Of Item(s) In Cart: ${totalCartAmount.toFixed(2)}</p> : <p>Your cart is empty</p>
            }
          
            <p onClick={() => navigate('/products')}>
                <Link className='link'  style={{ textDecoration: 'none', color: '#cc2936' }}> <IoArrowBack/> Continue Shopping </Link>
            </p>
        </div>
        <div className="row mt-5 featuredproducts">
            <FeaturedProducts/>
        </div>
    </div>
  )
}
