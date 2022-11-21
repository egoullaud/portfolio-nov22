import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

function Footer() {
  return (
    <div className='fixed left-0 bottom-7 right-0 w-[100%]'>
         <div className='
    flex justify-between items-center
    h-[3vh] bg-black text-white'>
    
        <div className='w-[50%]'>
            <h1 className='pl-4'>Elizabeth Goullaud</h1>
        </div>
        
        <div className='flex justify-around w-[20%]'>
                <p><FaLinkedinIn/></p>
                <p><FaGithub/></p>

        </div>
      </div>
    </div>
   

  )
}

export default Footer
