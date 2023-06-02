import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto bg-white">
      <Navbar />
      <div className="w-full h-screen overflow-auto">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
