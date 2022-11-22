import React from 'react'
import RaineDesk from '../assets/raineg-desk.jpg'
import {AiOutlineDown} from 'react-icons/ai'
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';


function Icon({id, open}) {
    return (
      <div>
        <AiOutlineDown
        className={`${
          id === open ? "rotate-180" : ""
        } h-6 w-4 transition-transform`}
        size={15}
      />
       
      </div>
    );
  }

function Projects() {
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

  return (
    <div className='
    flex justify-center items-center
    flex-col 
    md:flex-row md:flex-wrap
    '
    >
        
{/* card #1 Strolls */}
    <div className='bg-white text-black pb-5 m-2 w-[90%] rounded-md shadow-xl
                md:w-[45%]
                xl:w-[30%]'>
                {/* image  */}
                 <div className='m-2 rounded-lg'>
                    <a target="_blank" href="http://rainegauthier.com/"><img className='w-[100%] rounded-md' src={RaineDesk} alt="project" /></a> 
                </div>
            {/* ACCORDION  */}
                      <Fragment>
                            <Accordion open={open === 1} icon={<Icon id={1} open={open}/>}>
                                <AccordionHeader onClick={() => handleOpen(1)}
                                className='ml-6 w-[90%]'>
                                Raine Gauthier Photography
                                </AccordionHeader>
                                <AccordionBody className="mx-5 mt-5">
                                    A ten-page photography gallery site built by hand for a local artist. The site is fully responsive and features a modal pop-up for easy photo viewing, contact forms, and hover effects over gallery options and buttons.
                                    <br />
                                    <br />
                                    TechStack: HTML, CSS, JavaScript 
                                    <br />
                                    <br />
                                    Challenges: <br/>
                                    The main challenge was design. I love to build websites, but designing them is another beast altogether! Luckily, my client was happy to discuss design ideas and we came up with a beautiful concept together. <br /><br />
                                    Technical challenges were mostly the learning curve of using modals, and state changes with JavaScript. I spent a lot of time on StackOverflow and Youtube troubleshooting ideas and learning. 
                                    <br />
                                    <br />
                                    Future Plans: <br />
                                    Next steps would be throwing the site together with Next.js, TailwindCSS, and utilizing a headless CMS like GraphQL so the client can add new photos as their business grows.

                                  </AccordionBody>
                            </Accordion>
                        </Fragment>
                   
         {/* buttons section      */}
                    <div className='flex flex-row  justify-around mx-auto pt-5 w-[50%]'>
                        <a target="_blank" href="http://rainegauthier.com/"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out'>Live Site</button></a>
                        <a target="_blank" href="github.com"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white  hover:duration-300 hover:ease-in-out'>See Code</button></a> 
                    </div>
                        
    </div>
        
{/* card #2 GFMS */}
    <div className='bg-white text-black pb-5 m-2 w-[90%] rounded-md shadow-xl
                md:w-[45%]
                xl:w-[30%]'>
                {/* image  */}
                 <div className='m-2 rounded-lg'>
                    <a target="_blank" href="http://rainegauthier.com/"><img className='w-[100%] rounded-md' src={RaineDesk} alt="project" /></a> 
                </div>
            {/* ACCORDION  */}
                      <Fragment>
                            <Accordion open={open === 1} icon={<Icon id={1} open={open}/>}>
                                <AccordionHeader onClick={() => handleOpen(1)}
                                className='ml-6 w-[90%]'>
                                Raine Gauthier Photography
                                </AccordionHeader>
                                <AccordionBody className="mx-5 mt-5">
                                    A ten-page photography gallery site built by hand for a local artist. The site is fully responsive and features a modal pop-up for easy photo viewing, contact forms, and hover effects over gallery options and buttons.
                                    <br />
                                    <br />
                                    TechStack: HTML, CSS, JavaScript 
                                    <br />
                                    <br />
                                    Challenges: <br/>
                                    The main challenge was design. I love to build websites, but designing them is another beast altogether! Luckily, my client was happy to discuss design ideas and we came up with a beautiful concept together. <br /><br />
                                    Technical challenges were mostly the learning curve of using modals, and state changes with JavaScript. I spent a lot of time on StackOverflow and Youtube troubleshooting ideas and learning. 
                                    <br />
                                    <br />
                                    Future Plans: <br />
                                    Next steps would be throwing the site together with Next.js, TailwindCSS, and utilizing a headless CMS like GraphQL so the client can add new photos as their business grows.

                                  </AccordionBody>
                            </Accordion>
                        </Fragment>
                   
         {/* buttons section      */}
                    <div className='flex flex-row  justify-around mx-auto pt-5 w-[50%]'>
                        <a target="_blank" href="http://rainegauthier.com/"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out'>Live Site</button></a>
                        <a target="_blank" href="github.com"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white  hover:duration-300 hover:ease-in-out'>See Code</button></a> 
                    </div>
                        
    </div>
{/* card #3 Photography */}
    <div className='bg-white text-black pb-5 m-2 w-[90%] rounded-md shadow-xl
                md:w-[45%]
                xl:w-[30%]'>
                {/* image  */}
                 <div className='m-2 rounded-lg'>
                    <a target="_blank" href="http://rainegauthier.com/"><img className='w-[100%] rounded-md' src={RaineDesk} alt="project" /></a> 
                </div>
            {/* ACCORDION  */}
                      <Fragment>
                            <Accordion open={open === 1} icon={<Icon id={1} open={open}/>}>
                                <AccordionHeader onClick={() => handleOpen(1)}
                                className='ml-6 w-[90%]'>
                                Raine Gauthier Photography
                                </AccordionHeader>
                                <AccordionBody className="mx-5 mt-5">
                                    A ten-page photography gallery site built by hand for a local artist. The site is fully responsive and features a modal pop-up for easy photo viewing, contact forms, and hover effects over gallery options and buttons.
                                    <br />
                                    <br />
                                    TechStack: HTML, CSS, JavaScript 
                                    <br />
                                    <br />
                                    Challenges: <br/>
                                    The main challenge was design. I love to build websites, but designing them is another beast altogether! Luckily, my client was happy to discuss design ideas and we came up with a beautiful concept together. <br /><br />
                                    Technical challenges were mostly the learning curve of using modals, and state changes with JavaScript. I spent a lot of time on StackOverflow and Youtube troubleshooting ideas and learning. 
                                    <br />
                                    <br />
                                    Future Plans: <br />
                                    Next steps would be throwing the site together with Next.js, TailwindCSS, and utilizing a headless CMS like GraphQL so the client can add new photos as their business grows.

                                  </AccordionBody>
                            </Accordion>
                        </Fragment>
                   
         {/* buttons section      */}
                    <div className='flex flex-row  justify-around mx-auto pt-5 w-[50%]'>
                        <a target="_blank" href="http://rainegauthier.com/"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out'>Live Site</button></a>
                        <a target="_blank" href="github.com"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white  hover:duration-300 hover:ease-in-out'>See Code</button></a> 
                    </div>
                        
    </div>
{/* card #4 Gamerverse */}
    <div className='bg-white text-black pb-5 m-2 w-[90%] rounded-md shadow-xl
                md:w-[45%]
                xl:w-[30%]'>
                {/* image  */}
                 <div className='m-2 rounded-lg'>
                    <a target="_blank" href="http://rainegauthier.com/"><img className='w-[100%] rounded-md' src={RaineDesk} alt="project" /></a> 
                </div>
            {/* ACCORDION  */}
                      <Fragment>
                            <Accordion open={open === 1} icon={<Icon id={1} open={open}/>}>
                                <AccordionHeader onClick={() => handleOpen(1)}
                                className='ml-6 w-[90%]'>
                                Raine Gauthier Photography
                                </AccordionHeader>
                                <AccordionBody className="mx-5 mt-5">
                                    A ten-page photography gallery site built by hand for a local artist. The site is fully responsive and features a modal pop-up for easy photo viewing, contact forms, and hover effects over gallery options and buttons.
                                    <br />
                                    <br />
                                    TechStack: HTML, CSS, JavaScript 
                                    <br />
                                    <br />
                                    Challenges: <br/>
                                    The main challenge was design. I love to build websites, but designing them is another beast altogether! Luckily, my client was happy to discuss design ideas and we came up with a beautiful concept together. <br /><br />
                                    Technical challenges were mostly the learning curve of using modals, and state changes with JavaScript. I spent a lot of time on StackOverflow and Youtube troubleshooting ideas and learning. 
                                    <br />
                                    <br />
                                    Future Plans: <br />
                                    Next steps would be throwing the site together with Next.js, TailwindCSS, and utilizing a headless CMS like GraphQL so the client can add new photos as their business grows.

                                  </AccordionBody>
                            </Accordion>
                        </Fragment>
                   
         {/* buttons section      */}
                    <div className='flex flex-row  justify-around mx-auto pt-5 w-[50%]'>
                        <a target="_blank" href="http://rainegauthier.com/"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out'>Live Site</button></a>
                        <a target="_blank" href="github.com"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white  hover:duration-300 hover:ease-in-out'>See Code</button></a> 
                    </div>
                        
    </div>
{/* card #5 Dashboard */}
    <div className='bg-white text-black pb-5 m-2 w-[90%] rounded-md shadow-xl
                md:w-[45%]
                xl:w-[30%]'>
                {/* image  */}
                 <div className='m-2 rounded-lg'>
                    <a target="_blank" href="http://rainegauthier.com/"><img className='w-[100%] rounded-md' src={RaineDesk} alt="project" /></a> 
                </div>
            {/* ACCORDION  */}
                      <Fragment>
                            <Accordion open={open === 1} icon={<Icon id={1} open={open}/>}>
                                <AccordionHeader onClick={() => handleOpen(1)}
                                className='ml-6 w-[90%]'>
                                Raine Gauthier Photography
                                </AccordionHeader>
                                <AccordionBody className="mx-5 mt-5">
                                    A ten-page photography gallery site built by hand for a local artist. The site is fully responsive and features a modal pop-up for easy photo viewing, contact forms, and hover effects over gallery options and buttons.
                                    <br />
                                    <br />
                                    TechStack: HTML, CSS, JavaScript 
                                    <br />
                                    <br />
                                    Challenges: <br/>
                                    The main challenge was design. I love to build websites, but designing them is another beast altogether! Luckily, my client was happy to discuss design ideas and we came up with a beautiful concept together. <br /><br />
                                    Technical challenges were mostly the learning curve of using modals, and state changes with JavaScript. I spent a lot of time on StackOverflow and Youtube troubleshooting ideas and learning. 
                                    <br />
                                    <br />
                                    Future Plans: <br />
                                    Next steps would be throwing the site together with Next.js, TailwindCSS, and utilizing a headless CMS like GraphQL so the client can add new photos as their business grows.

                                  </AccordionBody>
                            </Accordion>
                        </Fragment>
                   
         {/* buttons section      */}
                    <div className='flex flex-row  justify-around mx-auto pt-5 w-[50%]'>
                        <a target="_blank" href="http://rainegauthier.com/"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out'>Live Site</button></a>
                        <a target="_blank" href="github.com"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white  hover:duration-300 hover:ease-in-out'>See Code</button></a> 
                    </div>
                        
    </div>


        </div>

 
  
  )
}

export default Projects
