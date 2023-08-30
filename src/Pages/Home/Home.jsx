import React from 'react'
import { LandingPart } from '../../Components/LandingPart'
import { FeaturedProducts } from '../../Components/FeaturedProducts'
import { AboutBrand } from '../../Components/AboutBrand'

export const Home = () => {
  return (
    <div>
        <LandingPart/>
        <AboutBrand/>
        {/* <div className='featuredproducts ms-5 me-5'> */}
        <FeaturedProducts/>
        {/* </div> */}
    </div>
  )
}
