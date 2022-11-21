import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function NavBar() {
    const [nav, setNav] = useState(false);
    const handleNav= () => {
        setNav(!nav);
    }

  return (
    <div>
      <div className='
                flex justify-between items-center
                h-[10vh] bg-black text-white'>
           <h1 className='pl-4'>Elizabeth Goullaud  </h1>   
            <ul className='hidden md:flex justify-around md:w-[50%]'>
                <li>Home</li>
                <li>Projects</li>
                <li>Stack</li>
                <li>About</li>
                <button>Resume</button>
            </ul>  
            <div onClick={handleNav} className='block md:hidden p-6 ease-in-out duration-500'>
                {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/> }
            </div>
            <div className={!nav ? 'fixed left-[-100%]' : 'z-10 fixed left-0 top-0 bg-white h-[100%] w-[60%] text-black border-r-[1px] border-r-black ease-in-out duration-500'}>
                <h1 className='pl-4 mb-4 h-[10vh] bg-black text-white flex items-center'>Elizabeth Goullaud  </h1>   
                <ul className='flex flex-col justify-start w-[100%] text-black'>
                    <li className='p-4 mx-2  border-b-2 border-gray-200 hover:scale-105 hover:duration-300 hover:ease-in-out '>Home</li>
                    <li className='p-4 mx-2  border-b-2 border-gray-200 hover:scale-105 hover:duration-300 hover:ease-in-out '>Projects</li>
                    <li className='p-4 mx-2  border-b-2 border-gray-200 hover:scale-105 hover:duration-300 hover:ease-in-out '>Stack</li>
                    <li className='p-4 mx-2  border-b-2 border-gray-200 hover:scale-105 hover:duration-300 hover:ease-in-out '>About</li>
                    <li className='p-4 mx-2  hover:scale-105 hover:duration-300 hover:ease-in-out '>
                        <button className='bg-[#89c5cc] py-1 px-4 rounded-md shadow-md hover:bg-[#69a1ac] hover:scale-100 hover:duration-300 hover:ease-in-out'>Resume</button>
                        </li>
                </ul>  
            </div>
      </div>
    </div>
  )
}

export default NavBar
