import React from "react";
import { LayoutProps } from "../types/types";
import Navbar from "./Navbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" bg-pale-yellow-orange">
      <div className="flex flex-col lg:flex-row">
        <Navbar />
        <main className="flex-1 px-4 pb-12 mt-12 lg:mt-0">
          <div className="w-full max-w-4xl">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
