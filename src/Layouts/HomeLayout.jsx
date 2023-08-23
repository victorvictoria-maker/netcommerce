import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Components/Navbar'

export const HomeLayout = () => {
  return (
    <div>
        <header>
            <Navbar/>
        </header>
        <main><Outlet/></main>
    </div>
  )
}
