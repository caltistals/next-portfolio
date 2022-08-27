import React from "react";
import { LayoutProps } from "../types/types";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden bg-emerald-50">
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto ">
        <Navbar />
        <main className="w-full px-4 pb-12">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
