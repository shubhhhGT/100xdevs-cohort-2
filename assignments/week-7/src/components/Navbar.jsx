import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-10">
      <div className="w-screen flex justify-between items-center px-4 py-2 hover:cursor-pointer bg-slate-100 shadow">
        <Link to={"/"}>Week-7</Link>
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
};

export default Navbar;
