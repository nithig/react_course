import React from "react";
import Logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-slate-900 bg-opacity-80 py-2">
        <div className="container flex justify-between items-center lg:flex-row md:flex-row sm:flex-col ">
          <div>
            <a
              href="#"
              className="font-bold text-blue-600 text-2xl sm:text-3xl flex gap-2 items-center"
            >
              <img src={Logo} alt="Logo" className="w-20" />
              Cosmic Code
            </a>
          </div>
          <div className="flex-2 ">
            <div className="container font-poppins gap-7 p-2 flex lg:flex-row md:flex-row sm:flex-col">
              <a
                href="#"
                className="font-bold text-white px-2 py-1 hover:text-teal-600 hover:border-b-4 border-teal-600 transition duration-500 hover:scale-110"
              >
                Home
              </a>
              <a
                href="#"
                className="font-bold text-white px-2 py-1 hover:text-teal-600 hover:border-b-4 border-teal-600 transition duration-500 hover:scale-110"
              >
                About
              </a>
              <a
                href="#"
                className="font-bold text-white px-2 py-1 hover:text-teal-600 hover:border-b-4 border-teal-600 transition duration-500 hover:scale-110"
              >
                Contact
              </a>
              <a
                href="#"
                className="font-bold text-white px-2 py-1 hover:text-teal-600 hover:border-b-4 border-teal-600 transition duration-500 hover:scale-110"
              >
                Services
              </a>
              <a
                href="#"
                className="font-bold text-white px-2 py-1 hover:text-teal-600 hover:border-b-4 border-teal-600 transition duration-500 hover:scale-110"
              >
                Projects
              </a>
            </div>
          </div>

          {/* search bar and order button */}
          <div>
            <div className="group">
              <input
                type="search"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[250px] transition-all duration-350 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
    </div>
  );
};

// bg-gradient-to-r from-pink-300 via-orange-200 to-red-400
