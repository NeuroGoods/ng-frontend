import {useState} from 'react'
import CategoryNav from '../../components/ui/CategoryNav/CategoryNav'
import Input from '../../components/ui/Input/Input'
import ProductCarousel from '../../components/product/ProductCarousel/ProductCarousel'
import styles from './Home.module.css'
import ProductGrid from '../../components/product/ProductGrid/ProductGrid'
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";



const Home = () => {
  const [activeCategory, setActiveCategory] = useState(null); 
  return (
    <> 
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", padding: "0 2rem"}}>
    <FaSearch/>
    <Input variation="search"/>
    </div>
    <ProductCarousel/>
    <CategoryNav
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
    <ProductGrid limit={4} activeCategory={activeCategory}/>
    <Link to="/products" className={styles.seeAll}>Ver todos</Link>
    </> 
  )
}

export default Home
