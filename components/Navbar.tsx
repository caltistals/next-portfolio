import React from "react";
import Link from "next/link";
import { siteConfig } from "../site.config";

const Navbar = () => {
  return (
    <nav className="w-screen border-b-2 md:border-r-2 h-14 md:h-screen md:w-14">
      <div className="mt-5 ">
        <ul className="sticky top-0 flex h-screen md:items-center md:flex-col">
          <li className="relative mb-5 group ">
            <svg
              className="w-6 h-6 hover:text-blue-400 hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <span
              className="opacity-0 w-[74px] invisible rounded text-[12px] 
              font-bold text-white py-1 bg-slate-600 -top-0 left-11
               group-hover:visible opacity-100 absolute text-center"
            >
              Home
            </span>
          </li>
          <li className="relative mb-5 group">
            <svg
              className="w-6 h-6 hover:text-blue-400 hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
            <span
              className="opacity-0 w-[74px] invisible rounded text-[12px] 
              font-bold text-white py-1 bg-slate-600 -top-0 left-11
               group-hover:visible opacity-100 absolute text-center"
            >
              About Me
            </span>
          </li>
          <li className="relative mb-5 group">
            <svg
              className="w-6 h-6 hover:text-blue-400 hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
            <span
              className="opacity-0 w-[74px] invisible rounded text-[12px] 
              font-bold text-white py-1 bg-slate-600 -top-0 left-11
               group-hover:visible opacity-100 absolute text-center"
            >
              Portfolio
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
