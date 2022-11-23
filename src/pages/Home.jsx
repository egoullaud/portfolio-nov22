import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BiWorld} from 'react-icons/bi'
import ink3Short from '../assets/ink3short.mp4'
import Projects from '../components/Projects'

function Home() {
  return (
    <div className='bg-fixed'>
         <video
        className='fixed top-0 z-[-10] w-auto min-w-full min-h-full max-x-none max-y-none'
        autoPlay loop muted src={ink3Short} type='video/mp4'></video>

     <section className='h-[100vh]' id='home'>
       
     <div className='flex flex-col justify-center items-center h-[50vh]'>
        <h1 className='text-white mb-5 font-bold text-4xl shadow-lg'> You Dream, I Build.</h1>
        <h2 className='mb-5 text-2xl'> Web Developer </h2>
        <h2 className='flex flex-row'> <span className='px-1'><AiFillHome size={22}/></span> Vancouver, BC | <span className='px-1'><BiWorld size={22}/></span>  US/CA citizenship </h2>
     </div>
     <div className='flex-col justify-center items-center text-center w-[100%]'>
        <p className='text-xl font-bold'>Passion. Leadership. Vision. Dedication.</p>
        <div className='flex flex-row w-[100%] justify-center mx-auto mt-5'>
            <button className='mr-5 border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:scale-110 hover:duration-300 hover:ease-in-out'>About Me</button>
            <button className='ml-5 border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:scale-110 hover:duration-300 hover:ease-in-out'>My Work</button>
        </div>
        <div className='mt-[20vh]'>
            "My Work" with bouncy chevron 
        </div>
     </div>
     </section>
     <section 
        id='projects'
        className='h-[100vh] w-[100%]'
    >
        <Projects/>
    </section>
   
 </div>
  )
}

export default Home
