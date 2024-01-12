import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './pages/ContactUs';
import NavBar from './components/Header/NavBar';
import Index from './pages/Index';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="" element={<Index/>} />
          <Route path="contact" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
