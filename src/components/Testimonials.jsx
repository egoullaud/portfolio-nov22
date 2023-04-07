import React from "react";

function Testimonials() {
  return (
    <div className="text-white py-[4rem] mx-[8rem] bg-black bg-opacity-70">
      <div>
        <h1 className="text-center font-bold text-3xl pb-5 font-Lora">
          Testimonials
        </h1>
      </div>
      <div className="mx-10 mb-4 border-[1px] border-white pb-0 p-5 lg:mx-[15rem]">
        <p>
          Working with Lee has been an incredible experience. I appreciate her
          attention to detail and the way she was able to bring my vision to
          life, even when I started off unsure of what exactly that would look
          like. She was quick to answer every question I had with patience and
          kindness. Lee truly went above and beyond to help guide me through the
          entire process. She was able to take my scattered content and create
          an organized, clean and professional website that is easy to navigate
          - and looks amazing!
          <br />{" "}
        </p>
        <p className="text-right pb-5">
          - Raine Gauthier, Raine Gauthier Photography
        </p>
      </div>
      <div className="mx-10 border-[1px] border-white pb-0 p-5 lg:mx-[15rem]">
        <p>
          Everyone’s been celebrating our new website’s design and layout. I’ve
          been told meetings have been paused as folks gathered around to check
          it out. We received a flood of excited comments such as “THIS WEBSITE
          IS INCREDIBLE” and “this is SOOOOOOO GOOOOOOOOODDDDDDDDDDD!” It goes
          without saying you should only hire Lee if you are prepared for folks’
          full caps enthusiasm
          <br />{" "}
        </p>
        <p className="text-right pb-5">
          - Sharon Smiley, Community Builder and Facilitator at Building Caring
          Communities
        </p>
      </div>
    </div>
  );
}

export default Testimonials;
