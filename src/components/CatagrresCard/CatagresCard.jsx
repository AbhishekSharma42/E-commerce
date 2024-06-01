import React from 'react'

function CatagresCard() {
    return (
        <>
            <div className='md:grid md:grid-cols-3 flex flex-wrap md:flex-none justify-center md:my-5 md:p-2 p-3 mx-auto md:w-[90%] md:gap-5 gap-5'>

                <div className='w-[95%] border h-36 md:w-[25rem] md:h-40 bg-white shadow-md rounded-md transition-all duration-150 hover:scale-110 hover:cursor-pointer'>
                    <div className='rounded-sm w-[20rem] h-[10rem] md:w-[24rem] md:h-32 md:my-4 mx-auto'>
                        <img className='h-36 w-full md:w-[24rem] md:h-32' src="catagry1.jpg" alt="bgm" />
                    </div>
                </div>

                <div className='w-[95%] border h-36 md:w-[25rem] md:h-40  bg-white shadow-md rounded-md transition-all duration-150 hover:scale-110 hover:cursor-pointer '>
                    <div className='rounded-sm w-[20rem] h-[10rem] md:w-[24rem] md:h-32 md:my-4 mx-auto ' >
                        <img className='h-36 w-full md:w-[24rem] md:h-32' src="catagry2.jpg" alt="bgm" />
                    </div>
                </div>

                <div className='w-[95%] border h-36 md:w-[25rem] md:h-40  bg-white shadow-md rounded-md transition-all duration-150 hover:scale-110 hover:cursor-pointer '>
                    <div className='rounded-sm w-[20rem] h-[10rem] md:w-[24rem] md:h-32 md:my-4 mx-auto ' >
                        <img className='h-36 w-full md:w-[24rem] md:h-32' src="catagry3.jpg" alt="bgm" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatagresCard