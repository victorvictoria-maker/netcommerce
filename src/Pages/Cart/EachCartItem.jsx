import { useContext } from 'react';
import { StoreContext } from '../../Contexts/StoreContext';

export const EachCartItem = (props) => {
    const { product, cartItems } = props;
    const eachProductTotal = product.price * cartItems[product.id];

    const { removeFromCart, addOneToProduct, removeOneFromProduct } = useContext(StoreContext);
  return (
    // <div className='mb-4 each-product pt-4 pb-4 text-center'>
      // <p>a</p>
    //    <img src={product.image} alt={product.title} height='200' width='200' className="mb-3" />
    //       <div className="card-body">
    //           <p className="category">{product.category}</p>
    //           <p className="title">{product.title}</p>
    //           <p className="price">
    //             ${eachProductTotal}
    //           </p>
    //       </div>
    //      {product.title}
    //     <p>{product.description}</p>
    //     <p>{eachProductTotal}</p>
    //     <p>{cartItems[product?.id]}</p> 
    //      <button className='btn btn-danger' onClick={() => removeFromCart(product.id)}>X</button> 
    // // </div>

    

    <tr className='cart-row pt-2 pb-2'>
    {/* <h3>{product.title}</h3> */}
    <td onClick={() => removeFromCart(product.id)} className='delete'>X</td>
    <td>
      <img src={product.image} alt={product.title} width='50' height='50'/>
    </td>
    <td>
      <p className='title'>{product.title}</p>
      <p className='price fw-bold'>${product.price}</p>
    </td>
    <td className='addToCart'>
      <button className='btn btn-sm btn-md-lg' onClick={() => addOneToProduct(product.id)}>+</button>
      <span className='ms-1 me-1 fw-bold'>{cartItems[product.id]}</span>
      <button className='btn btn-sm btn-md-lg' onClick={() => removeOneFromProduct(product.id)}>-</button>
    </td>
    <td className='totalPrice fw-bold'>${eachProductTotal.toFixed(2)}</td>                   
  </tr>
  )
}
