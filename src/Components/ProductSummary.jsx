import { Link } from "react-router-dom";
import { useContext } from 'react';
import { StoreContext } from '../Contexts/StoreContext.js';

export const ProductSummary = (props) => {
    const {data} = props;
    const {addToCart, cartItems} = useContext(StoreContext);
    // console.log(cartItems);

  return (
    <div className="mb-4 each-product pt-4 pb-4 text-center">
      <Link to={data.id.toString()} style={{ textDecoration: 'none' }}>
        <img src={data.image} alt={data.title} height='200' width='200' className="mb-3"/>
        <div className="card-body">
          <p className="category">{data.category}</p>
          <p className="title">{data.title}</p>
          <p className="price">${data.price}</p>
        </div>
      </Link>
      <button className="btn me-2 btn-danger" onClick={() => addToCart(data.id)}>
        ADD TO CART {cartItems[data.id] !== 0 && <span>({cartItems[data.id]})</span>}
      </button>
      <button className="btn ms-2 btn-danger">
        <Link className="details" to={data.id.toString()} style={{ textDecoration: 'none' }}>VIEW DETAILS</Link>
      </button>
    </div>
  )
}
