import React from "react";
import { LayoutProps } from "../types/types";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Navbar />
        <main className="flex-1 px-4 pb-12">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
