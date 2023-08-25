import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink to='/'>
        <span className='navbar-brand'>NetCommerce</span>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
        <li className="nav-item">
            <NavLink className='nav-link' to='cart'>Cart</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
