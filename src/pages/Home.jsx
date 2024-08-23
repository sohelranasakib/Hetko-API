import React from 'react'
import Banner from '../components/Banner'
import FeaturedProduct from '../components/FeaturedProduct'
import LeatestP from '../components/LeatestP'
import Shopex from '../components/Shopex'
import Trending from '../components/Trending'
import TopCatagoris from '../components/TopCatagoris'
import Discount from '../components/Discount'
import LetestBlog from '../components/LetestBlog'


const Home = () => {
  return (
    <>
    
    <Banner/>
    <FeaturedProduct/>
    <LeatestP/>
    <Shopex/>
    <Trending/>
    <TopCatagoris/>
    <Discount/>
    <LetestBlog/>
    
    </>
  )
}

export default Home