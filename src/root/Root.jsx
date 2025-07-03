import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom' 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Root() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Outlet />
        <ScrollRestoration />
      </div>

      <Footer />
    </div>
  )
}

export default Root
