import React from "react";
import Link from "next/link";
import { siteConfig } from "../site.config";

const Navbar = () => {
  return (
    <nav className="w-full py-3 text-gray-500 focus:text-gray-700 navbar navbar-expand-lg navbar-light">
      <div className="flex flex-wrap items-center justify-between w-full max-w-3xl px-6 mx-auto container-fluid">
        <div
          className="flex flex-wrap justify-between w-full rounded-md bg-grey-light"
          aria-label="breadcrumb"
        >
          <Link href="/">
            <a className="flex text-xl text-left text-gray-500 hover:text-gray-600">
              <svg
                className="w-6 h-6 pt-1 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                ></path>
              </svg>
              {siteConfig.title}
            </a>
          </Link>
          {/* Hamburger Button */}
          <button className="inline-flex items-center p-1 ml-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col flex-wrap justify-between border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white ">
              <li>
                <Link href="#">
                  <a className="hover:text-gray-700">works</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-gray-700">skils</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-gray-700">posts</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
