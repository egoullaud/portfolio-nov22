import React from "react";
import prof1 from "../assets/profile/profilepic4.jpg";
import prof2 from "../assets/profile/profilepic3.jpg";
import cert from "../assets/Elizabeth-Goullaud-certificate-bw.pdf";

function About() {
  return (
    <div className="mb-[4rem] text-white pb-[4rem] pt-[1rem] lg:mx-[4rem] mx-[1rem] bg-black bg-opacity-70">
      <h1 className="text-5xl md:mx-[4rem] text-center font-bold md:my-5 font-Lora">
        Hiya, I'm Lee!
      </h1>
      <div className=" flex flex-col lg:flex-row justify-center  md:justify-around items-center m-2 xl:mx-[10rem] lg:mx-[5rem] md:mx-[3rem]">
        <div className="flex flex-col items-center md:justify-start w-[100%] md:w-[40%] lg:w-[60%] overflow-hidden">
          <img
            className="w-[100%] md:hidden rounded-full my-4 md: mx-auto object-cover"
            src={prof2}
            alt="profile pic"
          />
          <img
            className="hidden md:flex md:w-[100%] lg:w-[95%] xl:w-[85%] rounded-md my-4 object-cover"
            src={prof1}
            alt="profile pic"
          />
        </div>

        <p className="md:w-[95%] py-5 tracking-wide md:tracking-wider text-center lg:text-left">
          I'm a Full Stack Developer in Vancouver, BC with extensive experience
          building and maintaining websites using a variety of languages,
          frameworks, databases, and libraries. I specialize in JavaScript,
          React, Express, Node, Next, GraphQL, SQL, HTML, CSS, and Git, and I'm
          proficient in working with databases such as PostgreSQL, MongoDB,
          headless CMS(Contentful, GraphCMS), and Cloudinary.
          <br /> <br />
          In addition to my technical skills, I have experience with libraries
          like Bootstrap, Apollo, Axios, GraphQL-Request, Tailwind CSS, and
          Material UI. I'm also well-versed in debugging, documentation, code
          review, agile, cloud platforms, UX design, Figma, web accessibility,
          REST APIs, GitHub, Visual Studio Code, Vercel, Netlify, Slack, and
          Linux.
          <br /> <br />
          When working with clients, I prioritize effective communication and
          collaboration, and I pride myself on being highly adaptable,
          innovative, independent, and detail-oriented. I'm a problem-solver at
          heart and have extensive leadership experience managing projects and
          teams of all sizes.
          <br /> <br />
          Currently, I'm working as a freelance Full Stack Developer, where I
          design, build, deploy, and maintain websites for clients using Figma,
          React, MERN, PostgreSQL, Next, GraphQL, headless CMS, and TailwindCSS.
          Some of my recent projects include
          <a className="font-bold mx-1" href="https://sixpo.ca/">
            SIXpo
          </a>{" "}
          and{" "}
          <a
            className="font-bold mx-1"
            href="https://rainegauthier.vercel.app/"
          >
            Raine Gauthier Photography.
          </a>{" "}
          <br /> <br />
          Fun Fact: Prior to my work as a web developer, I was an entrepreneur
          in the environmental industry! I owned and operated Flowers By
          Elizabeth, a gardening and landscape company. I designed and
          maintained gardens and farms all over Vancouver, and the Sunshine
          Coast, BC. I also hold a Bachelors of Science from the University of
          British Columbia, and am published in the Journal of Ornithology.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-xl md:text-2xl mx-4 md:mx-[4rem] text-center lg:mx-[10rem] tracking-wide font-Lora italic">
          {" "}
          With a deep passion for web development and a commitment to delivering
          top-notch solutions, I am a Full Stack Developer with expertise in the
          latest modern technologies like React, Next, GraphQL, and Node.
          Whether you're looking for a custom website, a responsive user
          interface, or a robust backend solution, I'm here to help you achieve
          your goals and bring your ideas to life.
        </h1>
      </div>
    </div>
  );
}

export default About;
