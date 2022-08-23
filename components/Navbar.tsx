import React from "react";
import Link from "next/link";
import { siteConfig } from "../site.config";

const Navbar = () => {
  return (
    <nav className="w-full py-3 text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light">
      <div className="flex flex-wrap items-center justify-between w-full max-w-2xl px-6 mx-auto container-fluid">
        <div
          className="flex flex-wrap justify-between w-full rounded-md bg-grey-light"
          aria-label="breadcrumb"
        >
          <Link href="/">
            <a className="text-left text-gray-500 hover:text-gray-600">
              {siteConfig.title}
            </a>
          </Link>
          <ul className="flex flex-col flex-wrap justify-between border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            <li>
              <a href="">works</a>
            </li>
            <li>
              <a href="">skils</a>
            </li>
            <li>
              <a href="">posts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
