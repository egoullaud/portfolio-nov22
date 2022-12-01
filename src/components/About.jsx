import React from 'react'
import prof1 from '../assets/profile/profilepic4.jpg'
import prof2 from '../assets/profile/profilepic3.jpg'


function About() {
  return (
    <div className='my-[4rem] text-white'>
        <div className=' m-4 '>
          <h1 className='text-3xl mx-4 md:mx-[4rem] text-center font-bold my-5 font-Lora'>Hi, I'm Elizabeth</h1>
            
            <div className=' flex flex-col md:flex-row justify-center  md:justify-around items-center m-2 lg:mx-[10rem]'>
                <div className='flex justify-center items-center  w-[100%] md:w-[40%] overflow-hidden'>  
                     <img 
                className='w-[80%] md:hidden rounded-full my-4 md: mx-auto object-cover'
                src={prof2} alt="profile pic" />
                  <img 
                className='hidden md:flex md:w-[100%] lg:w-[55%] rounded-md my-4 object-cover'
                src={prof1} alt="profile pic" />
                
                
                </div>
             
                <p
                className='md:w-[50%] flex justify-center items-center py-5'> 
                     I am an experienced 
                    front end web developer who loves to build projects from concept to production, collarborate in the 
                    design process, and produce beautiful, cohesive websites. 
                    <br /><br />
                    I spent the last decade running a landscaping business, managing client relationships, and designing 
                    beautiful green spaces and thrive in leadership roles (a.k.a getting things done). A year ago, I discovered
                    code and the wonderful world of web developement, completing a certification course with Skillcrush! 
                    Since graduation, I've built numerous projects for clients, participated in hackathons (most recently I won 2nd 
                    place at the Girl Develop it Hackathon), and devoted myself to learning every day. 
                   
                </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className=' text-xl md:text-2xl mx-4 md:mx-[4rem] text-center lg:mx-[10rem]  font-Lora italic'> I am looking for a remote or hybrid position in North America 
                        to learn, grow, and build awesome web products.</h1>
                {/* <button className='mt-5 border-[1px] border-white rounded-md px-2 hover:bg-black hover:text-white hover:scale-110 hover:duration-300 hover:ease-in-out'>Hire Me</button>  */}
            </div>
        </div>
      
    </div>
  )
}

export default About
