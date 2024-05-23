import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './pages/ContactUs';
import NavBar from './components/Header/NavBar';
import Index from './pages/Index';
import Login from './pages/Login';
import AppContext from './Utils/Context';
import ProductDetailCard from './pages/ProductDetailCard';
import PageNotFound from './pages/PageNotFound';

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
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AppContext>
      </BrowserRouter>
    </div>
  );
}
