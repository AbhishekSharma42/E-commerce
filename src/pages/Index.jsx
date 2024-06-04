import React, { useEffect } from 'react'
import OffersDescount from '../components/OffersDescounts/OffersDescount';
import ProductsCard from '../components/ProductCards/ProductsCard';
import { FcFlashOn } from 'react-icons/fc'
import { TrandingCategoriesTitle } from '../components/Tranding/TrandingCategoriesTitle';
import TrandingCategiesCard from '../components/Tranding/TrandingCategiesCard';
import BestSellingTitle from '../components/BestSelling/BestSellingTitle';
import Carousel from '../components/BestSelling/Carousel';
import NewArrivalTitle from '../components/NewArrival/NewArrivalTitle';
import NewArrivalCarousel from '../components/NewArrival/NewArrivalCarousel';

function Index() {

  useEffect(() => {
    document.title = "YouWe Fashion"
  }, [])

  return (
    <>
      {/* Top Header productes card */}
      <div className=''>
        <OffersDescount />

      </div>

      {/* Flase deal productes cards*/}
      <span className='text-2xl font-bold font-sans capitalize p-2 flex items-center'><span className='text-yellow-800 border-none'><FcFlashOn size={35} /></span>Flash deals</span>
      <div>
        <ProductsCard />
      </div>

      {/* Bast Selling */}
      <BestSellingTitle />
      <div className='w-[80%] mx-auto my-5'>
        <Carousel />
      </div>
      {/* ################################################ */}

      {/* Trandding categories */}
      <div>
        <TrandingCategoriesTitle />
        <div className='w-[100%] md:w-[95%] xl:w-[90%] mx-auto mt-2 h-full my-5'>
          <div className='grid gap-2 md:gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6'>
            <TrandingCategiesCard thum="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Mobile-covers-1705054649.jpg" />
            <TrandingCategiesCard thum="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-men-1706512292.jpg" />
            <TrandingCategiesCard thum="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1704181405.jpg" />
            <TrandingCategiesCard thum="https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Oversized-T--shirts-1704270296-1706511259.webp" />
            <TrandingCategiesCard thum="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350--2--1706509179.jpg" />
            <TrandingCategiesCard thum="https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Cargos-1704270812-1706511406.webp" />
            <TrandingCategiesCard thum="https://images.bewakoof.com/t320/men-s-black-nasa-out-of-the-space-graphic-printed-oversized-t-shirt-519429-1717060305-1.jpg" />
            <TrandingCategiesCard thum="https://images.bewakoof.com/t640/men-s-blue-t-shirt-115-1705996233-1.jpg" />
            <TrandingCategiesCard thum="https://images.bewakoof.com/t320/iron-man-of-war-vest-avl-220651-1655748320-4.jpg" />
            <TrandingCategiesCard thum="https://images.bewakoof.com/t320/women-s-black-bears-in-the-city-graphic-printed-oversized-t-shirt-610867-1696418044-1.jpg" />
            <TrandingCategiesCard thum="https://images.bewakoof.com/t320/men-s-white-marvel-ironman-typography-oversized-t-shirt-519161-1715257833-1.jpg" />
            <TrandingCategiesCard thum="https://images.bewakoof.com/t320/women-s-black-friends-typography-boyfriend-t-shirt-234669-1715257520-1.jpg" />
          </div>
        </div>
        {/* ################################################ */}

      </div>

      {/*  */}
      <NewArrivalTitle />
      <div className='w-[100%] md:w-[95%] xl:w-[90%] mx-auto mt-2 h-full my-5'>
        <div className='grid gap-2 md:gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6'>
          
        </div>
      </div>
      {/* ################################################ */}
      <div className='w-[80%] mx-auto my-5'>
        <NewArrivalCarousel />
      </div>
    </>
  )
}

export default Index