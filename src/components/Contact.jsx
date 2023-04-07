import React from "react";

function Contact() {
  return (
    <div className="mx-[1rem] md:mx-[4rem] flex flex-col items-center bg-black bg-opacity-70">
      <h1 className="text-center text-white font-bold text-3xl mt-[2rem] font-Lora">
        Contact Me
      </h1>

      <form
        action="https://formsubmit.co/aa9ace4fce53046497cccee0c34e5c3f "
        method="POST"
        className="space-y-8 md:px-[4rem] px-[2rem] flex flex-col w-[90%] lg:w-[60%]"
      >
        <input type="text" name="_honey" className="hidden" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://egoullaud-portfolio.netlify.app/#home"
        />
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
            placeholder="name@email.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
            placeholder="Subject"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            name="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
            placeholder="Leave a message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-5 mx-auto border-[1px] text-white border-white rounded-md px-3 py-2 hover:bg-black hover:text-white hover:scale-110 hover:duration-300 hover:ease-in-out"
        >
          Send message
        </button>
      </form>
      <h2 className="text-center text-white font-bold text-2xl my-[4rem]">
        Thanks for dropping by.
      </h2>
    </div>
  );
}

export default Contact;
