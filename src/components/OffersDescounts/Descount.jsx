import React from 'react'

function Descount() {
    return (
        <>
            <div className='flex flex-col-reverse sm:grid sm:grid-flow-col'>
                <div className="left h-full md:py-0 md:justify-items-center md:flex md:flex-col md:gap-5 md:items-center md:justify-center">

                    <h1 className='text-3xl sm:text-3xl md:text-4xl xl:text-5xl font-bold py-2 font-serif capitalize  md:text-center'>50% Off For your first shopping</h1>

                    <p className='font-sans md:text-xl md:text-center'>Get GST invoice and save up to 18% on business purchases
                        Classic and premium design with rotating bezel Track your workouts on your wrist.</p>

                    <button className='bg-red-500 hover:bg-red-600 text-white font-semibold p-2 px-3 rounded-2xl my-3 text-lg capitalize'>visit collections</button>
                </div>
                <div className='right flex justify-center'>
                    <div className="sm:order-2 h-80 w-80 md:h-96 md:w-96 justify-center">
                        <img src="https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-classic-399241-sm-r895fzsainu-481181877?$2052_1641_PNG$" alt="img tag" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Descount