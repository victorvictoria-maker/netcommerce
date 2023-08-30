import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'

export const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
