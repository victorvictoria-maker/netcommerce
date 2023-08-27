import React, { useState } from 'react'

export const Admin = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const addProduct = (e) => {
        e.preventDefault();
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            title,
            price,
            description
            /* other product data */
            })
        })
        .then(res => res.json())
        .then(console.log);
        // console.log(res);
    };
    
  return (
    <div>
        <h1>Add Product</h1>
        <form>
            <input type="text" placeholder='title' onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder='price' onChange={(e) => setPrice(e.target.value)}/>
            <input type="text" placeholder='description' onChange={(e) => setDescription(e.target.value)}/>
            <button onClick={(e) => addProduct(e)}>Submit</button>
        </form>
    </div>
  )
}
