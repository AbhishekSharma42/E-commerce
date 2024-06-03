import React, { useEffect } from 'react'
import OffersDescount from '../components/OffersDescounts/OffersDescount';
import ProductsCard from '../components/ProductCards/ProductsCard';
import { FcFlashOn } from 'react-icons/fc'
import MainCatagre from '../components/CatagrresCard/MainCatagre';
import BigDiscountTitle from '../components/BigDiscount/BigDiscountTitle';

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
      <div>
        <MainCatagre />
      </div>
      <div>
        <BigDiscountTitle />
      </div>
    </>
  )
}

export default Index