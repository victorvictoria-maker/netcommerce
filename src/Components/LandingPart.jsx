import shoppingimage from '../shopping.png';

export const LandingPart = () => {
  return (
    <div className='container landingpart'>
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className='heading mb-lg-4'>We bring good things to you.</h1>
          <p className='title mb-0'>Your One-Stop Shopping Destination!</p>
          <p className='fw-bold'>Explore.Discover.Shop</p>
          <p>Get ready for an unparalleled shopping experience that transcends the ordinary. At NetCommerce, we're more than just an online marketplace; we're a digital haven curated for the modern shopper. Step into a world where style, quality, and convenience converge to redefine the way you shop.</p>
        </div>
        <div className="col-12 col-md-6">
          <img src={shoppingimage} alt="shoppingimage" width='400' height='320'/>
        </div>
      </div>
    </div>
  )
}
