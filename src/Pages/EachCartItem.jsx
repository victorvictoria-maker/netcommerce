import React from 'react'

export const EachCartItem = (props) => {
    const { product, cartItems } = props;
    // console.log(props);
    const eachProductTotal = product.price * cartItems[product.id];
  return (
    <div>
        {product.title}
        <p>{product.description}</p>
        <p>{eachProductTotal}</p>
        <p>{cartItems[product?.id]}</p>
    </div>
  )
}
