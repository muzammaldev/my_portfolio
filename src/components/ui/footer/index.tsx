import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-blue-500  shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <li className="bg-clip-text text-transparent bg-gradient-to-r from-white to-red-700 font-bold uppercase text-xl cursor-pointer max-sm:hidden">
            Portfolio
          </li>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-white">
                text-white Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-white text-sm sm:text-center dark:text-gray-400 max-sm:text-center">
          © 2024{" "}
          <a
            href="https://flowbite.com/"
            className="hover:un text-whitederline"
          >
            Portfolio
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
