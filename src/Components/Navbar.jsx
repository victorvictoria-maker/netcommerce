import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { StoreContext } from '../Contexts/StoreContext';
import { useAllProductData} from "../queryHooks/useAllProducts";

export const Navbar = () => {

  const [searchItem, setSearchItem] = useState('');
  const {allProduct, setAllProducts} = useContext(StoreContext);

  const {data} = useAllProductData();

  const searchProducts = (e) => {
    const searchedWord = e.target.value.toLowerCase();
    setSearchItem(searchedWord);

    let result;
    if(searchedWord.length > 0) {
      result = allProduct.filter((product) => {
        return product.title.toLowerCase().includes(searchItem);
      });
      setAllProducts(result);
    } else {
      setAllProducts(data);
    };
  };


  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <span className='navbar-brand ms-lg-5 me-lg-5'>
    <NavLink to='/' className='brand-name me-5' style={{ textDecoration: 'none', color: '#6667ab' }}>
          NetCommerce
    </NavLink>
        </span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto ms-lg-5 mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink className='nav-link' to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='products'>Shop</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className='nav-link' to='about'>About</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className='nav-link' to='contact'>Contact</NavLink>
        </li>
      </ul>
      <div className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={searchProducts}/>
        {/* <button className="btn btn-outline-danger" type="submit">Search</button>  */}
        {/* <span>come</span> */}
      </div>
      <span className='ms-3 me-lg-5'>
          <Link to='cart' className='cart'><AiOutlineShoppingCart size='40'/></Link>
      </span>
    </div>
  </div>
</nav>
  )
}
