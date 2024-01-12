import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaShoppingCart, FaBars, FaUserAlt } from 'react-icons/fa'
import { RxCross1 } from "react-icons/rx";

function NavBar() {

    const [openNav, SetNav] = useState(false);

    const OpenNavBar = () => {
        if (openNav === false) { SetNav(true); }
        else { SetNav(false); }
    }

    return (
        <>
            <div className='main-header z-20 sticky top-0 h-14 items-center backdrop-blur-sm flex justify-around sm:justify-around md:justify-around  text-white bg-cyan-950 shadow '>
                <div className='left text-emerald-50'>
                    <ul className='hover:text-red-500 text-2xl md:hidden sm:hidden cursor-pointer' onClick={OpenNavBar}>
                        <li>{openNav ? <RxCross1 /> : <FaBars />}</li>
                    </ul>

                    <ul className={`absolute bg-cyan-950 ${openNav ? 'block z-10 transition-all duration-200  -ml-7 mt-4 h-fit p-3 rounded-br-md rounded-bl-md' : 'hidden'} h-[10rem] flex flex-col transition-all duration-100 sm:mt-[0rem] sm:relative sm:main-header sm:h-12 sm:items-center sm:backdrop-blur-sm sm:flex sm:flex-row sm:justify-around sm:space-x-5`}>
                        <Link to="/" className='hover:bg-red-500  md:rounded-xl p-1 cursor-pointer'>Home</Link>
                        <Link to="/" className='hover:bg-red-500  md:rounded-xl p-1 cursor-pointer'>Contact</Link>
                        <Link to="/" className='hover:bg-red-500 md:rounded-xl  p-1 cursor-pointer'>Categoryes</Link>
                    </ul>
                </div>

                <div className=" text-2xl cursor-pointer first-line:font-bold md:center md:text-2xl sm:text-xl "><Link to="/">E-SHOP</Link> </div>
                <div>
                    <ul className="text-lg gap-2 flex md:text-xl md:gap-1 md:space-x-5 sm:space-x-2 md:items-center ">
                        <Link className='hover:text-red-500 rounded-xl p-1 cursor-pointer' ><FaSearch /></Link>
                        <Link className='hover:text-red-500 rounded-xl p-1 cursor-pointer ' ><FaShoppingCart /></Link>
                        <Link className='hover:text-red-500 rounded-2xl p-1 cursor-pointer border'><FaUserAlt /></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar