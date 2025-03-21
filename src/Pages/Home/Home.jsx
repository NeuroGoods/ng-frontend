import React from 'react'
import Footer from '../../components/ui/Footer/Footer'
import CategoryNav from '../../components/ui/CategoryNav/CategoryNav'
import Input from '../../components/ui/Input/Input'
import ProductCarousel from '../../components/product/ProductCarousel/ProductCarousel'
import styles from './Home.module.css'
import ProductGrid from '../../components/product/ProductGrid/ProductGrid'


const Home = () => {
  return (
    <> 
   
    <Input variation="search"/>
    <ProductCarousel/>
    <CategoryNav/>
    <ProductGrid limit={4}/>
    
    <Footer/>
    </> 
  )
}

export default Home
