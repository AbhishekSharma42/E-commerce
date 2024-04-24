import React from 'react'
import { FaBorderAll } from "react-icons/fa";

function CatagrieTitle() {
    return (
        <>
            <div className='flex gap-5 items-center pl-5 py-2'>
                <div className='text-red-600'><FaBorderAll size={30} /></div>
                <p className='text-3xl font-bold'>Top Categories</p>
            </div>
        </>
    )
}

export default CatagrieTitle