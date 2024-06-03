import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function FlaseDeal(props) {
    return (
        <>
            <div className='bg-white bg h-60 m-1 shadow-lg rounded-md md:h-[30rem]'>
                {/* product thumlain */}
                <div className='flex h-[80%] w-full rounded-md justify-center'>
                    <LazyLoadImage alt='' className='rounded-t-md h-[100%] w-full' effect='blur' src={props.thum} />
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