import "./App.css";
import {useEffect} from "react";
import Navbar from "./components/ui/Navbar/Navbar";
import Header from "./components/ui/Header/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Products from "./Pages/Products/Products";
import PublishProduct from "./Pages/PublishProduct/PublishProduct";
import Home from "./Pages/Home/Home";
import Favorites from "./Pages/Favorites/Favorites";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product-details" element={<ProductDetails />} />
                <Route path="/products" element={<Products />} />
                <Route path="/publish-product" element={<PublishProduct />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default App;
