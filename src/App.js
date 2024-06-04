import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './pages/ContactUs';
import NavBar from './components/Header/NavBar';
import Index from './pages/Index';
import Login from './pages/Login';
import AppContext from './Utils/Context';
import ProductDetailCard from './pages/ProductDetailCard';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CustomDesign from './pages/CustomDesign'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <AppContext>
          <NavBar />
          <Routes>
            <Route path="" element={<Index />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="LogIn" element={<Login />} />
            <Route path="product/:id" element={<ProductDetailCard />} />
            <Route path="cart" element={<Cart />} />
            <Route path='customize' element={<CustomDesign />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </AppContext>
      </BrowserRouter>
    </div>
  );
}
