import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='z-10 text-gray-500 flex justify-between items-center max-w-[1650px] mx-auto h-24 px-4 text-l'>


            <h1 className='w-full text-3xl font-bold text-white ml-4 cursor-pointer'>Protfo<span className='text-danger-color'>lio</span></h1>
            <ul className='hidden md:flex'>
                <li className='p-5 hover:text-danger-color'><a href="#home">Home</a></li>
                <li className='p-5 hover:text-danger-color'><a href="#about">About</a></li>
                <li className='p-5 hover:text-danger-color'><a href="#services">Services</a></li>
                <li className='p-5 hover:text-danger-color'><a href="#skills">Skills</a></li>
                <li className='p-5 hover:text-danger-color'><a href="#contact">Contact</a></li>
                <a className='p-5 hover:text-danger-color btn' href="#">Subscribe</a>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r-gray-900 bg-[#202121] ease-in-out duration-500'
                : 'fixed left-[-100%]'}>
                <h1 className='text-3xl primary-color m-4'>J. DOE</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2 hover:text-danger-color'><a href="#home">Home</a></li>
                    <li className='p-2 hover:text-danger-color'><a href="#experience">Experience</a></li>
                    <li className='p-2 hover:text-danger-color'><a href="#work">Work</a></li>
                    <li className='p-2 hover:text-danger-color'><a href="#about">About</a></li>
                    <li className='p-2 hover:text-danger-color'><a href="#contact">Contact</a></li>
                </ul>
            </div>

        </div>)
}

export default Navbar