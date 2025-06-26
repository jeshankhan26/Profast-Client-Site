import React from 'react';
import logo from '/assets/logo.png'; // Replace with your actual logo path
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
  <div className='bg-[#EAECED] pb-5'>
      <footer className="bg-gray-900  text-white py-12 px-6 lg:mx-10 rounded-3xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Fast-Track Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold">Fast-Track</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-10 text-sm lg:text-base justify-between flex-1">
          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Delivery</a></li>
              <li><a href="#" className="hover:underline">Tracking</a></li>
              <li><a href="#" className="hover:underline">Logistics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Coverage</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Cities</a></li>
              <li><a href="#" className="hover:underline">International</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">About Us</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Company</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">More</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
          <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-600"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default Footer;
