//import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Login() {
    return (
        <>
            <div className='text-5xl text-center mt-16 font-semibold'>
                ShopyPi LogIn
            </div>
            <div className='bg-red-600 w-1/3 mx-auto mt-4 flex flex-col'>
                <label>Email Id</label>
                <input type="text" placeholder='Example@email.com' />
                <label>Password</label>
                <div className='flex flex-row'>
                    <input className='w-full' type="Password" placeholder='Password' />
                    <div className='hover:cursor-pointer'>< FaEye /> <FaEyeSlash /></div>
                </div>
            </div>
        </>
    )
}

export default Login