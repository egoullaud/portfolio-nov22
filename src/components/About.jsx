import React from "react";
import prof1 from "../assets/profile/profilepic4.jpg";
import prof2 from "../assets/profile/profilepic3.jpg";
import cert from "../assets/Elizabeth-Goullaud-certificate-bw.pdf";

function About() {
  return (
    <div className="my-[4rem] text-white py-[4rem] mx-[4rem] bg-black bg-opacity-70">
      <div className=" m-4 ">
        <div className=" flex flex-col md:flex-row justify-center  md:justify-around items-center m-2 xl:mx-[10rem] lg:mx-[5rem] md:mx-[3rem]">
          <div className="flex flex-col items-center  w-[100%] md:w-[40%] lg:w-[60%] overflow-hidden">
            <h1 className="text-5xl mx-4 md:mx-[4rem] text-center font-bold my-5 font-Lora">
              Hiya, I'm Lee!
            </h1>
            <img
              className="w-[80%] md:hidden rounded-full my-4 md: mx-auto object-cover"
              src={prof2}
              alt="profile pic"
            />
            <img
              className="hidden md:flex md:w-[100%] lg:w-[95%] xl:w-[85%] rounded-md my-4 object-cover"
              src={prof1}
              alt="profile pic"
            />
          </div>

          <p className="md:w-[70%] py-5 tracking-wide">
            I'm a Full Stack Developer with extensive experience building and
            maintaining websites using a variety of languages, frameworks,
            databases, and libraries. I specialize in JavaScript, React,
            Express, Node, Next, GraphQL, SQL, HTML, CSS, and Git, and I'm
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
            innovative, independent, and detail-oriented. I'm a problem-solver
            at heart and have extensive leadership experience managing projects
            and teams of all sizes.
            <br /> <br />
            Currently, I'm working as a freelance Full Stack Developer, where I
            design, build, deploy, and maintain websites for clients using
            Figma, React, MERN, PostgreSQL, Next, GraphQL, headless CMS, and
            TailwindCSS. Some of my recent projects include
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
            Prior to my career in web development, I owned and operated Flowers
            By Elizabeth, where I developed and managed 350+ projects and 30+
            long-term contracts. During COVID, I grew my client list by 40%, and
            I hired, trained, and mentored a team of 3 junior gardeners.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-xl md:text-2xl mx-4 md:mx-[4rem] text-center lg:mx-[10rem] tracking-wide font-Lora italic">
            {" "}
            With a deep passion for web development and a commitment to
            delivering top-notch solutions, I am a Full Stack Developer with
            expertise in the latest modern technologies like React, Next,
            GraphQL, and Node. Whether you're looking for a custom website, a
            responsive user interface, or a robust backend solution, I'm here to
            help you achieve your goals and bring your ideas to life.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
