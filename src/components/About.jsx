import React from 'react'
import prof1 from '../assets/profile/profilepic4.jpg'
import prof2 from '../assets/profile/profilepic3.jpg'
import cert from '../assets/Elizabeth-Goullaud-certificate-bw.pdf'


function About() {
  return (
    <div className='my-[4rem] text-white'>
        <div className=' m-4 '>
          <h1 className='text-3xl mx-4 md:mx-[4rem] text-center font-bold my-5 font-Lora'>Hi, I'm Lee</h1>
            
            <div className=' flex flex-col md:flex-row justify-center  md:justify-around items-center m-2 xl:mx-[10rem] lg:mx-[5rem] md:mx-[3rem]'>
                <div className='flex justify-center items-center  w-[100%] md:w-[40%] overflow-hidden'>  
                     <img 
                className='w-[80%] md:hidden rounded-full my-4 md: mx-auto object-cover'
                src={prof2} alt="profile pic" />
                  <img 
                className='hidden md:flex md:w-[100%] lg:w-[95%] xl:w-[65%] rounded-md my-4 object-cover'
                src={prof1} alt="profile pic" />
                
                
                </div>
             
                <p
                className='md:w-[70%] flex justify-center items-center py-5 px-4'> 
                    I am a front end developer with a background in environmental science and 6 years of experience in leadership, education, and collaborative roles. I hold a Bachelors of Science, 
                    am a published scientific author, have traveled the world as a research scientist, and held leadership roles at every level of my career.  I grew a passion project into a full time 
                    landscaping business that thrived on building client relationships, mentoring junior staff, designing and implementing small and large scale projects, and educating clients about 
                    sustainability practices. I pivoted to technology in 2021 via a front end development bootcamp, and have been rigorously building experience, skills, and client lists ever since.
                    <br /> <br />
                    I have designed, built, and maintained high-level websites and applications using React, Next.js, API/RESTful APIs, HTML/CSS, and JavaScript. I enjoy using a multitude of libraries 
                    including TailwindCSS, Styled Components, Material UI, and Bootstrap 5. I have experience both designing wireframes and translating wireframes into fully responsive websites. I work in
                     alignment with Agile Principles, utilizing Kanban and Jira to stay organized.
                   
                </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className=' text-xl md:text-2xl mx-4 md:mx-[4rem] text-center lg:mx-[10rem]  font-Lora italic'> My Bottom Line: 
                My background in building client relationships and executing complex projects provides me the leadership and collaborative experience to work effectively and efficiently with colleagues and clients. 
                Combine that with my experience in product design and building fully responsive websites, I can bring valuable skills and perspectives to your team or project. 
                </h1>
                {/* <button className='mt-5 border-[1px] border-white rounded-md px-2 hover:bg-black hover:text-white hover:scale-110 hover:duration-300 hover:ease-in-out'>Hire Me</button>  */}
            </div>
        </div>
      
    </div>
  )
}

export default About
