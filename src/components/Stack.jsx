import React from 'react'
import {FaReact, FaCss3, FaHtml5, FaGit, FaGithub, FaFigma} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiJavascript, SiTailwindcss, SiBootstrap, SiAdobephotoshop, SiLinux} from 'react-icons/si'
import {GrGraphQl} from 'react-icons/gr'
import {AiOutlineConsoleSql} from 'react-icons/ai'


function Stack() {
  return (
    <div className='my-[10rem] mx-[4rem]'>
      {/* <h1 className='text-white text-2xl font-bold text-center'>My Toolbox</h1> */}
      <div className='flex justify-evenly flex-wrap mx-[2rem] md:flex-wrap md:mx-[4rem] text-slate-200'>
          <div className='hover:scale-125 ease-in-out duration-500 mx-2 flex flex-col'>
                <p className='text-5xl '><FaReact/></p>
                <p className='mb-4 text-center'>React</p>
            </div> 
            <div className='hover:scale-125 ease-in-out duration-500 mx-2   flex flex-col items-center'>
                <p className='text-5xl'><TbBrandNextjs/></p>
                <p className='mb-4 text-center'>Next</p>
            </div> 
            <div className='hover:scale-125 ease-in-out duration-500 mx-2 flex flex-col items-center'>
                <p className='text-5xl'><SiJavascript/></p>
                <p className='mb-4 text-center'>JavaScript</p>
            </div> 
            <div className='hover:scale-125 ease-in-out duration-500 mx-2 flex flex-col items-center'>
                <p className='text-5xl'><GrGraphQl/></p>
                <p className='mb-4 text-center'>GraphQL</p>
            </div> 
            <div className='hover:scale-125 ease-in-out duration-500 mx-2 flex flex-col items-center'>
                <p className='text-5xl'><AiOutlineConsoleSql/></p>
                <p className='mb-4 text-center'>SQL</p>
            </div> 
            <div className='hover:scale-125 ease-in-out duration-500 mx-2 flex flex-col items-center'>
                <p className='text-5xl'><FaCss3/></p>
                <p className='mb-4 text-center'>CSS3</p>
            </div> 
            <div className='hover:scale-125 ease-in-out duration-500 mx-2 flex flex-col items-center'>
                <p className='text-5xl'><FaHtml5/></p>
                <p className='mb-4 text-center'>HTML5</p>
            </div> 
            <div className='hover:scale-125 ease-in-out duration-500 mx-2 flex flex-col items-center'>
                <p className='text-5xl'><FaGit/></p>
                <p className='mb-4 text-center'>Git</p>
            </div> 
            <div className='hover:scale-125 ease-in-out duration-500 mx-2   flex flex-col items-center'>
                <p className='text-5xl'><SiTailwindcss/></p>
                <p className='mb-4 text-center'>TailwindCSS</p>
            </div> 
            <div className='hover:scale-125 ease-in-out duration-500 mx-2  flex flex-col items-center'>
                <p className='text-5xl'><SiBootstrap/></p>
                <p className='mb-4 text-center'>Bootstrap</p>
            </div> 
           
           
          
            <div className='hover:scale-125 ease-in-out duration-500 mx-2 flex flex-col items-center'>
                <p className='text-5xl'><FaGithub/></p>
                <p className='mb-4 text-center'>GitHub</p>
            </div> 
         
            <div className='hover:scale-125 ease-in-out duration-500 mx-2 flex flex-col items-center'>
                <p className='text-5xl'><FaFigma/></p>
                <p className='mb-4 text-center'>Figma</p>
            </div> 
            <div className='hover:scale-125 ease-in-out duration-500 mx-2 flex flex-col items-center'>
                <p className='text-5xl'><SiAdobephotoshop/></p>
                <p className='mb-4 text-center'>PhotoShop</p>
            </div> 
           
            <div className='hover:scale-125 ease-in-out duration-500 mx-2 flex flex-col items-center'>
                <p className='text-5xl'><SiLinux/></p>
                <p className='mb-4 text-center'>Linux</p>
            </div> 
       
  
     
      </div>
    </div>
  )
}

export default Stack
