import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBolt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#52A397] text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

       
        <div className="flex space-x-6 text-xl mb-4 md:mb-0">
          <FaFacebook className="cursor-pointer hover:opacity-80 transition" />
          <FaTwitter className="cursor-pointer hover:opacity-80 transition" />
          <FaInstagram className="cursor-pointer hover:opacity-80 transition" />
          <FaBolt className="cursor-pointer hover:opacity-80 transition" />
          <FaLinkedin className="cursor-pointer hover:opacity-80 transition" />
        </div>

       
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
