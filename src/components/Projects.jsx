import React from "react";
import RaineDesk from "../assets/raineg-desk.jpg";
import { AiOutlineDown } from "react-icons/ai";
import gamesDesk from "../assets/games-desk.jpg";
import gfmsDesk from "../assets/gfms-desk.jpg";
import strollsDesk from "../assets/strolls-desk.jpg";
import sixpo from "../assets/sixpo.jpg";

function Projects() {
  return (
    <div
      className="flex flex-wrap justify-center items-start text-white bg-black bg-opacity-70 py-[4rem] mx-[4rem]
    "
    >
      {/* sixpo */}
      <div
        className=" flex flex-col justify-center items-center  pb-5 m-2 w-[90%] 
                md:w-[45%]
                xl:w-[30%]"
      >
        {/* image  */}
        <div className="m-2 rounded-lg overflow-hidden">
          <a target="_blank" href="https://sixpo.ca/">
            <img
              className="w-[100%]  h-64 object-cover hover:shadow-lg hover:scale-105  hover:transition-all hover:duration-500"
              src={sixpo}
              alt="project"
            />
          </a>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl pt-2 text-center tracking-wide font-semibold">
            Sixpo: Sexuality, Inclusion, Exploration
          </h1>
          {/* buttons section      */}
          <div className="flex flex-row  justify-around mx-auto py-2 w-[50%]">
            <a target="_blank" href="https://sixpo.ca/">
              <button className=" tracking-wide border-[1px] border-white rounded-md px-3 py-1 hover:bg-white hover:text-black hover:duration-300 hover:ease-in-out">
                Live Site
              </button>
            </a>
            <a target="_blank" href="https://github.com/egoullaud/sixpo-nextjs">
              <button className=" tracking-wide border-[1px] border-white rounded-md px-3 py-1 hover:bg-white hover:text-black  hover:duration-300 hover:ease-in-out">
                Github
              </button>
            </a>
          </div>
          <p className="px-4 text-center tracking-wider w-[90%]">
            Fullstack website for a charity event educating disabled folks about
            sexuality and wellness. I designed the site with Figma, built the
            front end with React, Next, and TailwindCSS, and set up a backend
            with Hygraph(GraphCMS), and GraphQL. I used version control with git
            and GitHub, and the website is hosted on Vercel. <br />
            <br />
            TechStack: React, TailwindCSS, GraphCMS, GraphQL, Figma, Netlify
          </p>
        </div>
      </div>
      {/* card #5 Photography */}
      <div
        className=" flex flex-col justify-center items-center  pb-5 m-2 w-[90%] 
                md:w-[45%]
                xl:w-[30%]"
      >
        {/* image  */}
        <div className="m-2 rounded-lg overflow-hidden">
          <a target="_blank" href="https://rainegauthier.vercel.app/">
            <img
              className="w-[100%]  h-64 object-cover hover:shadow-lg hover:scale-105  hover:transition-all hover:duration-500"
              src={RaineDesk}
              alt="project"
            />
          </a>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl pt-2 tracking-wide font-semibold">
            Raine Gauthier Photography
          </h1>
          {/* buttons section      */}
          <div className="flex flex-row  justify-around mx-auto py-2 w-[50%]">
            <a target="_blank" href="https://rainegauthier.vercel.app/">
              <button className=" tracking-wide border-[1px] border-white rounded-md px-3 py-1 hover:bg-white hover:text-black hover:duration-300 hover:ease-in-out">
                Live Site
              </button>
            </a>
            <a
              target="_blank"
              href="https://github.com/egoullaud/photography-next"
            >
              <button className=" tracking-wide border-[1px] border-white rounded-md px-3 py-1 hover:bg-white hover:text-black  hover:duration-300 hover:ease-in-out">
                Github
              </button>
            </a>
          </div>
          <p className="px-4 text-center tracking-wider w-[90%]">
            Photography Gallery website featuring gallery, about, and contact
            pages. I designed and built with React, Next, TailwindCSS, and
            GraphQL with a GraphCMS backend.
            <br />
            <br />
            TechStack: React, Next, TailwindCSS GraphQL, GraphCMS, Vercel
          </p>
        </div>
      </div>

      {/* card #1 Gamerverse */}
      <div
        className=" flex flex-col justify-center items-center  pb-5 m-2 w-[90%] 
                md:w-[45%]
                xl:w-[30%]"
      >
        {/* image  */}
        <div className="m-2 rounded-lg overflow-hidden">
          <a target="_blank" href="https://gamerverse.netlify.app/">
            <img
              className="w-[100%]  h-64 object-cover hover:shadow-lg hover:scale-105  hover:transition-all hover:duration-500"
              src={gamesDesk}
              alt="project"
            />
          </a>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl pt-2 text-center tracking-wide font-semibold">
            Gamerverse Personal Project
          </h1>
          {/* buttons section      */}
          <div className="flex flex-row  justify-around mx-auto py-2 w-[50%]">
            <a target="_blank" href="https://gamerverse.netlify.app/">
              <button className=" tracking-wide border-[1px] border-white rounded-md px-3 py-1 hover:bg-white hover:text-black hover:duration-300 hover:ease-in-out">
                Live Site
              </button>
            </a>
            <a target="_blank" href="https://github.com/egoullaud/game-api">
              <button className=" tracking-wide border-[1px] border-white rounded-md px-3 py-1 hover:bg-white hover:text-black  hover:duration-300 hover:ease-in-out">
                Github
              </button>
            </a>
          </div>
          <p className="px-4 text-center tracking-wider w-[90%]">
            I created this as a personal project to play with the RAWG API. It
            is a multi-page fully responsive website that allows users to search
            video games, see upcoming and popular games, look at games by
            category and view individual game information.
            <br />
            <br />
            TechStack: React, TailwindCSS, API, Netlify
          </p>
        </div>
      </div>

      {/* card #2 GFMS */}
      <div
        className=" flex flex-col justify-center items-center  pb-5 m-2 w-[90%] 
                md:w-[45%]
                xl:w-[30%]"
      >
        {/* image  */}
        <div className="m-2 rounded-lg overflow-hidden">
          <a target="_blank" href="https://grandmafinchmaplesyrup.netlify.app/">
            <img
              className="w-[100%]  h-64 object-cover hover:shadow-lg hover:scale-105  hover:transition-all hover:duration-500"
              src={gfmsDesk}
              alt="project"
            />
          </a>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl pt-2 text-center tracking-wide font-semibold">
            Grandma Finch's Maple Syrup
          </h1>
          {/* buttons section      */}
          <div className="flex flex-row  justify-around mx-auto py-2 w-[50%]">
            <a
              target="_blank"
              href="https://grandmafinchmaplesyrup.netlify.app/"
            >
              <button className=" tracking-wide border-[1px] border-white rounded-md px-3 py-1 hover:bg-white hover:text-black hover:duration-300 hover:ease-in-out">
                Live Site
              </button>
            </a>
            <a target="_blank" href="https://github.com/egoullaud/gfms-site">
              <button className=" tracking-wide border-[1px] border-white rounded-md px-3 py-1 hover:bg-white hover:text-black  hover:duration-300 hover:ease-in-out">
                Github
              </button>
            </a>
          </div>
          <p className="px-4 text-center tracking-wider w-[90%]">
            This site was built as a prototype for a mom and pop maple syrup
            business. The client's main goal was to have a site for customers to
            view their products, learn about the company's story, and contact
            the seller.
            <br />
            <br />
            TechStack: React, TailwindCSS, ReactTyped, Netlify
          </p>
        </div>
      </div>

      {/* card #3 Strolls */}
      <div
        className=" flex flex-col justify-center items-center  pb-5 m-2 w-[90%] 
                md:w-[45%]
                xl:w-[30%]"
      >
        {/* image  */}
        <div className="m-2 rounded-lg overflow-hidden">
          <a target="_blank" href="https://strolls.netlify.app/">
            <img
              className="w-[100%]  h-64 object-cover hover:shadow-lg hover:scale-105  hover:transition-all hover:duration-500"
              src={strollsDesk}
              alt="project"
            />
          </a>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl pt-2 text-center tracking-wide font-semibold">
            Strolls: a Walking Adventure
          </h1>
          {/* buttons section      */}
          <div className="flex flex-row  justify-around mx-auto py-2 w-[50%]">
            <a target="_blank" href="https://strolls.netlify.app/">
              <button className=" tracking-wide border-[1px] border-white rounded-md px-3 py-1 hover:bg-white hover:text-black hover:duration-300 hover:ease-in-out">
                Live Site
              </button>
            </a>
            <a
              target="_blank"
              href="https://github.com/kalikokalikova/adventure"
            >
              <button className=" tracking-wide border-[1px] border-white rounded-md px-3 py-1 hover:bg-white hover:text-black  hover:duration-300 hover:ease-in-out">
                Github
              </button>
            </a>
          </div>
          <p className="px-6 text-center tracking-wide w-[90%]">
            This web app was built during the Girl Develop It Hackathon November
            16-19 2022 and won Second Place. The concept for the app was to make
            walking fun and interactive by pairing walking with the thrill of
            discovery to create a deeper connection to our neighborhoods,
            leading to a happier, healthier community.
            <br />
            <br />
            TechStack: React Front End with TailwindCSS, Mapbox. Back End with
            Ruby on Rails. Design with Figma.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
