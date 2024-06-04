import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const BestSallingCard = (props) => {
    return (
        <>
            <div className='cursor-pointer h-full w-full md:h-full md:w-48 rounded-md flex gap-5 hover:scale-105 transition-all z-10 duration-150'>
                <LazyLoadImage effect='blur' src={props.thum} />
            </div>
        </>
    )
}

export default BestSallingCard
