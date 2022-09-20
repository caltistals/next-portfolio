import React from "react";
import { LayoutProps } from "../types/types";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative mb-0">
      <div className="flex flex-col md:flex-row">
        <Navbar />
        <main className="flex-1 px-4 pb-12 mt-12 md:mt-0">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
