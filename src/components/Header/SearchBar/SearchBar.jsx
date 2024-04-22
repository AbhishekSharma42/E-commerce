import React from 'react'

function SearchBar() {
    return (
        <>
            <div className='bg-cyan-950 h-full w-full flex justify-center items-center py-2'>
                <form >
                    <div className='flex'>
                        <input className='h-12 rounded-l-full pl-5' type="text" placeholder='Search product here...' />
                        <div className='bg-white rounded-r-full flex items-center border-l-2 px-3 hover:bg-red-400 hover:text-white cursor-pointer text-base'>Search</div>
                    </div>
                </form >
            </div>
        </>
    )
}

export default SearchBar;