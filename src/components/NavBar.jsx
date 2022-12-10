import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import resume from '../assets/Resume-nov2022.pdf'

function NavBar() {
    const [nav, setNav] = useState(false);
    const handleNav= () => {
        setNav(!nav);
    }

  return (
    <div className='fixed top-0 left-0 right-0'>
      <div className='
                flex justify-between items-center
                h-[8vh] bg-black text-white font-Poppins'>
           <h1 className='pl-4 text-lg italic font-Lora'><a href="#home">Lee Goullaud</a></h1>   
            <ul className='hidden md:flex justify-around md:w-[50%]'>
                <li className='hover:underline hover:ease-in-out hover:duration-500'><a href="#home">Home</a></li>
                <li className='hover:underline hover:ease-in-out hover:duration-500'><a href="#projects">Projects</a></li>
                <li className='hover:underline hover:ease-in-out hover:duration-500'><a href="#about">About</a></li>
                <li className='hover:underline hover:ease-in-out hover:duration-500'><a href="#contact">Contact</a></li>
                <button className='bg-[#69a1ac] py-1 px-4 rounded-md shadow-md hover:bg-[#89c5cc]  hover:scale-100 hover:duration-300 hover:ease-in-out'> <a href={resume} target='_blank'>Resume</a></button>
            </ul>  
            <div onClick={handleNav} className='block md:hidden p-6 ease-in-out duration-500'>
                {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/> }
            </div>
            <div className={!nav ? 'fixed left-[-100%]' : 'z-10 fixed left-0 top-0 bg-white h-[100%] w-[60%] text-black border-r-[1px] border-r-black ease-in-out duration-500'}>
                <h1 className='pl-4 mb-4 h-[10vh] bg-black text-white flex items-center'><a href="#home">Lee Goullaud</a></h1>   
                <ul className='flex flex-col justify-start w-[100%] text-black'>
                    <li className='p-4 mx-2  border-b-2 border-gray-200 hover:scale-105 hover:duration-300 hover:ease-in-out '><a href="#home">Home</a></li>
                    <li className='p-4 mx-2  border-b-2 border-gray-200 hover:scale-105 hover:duration-300 hover:ease-in-out '><a href="#projects">Projects</a></li>
                    <li className='p-4 mx-2  border-b-2 border-gray-200 hover:scale-105 hover:duration-300 hover:ease-in-out '><a href="#about">About</a></li>
                    <li className='p-4 mx-2  border-b-2 border-gray-200 hover:scale-105 hover:duration-300 hover:ease-in-out '><a href="#contact">Contact</a></li>
                    <li className='p-4 mx-2  hover:scale-105 hover:duration-300 hover:ease-in-out '>
                        <button className='bg-[#69a1ac] py-1 px-4 rounded-md shadow-md hover:bg-[#89c5cc]  hover:scale-100 hover:duration-300 hover:ease-in-out'> <a href={resume} target='_blank'>Resume</a></button>
                        </li>
                </ul>  
            </div>
      </div>
    </div>
  )
}

export default NavBar
