import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto bg-white">
      <Navbar />
      <div className="w-full h-screen overflow-auto">{children}</div>
    </div>
  );
}

export default Layout;
