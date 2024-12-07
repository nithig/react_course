import React from "react";

export const Secnavbar = () => {
  return (
    <div>
      <div>
        <div className="container flex justify-between items-center bg-slate-300 shadow-md p-3 h-20 ">
          <div className="container font-poppins flex gap-5 flex-row justify-start p-2 ">
            <a
              href="#"
              className="font-bold text-teal-400 px-2 py-1 rounded-md hover:text-teal-600"
            >
              Home
            </a>
            <a
              href="#"
              className="font-bold text-teal-400 px-2 py-1 rounded-md hover:text-teal-600"
            >
              About
            </a>
            <a
              href="#"
              className="font-bold text-teal-400 px-2 py-1 rounded-md hover:text-teal-600"
            >
              Contact
            </a>
            <a
              href="#"
              className="font-bold text-teal-400 px-2 py-1 rounded-md hover:text-teal-600"
            >
              Services
            </a>
            <a
              href="#"
              className="font-bold text-teal-400 px-2 py-1 rounded-md hover:text-teal-600"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
