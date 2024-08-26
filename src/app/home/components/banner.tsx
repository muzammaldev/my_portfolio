"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="relative flex items-center justify-center py-24 bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://bairesdev.mo.cloudinary.net/blog/2023/09/How-Many-Web-Developers-in-the-World-1.jpg?tx=w_1920,q_auto"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative text-center p-8 rounded-lg  shadow-lg lg:w-1/2">
        {/* <h1 className="text-3xl font-bold mb-4 text-white">Hi I’m Muzammal</h1> */}
        <h1 className="text-3xl font-bold mb-4 text-white">
          <Typewriter
            words={["Hi I’m Muzammal", "I’m Mern Stack developer"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="mb-6 text-white">
          A MERN Stack Developer builds web applications using MongoDB,
          Express.js, React.js, and Node.js. They handle both front-end and
          back-end development, ensuring smooth integration and functionality
          across the stack.
        </p>
        <a href="#contect">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
