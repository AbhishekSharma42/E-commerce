import React from 'react'

function FlaseDeal() {
    return (
        <>
            <div className='bg-white h-fit m-1 shadow-lg rounded-md'>
                {/* product thumlain */}
                <div className='flex items-center h-[90%] '>
                    <img src="https://images.meesho.com/images/products/75970557/6kmep_512.webp" alt="" />
                </div>
                {/* Product title */}
                <div className='font-normal pl-2 capitalize overflow-ellipsis whitespace-nowrap overflow-hidden'>
                    Man watch
                </div>
                {/* product price */}
                <div className='font-normal pl-2 capitalize text-lg'>
                    &#8377;<del>556</del><span className='px-2'>&#8377;500</span>
                </div>
            </div>
        </>
    )
}

export default FlaseDeal