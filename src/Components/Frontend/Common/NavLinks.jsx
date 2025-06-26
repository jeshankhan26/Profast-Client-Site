import React from 'react';
import { NavLink } from 'react-router';

const NavLinks = () => {
  return (
    <>
      <li><NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'bg-[#CAEB66] text-white rounded-2xl px-4 py-2'
              : 'hover:text-[#CAEB66]'
          }>Home</NavLink></li>
      <li><a>Service</a></li>
      {/* <li><a>Coverage</a></li> */}
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'bg-[#CAEB66] text-white rounded-2xl px-4 py-2'
              : 'hover:text-[#CAEB66]'
          }
        >
          About Us
        </NavLink>
      </li>
      {/* <li><a>Pricing</a></li>
      <li><a>Be a Rider</a></li> */}
    </>
  );
};

export default NavLinks;
