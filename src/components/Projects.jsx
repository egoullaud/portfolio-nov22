import React from "react";
import RaineDesk from "../assets/raineg-desk.jpg";
import { AiOutlineDown } from "react-icons/ai";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import gamesDesk from "../assets/games-desk.jpg";
import gfmsDesk from "../assets/gfms-desk.jpg";
import strollsDesk from "../assets/strolls-desk.jpg";
import sixpo from "../assets/sixpo.jpg";

function Icon({ id, open }) {
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
    <div
      className="
    flex justify-center md:items-start items-center
    flex-col 
    md:flex-row md:flex-wrap
    h-full
    "
    >
      {/* sixpo */}
      <div
        className="bg-white text-black pb-5 m-2 w-[90%] rounded-md shadow-xl
                md:w-[45%]
                xl:w-[30%]"
      >
        {/* image  */}
        <div className="m-2 rounded-lg">
          <a target="_blank" href="https://sixpo.ca/">
            <img className="w-[100%] rounded-md" src={sixpo} alt="project" />
          </a>
        </div>
        {/* ACCORDION  */}
        <Fragment>
          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="ml-6 w-[90%]"
            >
              Sixpo.ca
            </AccordionHeader>
            <AccordionBody className="mx-5 mt-5 w-[90%] overflow-y-scroll">
              Fullstack website for a charity event educating disabled folks
              about sexuality and wellness. I designed the site with Figma,
              built the front end with React, Next, and TailwindCSS, and set up
              a backend with Hygraph(GraphCMS), and GraphQL. I used version
              control with git and GitHub, and the website is hosted on Vercel.
              <br />
              <br />
              TechStack: React, TailwindCSS, GraphCMS, GraphQL, Figma, Netlify
            </AccordionBody>
          </Accordion>
        </Fragment>

        {/* buttons section      */}
        <div className="flex flex-row  justify-around mx-auto pt-5 w-[50%]">
          <a target="_blank" href="https://sixpo.ca/">
            <button className="border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out">
              Live Site
            </button>
          </a>
          <a target="_blank" href="https://github.com/egoullaud/sixpo-nextjs">
            <button className="border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white  hover:duration-300 hover:ease-in-out">
              Github
            </button>
          </a>
        </div>
      </div>
      {/* card #1 Gamerverse */}
      <div
        className="bg-white text-black pb-5 m-2 w-[90%] rounded-md shadow-xl
                md:w-[45%]
                xl:w-[30%]"
      >
        {/* image  */}
        <div className="m-2 rounded-lg">
          <a target="_blank" href="https://gamerverse.netlify.app/">
            <img
              className="w-[100%] rounded-md"
              src={gamesDesk}
              alt="project"
            />
          </a>
        </div>
        {/* ACCORDION  */}
        <Fragment>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="ml-6 w-[90%]"
            >
              Gamerverse API Site
            </AccordionHeader>
            <AccordionBody className="mx-5 mt-5 w-[90%]  overflow-y-scroll">
              I created this as a personal project to play with the RAWG API. It
              is a multi-page fully responsive website that allows users to
              search video games, see upcoming and popular games, look at games
              by category and view individual game information.
              <br />
              <br />
              TechStack: React, TailwindCSS, API, Netlify
              <br />
              <br />
            </AccordionBody>
          </Accordion>
        </Fragment>

        {/* buttons section      */}
        <div className="flex flex-row  justify-around mx-auto pt-5 w-[50%]">
          <a target="_blank" href="https://gamerverse.netlify.app/">
            <button className="border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out">
              Live Site
            </button>
          </a>
          <a target="_blank" href="https://github.com/egoullaud/game-api">
            <button className="border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white  hover:duration-300 hover:ease-in-out">
              Github
            </button>
          </a>
        </div>
      </div>

      {/* card #2 GFMS */}
      <div
        className="bg-white text-black pb-5 m-2 w-[90%] rounded-md shadow-xl
                md:w-[45%]
                xl:w-[30%]"
      >
        {/* image  */}
        <div className="m-2 rounded-lg">
          <a target="_blank" href="https://grandmafinchmaplesyrup.netlify.app/">
            <img className="w-[100%] rounded-md" src={gfmsDesk} alt="project" />
          </a>
        </div>
        {/* ACCORDION  */}
        <Fragment>
          <Accordion open={open === 2} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="ml-6 w-[90%]"
            >
              Grandma Finch's Maple Syrup
            </AccordionHeader>
            <AccordionBody className="mx-5 mt-5 w-[90%] overflow-y-scroll">
              This site was built as a prototype for a mom and pop maple syrup
              business. The client's main goal was to have a site for customers
              to view their products, learn about the company's story, and
              contact the seller.
              <br />
              <br />
              TechStack: React, TailwindCSS, ReactTyped, Netlify
            </AccordionBody>
          </Accordion>
        </Fragment>

        {/* buttons section      */}
        <div className="flex flex-row  justify-around mx-auto pt-5 w-[50%]">
          <a target="_blank" href="https://grandmafinchmaplesyrup.netlify.app/">
            <button className="border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out">
              Live Site
            </button>
          </a>
          <a target="_blank" href="https://github.com/egoullaud/gfms-site">
            <button className="border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white  hover:duration-300 hover:ease-in-out">
              Github
            </button>
          </a>
        </div>
      </div>
      {/* card #3 Strolls */}
      <div
        className="bg-white text-black pb-5 m-2 w-[90%] rounded-md shadow-xl
                md:w-[45%]
                xl:w-[30%]"
      >
        {/* image  */}
        <div className="m-2 rounded-lg">
          <a target="_blank" href="https://github.com/kalikokalikova/adventure">
            <img
              className="w-[100%] rounded-md"
              src={strollsDesk}
              alt="project"
            />
          </a>
        </div>
        {/* ACCORDION  */}
        <Fragment>
          <Accordion open={open === 3} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="ml-6 w-[90%]"
            >
              Strolls: a Walking Adventure
            </AccordionHeader>
            <AccordionBody className="mx-5 mt-5 w-[90%] overflow-y-scroll">
              This web app was built during the Girl Develop It Hackathon
              November 16-19 2022 and won Second Place. The concept for the app
              was to make walking fun and interactive by pairing walking with
              the thrill of discovery to create a deeper connection to our
              neighborhoods, leading to a happier, healthier community.
              <br />
              <br />
              TechStack: React Front End with TailwindCSS, Mapbox. Back End with
              Ruby on Rails. Design with Figma.
            </AccordionBody>
          </Accordion>
        </Fragment>

        {/* buttons section      */}
        <div className="flex flex-row  justify-around mx-auto pt-5 w-[50%]">
          <a target="_blank" href="https://strolls.netlify.app/">
            <button className="border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out">
              Live Site
            </button>
          </a>
          <a target="_blank" href="https://github.com/kalikokalikova/adventure">
            <button className="border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white  hover:duration-300 hover:ease-in-out">
              Github
            </button>
          </a>
        </div>
      </div>

      {/* card #5 Photography */}
      <div
        className="bg-white text-black pb-5 m-2 w-[90%] rounded-md shadow-xl
                md:w-[45%]
                xl:w-[30%]"
      >
        {/* image  */}
        <div className="m-2 rounded-lg">
          <a target="_blank" href="http://rainegauthier.com/">
            <img
              className="w-[100%] rounded-md"
              src={RaineDesk}
              alt="project"
            />
          </a>
        </div>
        {/* ACCORDION  */}
        <Fragment>
          <Accordion open={open === 5} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="ml-6 w-[90%]"
            >
              Raine Gauthier Photography
            </AccordionHeader>
            <AccordionBody className="mx-5 mt-5 w-[90%] overflow-y-scroll">
              A ten-page photography gallery site built by hand for a local
              artist. The site is fully responsive and features a modal pop-up
              for easy photo viewing, contact forms, and hover effects over
              gallery options and buttons.
              <br />
              <br />
              TechStack: HTML, CSS, JavaScript
            </AccordionBody>
          </Accordion>
        </Fragment>

        {/* buttons section      */}
        <div className="flex flex-row  justify-around mx-auto pt-5 w-[50%]">
          <a target="_blank" href="http://rainegauthier.com/">
            <button className="border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out">
              Live Site
            </button>
          </a>
          <a target="_blank" href="github.com">
            <button className="border-[1px] border-black rounded-md px-2 hover:bg-black hover:text-white  hover:duration-300 hover:ease-in-out">
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
