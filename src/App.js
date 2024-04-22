import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './pages/ContactUs';
import NavBar from './components/Header/NavBar';
import Index from './pages/Index';
import Login from './pages/Login';

export default function App() {

  // #####################################################
  // eslint-disable-next-line
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial state based on user preference
    setIsDarkMode(prefersDarkMode);

    // Listen for changes in the user's color scheme preference
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const handleColorSchemeChange = (e) => setIsDarkMode(e.matches);

    mediaQueryList.addEventListener('change', handleColorSchemeChange);

    // Clean up the event listener when the component unmounts
    return () => {
      mediaQueryList.removeEventListener('change', handleColorSchemeChange);
    };
  }, []);

  // #####################################################

  return (
    // <div className={isDarkMode ? 'bg-purple-950' : 'bg-[#e4e8f0]'}>
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="" element={<Index />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="LogIn" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
