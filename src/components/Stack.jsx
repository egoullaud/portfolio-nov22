import React from 'react'
import {FaReact, FaCss3, FaHtml5, FaGit, FaGithub} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiJavascript, SiTailwindcss, SiBootstrap} from 'react-icons/si'

function Stack() {
  return (
    <div className='my-[10rem]'>
      {/* <h1 className='text-white text-2xl font-bold text-center'>My Toolbox</h1> */}
      <div className='flex justify-around flex-wrap mx-[2rem] md:flex-nowrap md:mx-[4rem] text-slate-200'>
        <p className='mb-4 hover:scale-125 ease-in-out duration-500 text-5xl mx-1'><FaReact/></p>
        <p className='mb-4 hover:scale-125 ease-in-out duration-500 text-5xl mx-1'><TbBrandNextjs/></p>
        <p className='mb-4 hover:scale-125 ease-in-out duration-500 text-5xl mx-1'><SiJavascript/></p>
        <p className='mb-4 hover:scale-125 ease-in-out duration-500 text-5xl mx-1'><SiTailwindcss/></p>
        <p className='mb-4 hover:scale-125 ease-in-out duration-500 text-5xl mx-1'><SiBootstrap/></p>
        <p className='mb-4 hover:scale-125 ease-in-out duration-500 text-5xl mx-1'><FaCss3/></p>
        <p className='mb-4 hover:scale-125 ease-in-out duration-500 text-5xl mx-1'><FaHtml5/></p>
        <p className='mb-4 hover:scale-125 ease-in-out duration-500 text-5xl mx-1'><FaGit/></p>
        <p className='mb-4 hover:scale-125 ease-in-out duration-500 text-5xl mx-1'><FaGithub/></p>
      </div>
    </div>
  )
}

export default Stack
