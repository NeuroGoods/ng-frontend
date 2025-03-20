import React from 'react'
import Footer from '../../components/ui/Footer/Footer'
import CategoryNav from '../../components/ui/CategoryNav/CategoryNav'
import Input from '../../components/ui/Input/Input'
import ProductCarousel from '../../components/product/ProductCarousel/ProductCarousel'
import ProductCard from '../../components/product/ProductCard/ProductCard'


const Home = () => {
  return (
    <> 
   
    <Input/>
    <ProductCarousel/>
    <CategoryNav/>
    
    <Footer/>
    </> 
  )
}

export default Home
