import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div id="about">
      <div className="w-full max-w-7xl lg:px-4 mx-auto sm:px-8 mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          About Me
        </h2>
        <blockquote className="relative grid items-center bg-white shadow-xl md:grid-cols-3 rounded-xl">
          <div className="relative h-full">
            <img
              className="hidden object-cover  rounded-l-xl md:block absolute h-full w-full"
              style={{ clipPath: "polygon(0 0%, 100% 0%, 75% 100%, 0% 100%)" }}
              src="/images/about.png"
            />
          </div>
          <article className="relative p-6 md:p-8 md:col-span-2">
            <div className="space-y-8">
              <p className="text-base sm:leading-relaxed md:text-lg">
                I am a dedicated MERN Stack Developer with expertise in creating
                dynamic and responsive web applications. With a strong
                foundation in MongoDB, Express.js, React, and Node.js, I
                specialize in building full-stack applications that are both
                efficient and scalable. My passion lies in writing clean,
                maintainable code and solving complex problems. Whether it's
                developing RESTful APIs, implementing real-time features, or
                creating intuitive user interfaces, I am committed to delivering
                high-quality solutions that meet the needs of both clients and
                users. Let's build something amazing together!
              </p>
              <footer className="flex items-center space-x-4 md:space-x-0">
                <img
                  className="w-12 h-12 rounded-full md:hidden object-cover object-bottom"
                  src="/images/about.png"
                />
                <span className="font-bold text-lg">M:Muzammal</span>
              </footer>
            </div>
          </article>
        </blockquote>
      </div>
    </div>
  );
};

export default About;
