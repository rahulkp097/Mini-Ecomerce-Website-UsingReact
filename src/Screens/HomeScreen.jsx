import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import ProductCards from '../components/ProductCards'
import Footer from '../components/Footer'
import CategoryList from '../components/CategoryList'

function HomeScreen() {
  return (
    <div className="lg:w-3/4 mx-auto "> 
    <Navbar />
    <div className="my-8 lg:my-12"></div> 
    <Banner />
    <div className="my-8 lg:my-12"></div> 
    <CategoryList/>
    <div className="my-8 lg:my-12"></div> 
    <ProductCards />
    <div className="my-8 lg:my-12"></div>
    <Footer />
  </div>
  )
}

export default HomeScreen