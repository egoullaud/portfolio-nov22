import React from 'react'
import NavBar from '../components/NavBar'
import {AiFillHome, AiOutlineDown} from 'react-icons/ai'
import {BiWorld} from 'react-icons/bi'
import {BsMouse} from 'react-icons/bs'
import RaineDesk from '../assets/raineg-desk.jpg'
import ink3 from '../assets/ink3.mp4'
import ink3Short from '../assets/ink3short.mp4'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='bg-fixed'>
         <video
        className='fixed top-0 z-[-10] w-auto min-w-full min-h-full max-x-none max-y-none'
        autoPlay loop muted src={ink3Short} type='video/mp4'></video>

     <section className='h-[100vh]'>
       
     <div className='flex flex-col justify-center items-center h-[50vh]'>
        <h1 className='text-white mb-5 font-bold text-4xl shadow-lg'> You Dream, I Build.</h1>
        <h2 className='mb-5 text-2xl'> Web Developer </h2>
        <h2 className='flex flex-row'> <span className='px-1'><AiFillHome size={22}/></span> Vancouver, BC | <span className='px-1'><BiWorld size={22}/></span>  US/CA citizenship </h2>
     </div>
     <div className='flex-col justify-center items-center text-center w-[100%]'>
        <p className='text-xl font-bold'>Passion. Leadership. Vision. Professional. Dedication.</p>
        <div className='flex flex-row w-[100%] justify-center mx-auto mt-5'>
            <button className='mr-5 border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:scale-110 hover:duration-300 hover:ease-in-out'>About Me</button>
            <button className='ml-5 border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:scale-110 hover:duration-300 hover:ease-in-out'>My Work</button>
        </div>
     </div>
     </section>
     <section className='h-[100vh]'>
        <div className='pb-10'>
            <div className='flex flex-col md:flex-row md:flex-wrap justify-center items-center md:justify-around'>
                <div className='bg-white text-black pb-5 mb-2 w-[90%] h-[30%] rounded-md shadow-lg'>
                    <div>
                        <div className='m-2 rounded-lg'>
                            <img className='' src={RaineDesk} alt="project" />
                            </div>
                        
                        <h1 className='px-4 mb-2 text-lg'>Photography Gallery for Local Artist</h1>
                    <div className='flex flex-row w-[100%] justify-center mx-auto mt-5'>
                    <button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:scale-110 hover:duration-300 hover:ease-in-out'>Live Site</button>
                    
                    </div>
                        
                    </div>
                </div>
                <div className='bg-white text-black mb-2 pb-5 w-[90%] rounded-md shadow-lg'>
                    <div>
                        <div className='m-2 rounded-lg'>
                            <img className='' src={RaineDesk} alt="project" />
                            </div>
                        
                        <h1 className='px-4 mb-2 text-lg'>Photography Gallery for Local Artist</h1>
                        <p className='px-4 mb-2 text-md'> Stack: JavaScript, HTML, CSS, TailwindCSS</p>
                    <div className='flex flex-row w-[100%] justify-center mx-auto mt-5'>
                    <button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:scale-110 hover:duration-300 hover:ease-in-out'>Live Site</button>
                    </div>
                        
                    </div>
                </div>
                <div className='bg-white text-black pb-5 w-[90%] rounded-md shadow-lg'>
                    <div>
                        <div className='m-2 rounded-lg'>
                            <img className='' src={RaineDesk} alt="project" />
                            </div>
                        
                        <h1 className='px-4 mb-2 text-lg'>Photography Gallery for Local Artist</h1>
                        <p className='px-4 mb-2 text-md'> Stack: JavaScript, HTML, CSS, TailwindCSS</p>
                    <div className='flex flex-row w-[100%] justify-center mx-auto mt-5'>
                    <button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:scale-110 hover:duration-300 hover:ease-in-out'>Live Site</button>
                    </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </section>
   
 </div>
  )
}

export default Home
