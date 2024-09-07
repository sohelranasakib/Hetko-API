import React from 'react'
import Header from '../components/Header'
import Navber from '../components/Navber'
import Footer from '../components/Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import ToTop from './ToTop'

const Rootlayout = () => {
  return (
    <>
    <Header/>
    <Navber/>
    <Outlet/>
    <Footer/>
    <ToTop/>
    <ScrollRestoration/>
    </>
  )
}

export default Rootlayout