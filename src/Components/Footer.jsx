import {NavLink} from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer mt-5 text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <NavLink to='/' className='brand-name me-5' style={{ textDecoration: 'none', color: '#6667ab', fontSize: '26px' }}>
              NetCommerce
            </NavLink>
            <ul className="list-unstyled">
              <li><NavLink  style={{ textDecoration: 'none', color: '#6667ab'}} to='/'>Home</NavLink></li>
              <li><NavLink style={{ textDecoration: 'none', color: '#6667ab'}} to='products'>Shop</NavLink></li>
              <li><NavLink style={{ textDecoration: 'none', color: '#6667ab'}} to='documentation'>Documentation</NavLink></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>
              <NavLink to='/' className='brand-name me-5' style={{ textDecoration: 'none', color: '#6667ab', fontSize: '26px' }}>
                Categories
              </NavLink>
            </h5>
            <ul className="list-unstyled">
              <li><NavLink style={{ textDecoration: 'none', color: '#6667ab'}} to='products'>Men's Clothing</NavLink></li>
              <li><NavLink style={{ textDecoration: 'none', color: '#6667ab'}} to='products'>Jewelry</NavLink></li>
              <li><NavLink style={{ textDecoration: 'none', color: '#6667ab'}} to='products'>Electronics</NavLink></li>
              <li><NavLink style={{ textDecoration: 'none', color: '#6667ab'}} to='products'>Women's Clothing</NavLink></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>
              <NavLink to='/' className='brand-name me-5' style={{ textDecoration: 'none', color: '#6667ab', fontSize: '26px' }}>
                Stay Connected
              </NavLink>
            </h5>
            <p style={{ color: '#6667ab'}}>Subscribe to our newsletter for updates on new products and promotions.</p>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" aria-describedby="subscribe-button"/>
                <button className="btn btn-danger" type="button" id="subscribe-button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-12">
            <p className="text-center" style={{ color: '#6667ab'}}>&copy; 2023 NetCommerce Store. <a href="https://www.linkedin.com/in/victoria-victor-b3174b227/">Developed by Victoria Victor</a>.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
