import React from "react";
import NavLinks from "./NavLinks";
import logo1 from "../../../../public/assets/logo.png";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link, Links } from "react-router";

const Navbar = () => {
  const CustomArrowIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="black" />
      <path
        d="M9 15L15 9M15 9H10M15 9V14"
        stroke="#CAEB66"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
      <div className="lg:mx-20 lg:pt-5">
        <div className="navbar bg-white rounded-2xl shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <NavLinks></NavLinks>
              </ul>
            </div>
            <div className="flex items-center gap-0 p-0 m-0">
              <img src={logo1} alt="" className="w-6 h-7 p-0 m-0" />
              <a className="btn btn-ghost text-xl p-0 m-0">Fast-Track</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavLinks></NavLinks>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <Link to={"login"} className="btn bg-white text-black shadow-none border-gray-300">
              Sign In
            </Link>
            <Link to={"register"} className="btn bg-[#CAEB66] border-none text-black">
              Sign Up{" "}
            </Link>

            <CustomArrowIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
