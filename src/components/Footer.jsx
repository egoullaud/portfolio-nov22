import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

function Footer() {
  return (
    <div className='fixed left-0 bottom-0 right-0 w-[100%] font-Lora'>
         <div className='
    flex justify-between items-center
    h-[4vh] bg-black text-white'>
    
        <div className='w-[70%]'>
            <h1 className='pl-4 text-sm'>Built by Lee Goullaud 2022.</h1>
        </div>
        
        <div className='flex justify-around w-[20%]'>
                <p><a href="https://www.linkedin.com/in/elizabeth-goullaud/" target='_blank'><FaLinkedinIn/></a></p>
                <p><a href="https://github.com/egoullaud" target='_blank'><FaGithub/></a></p>
                

        </div>
      </div>
    </div>
   

  )
}

export default Footer
