import React, { useState } from "react";
import logo from "./Images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full flex justify-center fixed top-4 left-0 z-50">
      {/* Navbar container with fully rounded ends */}
      <div className="w-[95%] max-w-[1400px] flex items-center justify-between bg-[#d9f3ff] rounded-full shadow-md px-6 py-3">
        
        
        <div className="flex-1 bg-[#102b4e] px-12 py-0 rounded-l-full">
          <img src={logo} alt="SmileExpert" className="h-16 md:h-16" />
        </div>

        
        <ul className="hidden md:flex items-center gap-6 text-[#0f172a] font-medium">
          {/* About */}
          <li className="relative group cursor-pointer">
            About <span className="ml-1">▾</span>
            <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block z-50">
              <li className="px-4 py-2 hover:bg-gray-100">Our Story</li>
              <li className="px-4 py-2 hover:bg-gray-100">Mission & Vision</li>
              <li className="px-4 py-2 hover:bg-gray-100">Team</li>
            </ul>
          </li>

          
          <li className="relative group cursor-pointer">
            Dental Problems <span className="ml-1">▾</span>
            <ul className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded-md hidden group-hover:block z-50">
              <li className="px-4 py-2 hover:bg-gray-100">Cavities</li>
              <li className="px-4 py-2 hover:bg-gray-100">Gum Disease</li>
              <li className="px-4 py-2 hover:bg-gray-100">Tooth Sensitivity</li>
            </ul>
          </li>

          
          <li className="relative group cursor-pointer">
            Treatments <span className="ml-1">▾</span>
            <ul className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded-md hidden group-hover:block z-50">
              <li className="px-4 py-2 hover:bg-gray-100">Teeth Whitening</li>
              <li className="px-4 py-2 hover:bg-gray-100">Root Canal</li>
              <li className="px-4 py-2 hover:bg-gray-100">Dental Implants</li>
            </ul>
          </li>

          
          <li className="relative group cursor-pointer">
            Before & After <span className="ml-1">▾</span>
            <ul className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded-md hidden group-hover:block z-50">
              <li className="px-4 py-2 hover:bg-gray-100">Smile Gallery</li>
              <li className="px-4 py-2 hover:bg-gray-100">Case Studies</li>
            </ul>
          </li>

          
          <li className="relative group cursor-pointer">
            Patient Safety <span className="ml-1">▾</span>
            <ul className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded-md hidden group-hover:block z-50">
              <li className="px-4 py-2 hover:bg-gray-100">Hygiene Protocols</li>
              <li className="px-4 py-2 hover:bg-gray-100">Certified Staff</li>
            </ul>
          </li>

          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Blog</li>
        </ul>

        
        <div className="hidden md:flex gap-4">
          <button className="bg-[#0b2a4a] text-white px-6 py-2 rounded-full font-semibold">
            Call Now
          </button>
          <button className="bg-[#2fb5ff] text-white px-6 py-2 rounded-full font-semibold">
            Book Appointment
          </button>
        </div>

      
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-[#0f172a]">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

    
      {isOpen && (
        <ul className="md:hidden bg-[#d9f3ff] rounded-b-full px-6 pb-4 space-y-2">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Dental Problems</li>
          <li className="cursor-pointer">Treatments</li>
          <li className="cursor-pointer">Before & After</li>
          <li className="cursor-pointer">Patient Safety</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Blog</li>
          <div className="flex gap-4 mt-2">
            <button className="bg-[#0b2a4a] text-white px-6 py-2 rounded-full font-semibold">Call Now</button>
            <button className="bg-[#2fb5ff] text-white px-6 py-2 rounded-full font-semibold">Book Appointment</button>
          </div>
        </ul>
      )}
    </nav>
  );
}
