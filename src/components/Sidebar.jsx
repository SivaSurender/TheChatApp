import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <Navbar />
      <Search />
    </div>
  );
};

export default Sidebar;
