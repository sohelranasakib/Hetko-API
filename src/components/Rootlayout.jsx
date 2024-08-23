import React from 'react'
import Header from '../components/Header'
import Navber from '../components/Navber'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <>
    <Header/>
    <Navber/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Rootlayout