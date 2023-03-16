import React from 'react'
import RaineDesk from '../assets/raineg-desk.jpg'
import {AiOutlineDown} from 'react-icons/ai'
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import gamesDesk from '../assets/games-desk.jpg'
import gfmsDesk from '../assets/gfms-desk.jpg'
import strollsDesk from '../assets/strolls-desk.jpg'
import sixpo from '../assets/sixpo.jpg'

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
    flex justify-center md:items-start items-center
    flex-col 
    md:flex-row md:flex-wrap
    h-full
    '
    >
        {/* sixpo */}
         <div className='bg-white text-black pb-5 m-2 w-[90%] rounded-md shadow-xl
                md:w-[45%]
                xl:w-[30%]'>
                {/* image  */}
                 <div className='m-2 rounded-lg'>
                    <a target="_blank" href="https://gamerverse.netlify.app/"><img className='w-[100%] rounded-md' src={sixpo} alt="project" /></a> 
                </div>
            {/* ACCORDION  */}
                      <Fragment>
                            <Accordion open={open === 5} icon={<Icon id={5} open={open}/>}>
                                <AccordionHeader onClick={() => handleOpen(5)}
                                className='ml-6 w-[90%]'>
                                SIXpo GraphCMS Site
                                </AccordionHeader>
                                <AccordionBody className="mx-5 mt-5 w-[90%] overflow-y-scroll">
                                    Website for a charity event educating disabled folks about sexuality and wellness. I designed the site with Figma, built the front end with React 
                                    and TailwindCSS, and set up a backend with Hygraph(GraphCMS). I used version control with git and GitHub, and the website is hosted on Netlify. 
                                    <br />
                                    <br />
                                    TechStack: React, TailwindCSS, GraphCMS, GraphQL, Figma, Netlify
                                    <br />
                                    <br />
                                    Challenges: <br/>
                                        The challenge with this project was all about web accessiblity as it's users are disabled folks who need access to all the information for the event. 
                                        I used the Web Content Accessibility Guidelines (WCAG) to make sure the website is accessible via screen readers and keyboards. I also learned how to 
                                        use aria-labels to create clear distinctions between elements. 
                                    <br />
                                    <br />
                                    Future Plans: <br />
                                    I have volunteered my time to the charity to continue to maintain their website and add new features to it as they need. 

                                  </AccordionBody>
                            </Accordion>
                        </Fragment>
                   
         {/* buttons section      */}
                    <div className='flex flex-row  justify-around mx-auto pt-5 w-[50%]'>
                        <a target="_blank" href="https://sixpo.netlify.app/"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out'>Live Site</button></a>
                        <a target="_blank" href="https://github.com/egoullaud/sixpo"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white  hover:duration-300 hover:ease-in-out'>Github</button></a> 
                    </div>
                        
    </div>
{/* card #1 Gamerverse */}
    <div className='bg-white text-black pb-5 m-2 w-[90%] rounded-md shadow-xl
                md:w-[45%]
                xl:w-[30%]'>
                {/* image  */}
                 <div className='m-2 rounded-lg'>
                    <a target="_blank" href="https://gamerverse.netlify.app/"><img className='w-[100%] rounded-md' src={gamesDesk} alt="project" /></a> 
                </div>
            {/* ACCORDION  */}
                      <Fragment>
                            <Accordion open={open === 1} icon={<Icon id={1} open={open}/>}>
                                <AccordionHeader onClick={() => handleOpen(1)}
                                className='ml-6 w-[90%]'>
                                Gamerverse API Site
                                </AccordionHeader>
                                <AccordionBody className="mx-5 mt-5 w-[90%]  overflow-y-scroll">
                                   Multi-page fully responsive website built with the RAWG API to allow user to search video games, see upcoming and popular games, look at games by category and view individual game information.
                                    <br />
                                    <br />
                                    TechStack: React, TailwindCSS, API, Netlify
                                    <br />
                                    <br />
                                    Challenges: <br/>
                                        I built this site to practice using a complex API. I had built similar sites using the Spoonacular API, but wanted to try something a bit higher level. My biggest block was accessing data in nested arrays. I reached out to my dev community to find a solution and it worked!
                                    <br />
                                    <br />
                                    Future Plans: <br />
                                    I want to add a filter feature to the search, as well as a login and account component to create collections of favorite games.

                                  </AccordionBody>
                            </Accordion>
                        </Fragment>
                   
         {/* buttons section      */}
                    <div className='flex flex-row  justify-around mx-auto pt-5 w-[50%]'>
                        <a target="_blank" href="https://gamerverse.netlify.app/"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out'>Live Site</button></a>
                        <a target="_blank" href="https://github.com/egoullaud/game-api"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white  hover:duration-300 hover:ease-in-out'>Github</button></a> 
                    </div>
                        
    </div>
        
{/* card #2 GFMS */}
    <div className='bg-white text-black pb-5 m-2 w-[90%] rounded-md shadow-xl
                md:w-[45%]
                xl:w-[30%]'>
                {/* image  */}
                 <div className='m-2 rounded-lg'>
                    <a target="_blank" href="https://grandmafinchmaplesyrup.netlify.app/"><img className='w-[100%] rounded-md' src={gfmsDesk} alt="project" /></a> 
                </div>
            {/* ACCORDION  */}
                      <Fragment>
                            <Accordion open={open === 2} icon={<Icon id={1} open={open}/>}>
                                <AccordionHeader onClick={() => handleOpen(2)}
                                className='ml-6 w-[90%]'>
                                Grandma Finch's Maple Syrup
                                </AccordionHeader>
                                <AccordionBody className="mx-5 mt-5 w-[90%] overflow-y-scroll">
                                        This site was built as a prototype for a mom and pop maple syrup business. The client's main goal was to have a site for customers to view their products, learn about the company's story, and contact the seller.   
                                    <br />
                                    <br />
                                    TechStack: React, TailwindCSS, ReactTyped, Netlify 
                                    <br />
                                    <br />
                                    Challenges: <br/>
                                    The biggest challenge here was achieving the client's goals for the website. There are multiple features to be added, like a blog and e-commerce option. 
                                    <br />
                                    <br />
                                    Future Plans: <br />
                                        This site is either going to utilize Next.js and a headcless CMS to allow the client to add blog posts, or I will build a WordPress site for the client so they have more control over their site maintenance in the long term.
                                  </AccordionBody>
                            </Accordion>
                        </Fragment>
                   
         {/* buttons section      */}
                    <div className='flex flex-row  justify-around mx-auto pt-5 w-[50%]'>
                        <a target="_blank" href="https://grandmafinchmaplesyrup.netlify.app/"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out'>Live Site</button></a>
                        <a target="_blank" href="https://github.com/egoullaud/gfms-site"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white  hover:duration-300 hover:ease-in-out'>Github</button></a> 
                    </div>
                        
    </div>
{/* card #3 Strolls */}
    <div className='bg-white text-black pb-5 m-2 w-[90%] rounded-md shadow-xl
                md:w-[45%]
                xl:w-[30%]'>
                {/* image  */}
                 <div className='m-2 rounded-lg'>
                    <a target="_blank" href="https://github.com/kalikokalikova/adventure"><img className='w-[100%] rounded-md' src={strollsDesk} alt="project" /></a> 
                </div>
            {/* ACCORDION  */}
                      <Fragment>
                            <Accordion open={open === 3} icon={<Icon id={1} open={open}/>}>
                                <AccordionHeader onClick={() => handleOpen(3)}
                                className='ml-6 w-[90%]'>
                               Strolls: a Walking Adventure
                                </AccordionHeader>
                                <AccordionBody className="mx-5 mt-5 w-[90%] overflow-y-scroll">
                                    This web app was built during the Girl Develop It Hackathon November 16-19 2022 and won Second Place. The concept for the app was to make walking fun and interactive by pairing walking with the thrill of discovery to create a deeper connection to our neighborhoods, leading to a happier, healthier community.
                                    <br />
                                    <br />
                                    TechStack: React Front End with TailwindCSS, Mapbox. Back End with Ruby on Rails. Design with Figma.
                                    <br />
                                    <br />
                                    Challenges: <br/>
                                        As in any Hackathon, time was our largest constraint. I built the pages to the designer's specifications, while the Map component and backend were built by my teammates. We were unable to link the back end to the front end for the demo project, but instead hard-coded a .json file with interest points, images, and descriptions for the neighborhood.  
                                    <br />
                                    <br />
                                    Future Plans: <br />
                                    Our team decided to continue working on it together. We will connect the back end, get the site live, and add features such as account logins, upload a photo to the database, sharing, and comment threads/community pages for each point of interest. 
                                  </AccordionBody>
                            </Accordion>
                        </Fragment>
                   
         {/* buttons section      */}
                    <div className='flex flex-row  justify-around mx-auto pt-5 w-[50%]'>
                        <a target="_blank" href="https://strolls.netlify.app/"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out'>Live Site</button></a>
                        <a target="_blank" href="https://github.com/kalikokalikova/adventure"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white  hover:duration-300 hover:ease-in-out'>Github</button></a> 
                    </div>
                        
    </div>

{/* card #5 Photography */}
    <div className='bg-white text-black pb-5 m-2 w-[90%] rounded-md shadow-xl
                md:w-[45%]
                xl:w-[30%]'>
                {/* image  */}
                 <div className='m-2 rounded-lg'>
                    <a target="_blank" href="http://rainegauthier.com/"><img className='w-[100%] rounded-md' src={RaineDesk} alt="project" /></a> 
                </div>
            {/* ACCORDION  */}
                      <Fragment>
                            <Accordion open={open === 5} icon={<Icon id={1} open={open}/>}>
                                <AccordionHeader onClick={() => handleOpen(5)}
                                className='ml-6 w-[90%]'>
                                Raine Gauthier Photography
                                </AccordionHeader>
                                <AccordionBody className="mx-5 mt-5 w-[90%] overflow-y-scroll">
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
                        <a target="_blank" href="github.com"><button className='border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white  hover:duration-300 hover:ease-in-out'>Github</button></a> 
                    </div>
                        
    </div>


        </div>

 
  
  )
}

export default Projects
