import React from "react";
import { AiFillHome, AiOutlineDown } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import ink3Short from "../assets/ink3short.mp4";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Stack from "../components/Stack";
import Testimonials from "../components/Testimonials";
import Typed from "react-typed";

function Home() {
  return (
    <div className="bg-fixed py-10 font-Poppins scroll-smooth">
      <div className="fixed w-auto min-w-full min-h-full max-x-none max-y-none z-[-5] bg-black bg-opacity-30">
        {" "}
      </div>
      <video
        className="fixed top-0 z-[-10] w-auto min-w-full min-h-full max-x-none max-y-none"
        autoPlay
        loop
        muted
        src={ink3Short}
        type="video/mp4"
      ></video>

      <section className="h-[100vh] text-white" id="home">
        <div className="flex flex-col justify-center items-center h-[50vh]">
          <h1 className="text-white mb-5 font-bold text-7xl text-center mx-[5rem] tracking-wider mt-[5rem]">
            {" "}
            Hey! Welcome!{" "}
          </h1>
          <h2 className="py-4 text-5xl text-center tracking-wide font-semibold leading-[1.3]">
            The name's Lee, AKA friendlyDevBro. <br />
            I'm here to serve all your web-related needs
          </h2>
          <h2 className="my-5 text-3xl font-Lora">
            {" "}
            <Typed
              className="ml-2"
              strings={[
                "Front End Developer",
                "Full Stack Developer",
                "Software Engineer",
              ]}
              typeSpeed={120}
              backSpeed={120}
              loop
            />{" "}
          </h2>
        </div>
        <div className="flex-col justify-center items-center text-center w-[100%]">
          <div className="flex flex-row w-[100%] justify-center mx-auto mt-5">
            <button className="mr-5 border-[1px] text-xl border-white rounded-md px-3 py-3 hover:border-black hover:bg-black hover:bg-opacity-70 hover:text-white hover:duration-300 hover:ease-in-out">
              <a href="#about">About Me</a>
            </button>
            <button className="ml-5 border-[1px] text-xl border-white rounded-md px-4 py-3 hover:bg-black hover:border-black hover:bg-opacity-70 hover:text-white hover:duration-300 hover:ease-in-out">
              <a href="#projects">My Work</a>
            </button>
          </div>

          <div className="mt-[15vh] text-white flex flex-col justify-center items-center">
            <p className="text-xl font-bold mb-4">
              Keep scrolling to see my latest projects!
            </p>
            <p className="animate-bounce">
              <AiOutlineDown />
            </p>
          </div>
        </div>
      </section>
      <section id="projects" className=" w-[100%]">
        <div>
          <Projects />
        </div>
      </section>
      <section id="stack">
        <Stack />
      </section>
      <section id="about" className="w-[100%]">
        <About />
      </section>
      <section className="my-[10rem]" id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
