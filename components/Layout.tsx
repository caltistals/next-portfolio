import React from "react";
import { LayoutProps } from "../types/types";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex w-full mx-auto ">
        <Navbar />
        <main className="w-full px-4 pb-12">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
