import React from 'react'

function FlaseDeal(props) {
    return (
        <>
            <div className='bg-white bg h-60 m-1 shadow-lg rounded-md md:h-[30rem]'>
                {/* product thumlain */}
                <div className='flex h-[80%]'>
                    <img className='rounded-t-md w-full' src={props.thum} alt="" />
                </div>
                {/* Product title */}
                <div className='font-normal pl-2 capitalize overflow-ellipsis whitespace-nowrap overflow-hidden'>
                   {props.titles}
                </div>
                {/* product price */}
                <div className='font-normal pl-2 capitalize text-lg'>
                    <del className='text-red-400 '>&#8377;{props.lessPrice}</del><span className='px-2 text-base text-blue-500'>&#8377;{props.price}</span>
                </div>
            </div>
        </>
    )
}

export default FlaseDeal