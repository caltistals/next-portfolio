import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed z-10 w-screen bg-white border-b-2 md:sticky md:border-b-0 md:border-r-2 h-14 md:h-screen md:top-0 md:w-16">
      <div className="mt-5 ">
        <ul className="flex justify-around md:items-center md:flex-col md:justify-start">
          {/* Home Icon */}
          <li className="relative mb-5 group ">
            <Link href="/">
              <a>
                <svg
                  className="w-6 h-6 hover:text-blue-400 hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </a>
            </Link>
            <span
              className="w-[74px] invisible rounded text-[12px] 
              font-bold text-white py-1 bg-slate-600 md:-top-0 md:left-12
               group-hover:visible opacity-100 absolute text-center top-10  -left-6"
            >
              Home
            </span>
          </li>
          {/* About Me Icon */}
          <li className="relative mb-5 group">
            <Link href="/about">
              <a>
                <svg
                  className="w-6 h-6 hover:text-blue-500 hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </a>
            </Link>
            <span
              className="w-[74px] invisible rounded text-[12px] 
              font-bold text-white py-1 bg-slate-600 md:-top-0 md:left-12 top-10  -left-6
               group-hover:visible opacity-100 absolute text-center "
            >
              About Me
            </span>
          </li>
          {/* Portfolio Icon */}
          <li className="relative mb-5 group">
            <svg
              className="w-6 h-6 hover:text-blue-500 hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
            <span
              className="w-[74px] invisible rounded text-[12px] 
              font-bold text-white py-1 bg-slate-600 md:-top-0 md:left-12 top-10 -left-6
               group-hover:visible opacity-100  absolute text-center"
            >
              Portfolio
            </span>
          </li>
          {/* Articles Icon */}
          <li className="relative mb-5 group">
            <Link href="/articles">
              <a>
                <svg
                  className="w-6 h-6 hover:text-blue-500 hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
                <span
                  className="w-[74px] invisible rounded text-[12px] 
              font-bold text-white py-1 bg-slate-600 md:-top-0 md:left-12 top-10 -left-6
               group-hover:visible opacity-100 absolute text-center"
                >
                  Articles
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
