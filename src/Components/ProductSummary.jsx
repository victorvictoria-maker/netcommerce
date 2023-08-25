import { Link } from "react-router-dom";
import { useContext } from 'react';
import { StoreContext } from '../Contexts/StoreContext.js';

export const ProductSummary = (props) => {
    const {data} = props;
    const {addToCart} = useContext(StoreContext);

  return (
    <div className="card mb-4">
        <Link to={data.id.toString()}>
          <img src={data.images[0]} alt={data.title} height='320'/>
          <div className="crad-body">
              <span>{data.title}</span>
              <span>${data.price}</span>
          </div>
        </Link>
        <button className="btn btn-success" onClick={() => addToCart(data.id)}>Add to cart</button>
    </div>
  )
}
