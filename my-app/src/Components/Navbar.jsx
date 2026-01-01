import React from "react";
<<<<<<< HEAD
import logo from "./Images/logo.png";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50">
      <div className="w-[95%] max-w-[1450px] h-[100px] bg-[#d9f4ff] rounded-full shadow-xl flex items-center">

      
        <div className="h-full flex items-center px-14 ml-0 bg-[#0b2e4f] rounded-full">
          <img src={logo} alt="SmileExpert" className="h-12" />
        </div>

        
        <ul className="flex items-center gap-8 ml-10 text-[15px] font-medium text-[#0f172a]">

          <NavItem title="About">
            <DropdownItem text="Meet The Team" />
            <DropdownItem text="Our Values" />
          </NavItem>

          <NavItem title="Dental Problems">
            <DropdownItem text="Teeth&Gums" />
            <DropdownItem text="Gum Disease" />
            <DropdownItem text="Yellow Teeth" />
          </NavItem>

          <NavItem title="Treatments">
            <DropdownItem text="Braces" />
            <DropdownItem text="Implants" />
            <DropdownItem text="Whitening" />
          </NavItem>

          <NavItem title="Before & After">
            <DropdownItem text="Gallery" />
            <DropdownItem text="Cases" />
          </NavItem>

          <NavItem title="Patient Safety">
            <DropdownItem text="Sterilization" />
            <DropdownItem text="Protocols" />
          </NavItem>

          <li className="cursor-pointer hover:text-sky-600">Contact</li>
          <li className="cursor-pointer hover:text-sky-600">Blog</li>
        </ul>

        
        <div className="ml-auto flex items-center gap-4 pr-6">
          <button className="px-6 py-2 rounded-full bg-[#0b3b6f] text-white font-semibold hover:bg-[#082c52] transition">
            Call Now
          </button>
          <button className="px-6 py-2 rounded-full bg-[#38bdf8] text-white font-semibold hover:bg-[#0ea5e9] transition">
            Book Appointment
          </button>
        </div>

      </div>
    </div>
  );
}


function NavItem({ title, children }) {
  return (
    <li className="relative group cursor-pointer">
      {/* MENU TEXT */}
      <div className="flex items-center gap-1 hover:text-sky-600">
        {title}
        <svg
          className="w-4 h-4 mt-[1px]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    
      <div
        className="
          absolute left-1/2 -translate-x-1/2 top-full mt-4
          w-52 bg-white rounded-xl shadow-lg
          hidden group-hover:block
        "
      >
        <div className="py-2">{children}</div>
      </div>
    </li>
  );
}


function DropdownItem({ children, heading = false }) {
  return (
    <li
      className={`px-4 py-2 ${
        heading
          ? "text-xs font-semibold text-gray-500 uppercase tracking-wide cursor-default"
          : "text-sm text-gray-700 hover:bg-sky-100 cursor-pointer"
      }`}
    >
      {children}
    </li>
  );
}


=======
import "./Navbar.css";
import logo from "./Images/logo.png";
import before from "./Images/before.jpg";
import circle from "./Images/circle.jpg";
import after from "./Images/after.jpg";
import braces from "./Images/braces.jpg";
import box from "./Images/box.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="nav-logo" />
      </div>

      <ul className="nav-menu">
        <li className="nav-item dropdown">
          About <span className="arrow">▾</span>
          <ul className="dropdown-menu">
            <div class="about-dropdown">
    <div class="about-left">
    <a href="#">Meet the Team</a>
    <a href="#">Our Values</a>
    </div>

    <div class="about-right">
    <img src={logo} alt="Logo" />
    </div>
    </div>
          </ul>
        </li>
<li className="nav-item dropdown dental-dropdown">
  Dental Problems <span className="arrow">▾</span>

  <div className="dental-popup">
    <div className="col">
      <h3>Teeth & Gums</h3>
      <a>Wisdom Teeth</a>
      <a>Broken Chipped Tooth</a>
      <a>Toothache</a>
      <a>Receding Gums</a>
      <a>Teeth Cleaning</a>
      <a>Gum Disease</a>
      <a>Teeth Grinding</a>
      <a>Jaw Pain</a>
      <a>Bad Breath</a>
      <a>Sensitive & Sore Teeth</a>
      <a>Tooth Abscess</a>
      <a>Mouth Sores</a>
      <a>Teeth Filling</a>
      <a>Replacing Amalgam Fillings</a>
      <a>Dry Mouth</a>
    </div>

    <div className="col">
      <h3>Cosmetic<br/>Improvement</h3>
      <a>Yellow Teeth</a>
      <a>Missing Teeth</a>
      <a>Worn Teeth</a>
      <a>Crooked Teeth</a>

      <div className="image-wrapper">
        <img src={braces} alt="" />
      </div>
    </div>

    <div className="col">
      <h3>Common Issues</h3>
      <a>Emergency Dentist</a>
      <a>Dental Anxiety</a>
      <a>Oral Cancer</a>

      <div className="image-wrapper">
        <img src={box} alt="" />
      </div>
    </div>
  </div>
</li>

        

        <li className="nav-item mega-parent">
  Treatments <span className="arrow">▾</span>

  <div className="mega-menu">
    
    
    <div className="mega-col">
      <h3>Dental Services</h3>
      <a href="#">Scaling & Polishing</a>
      <a href="#">Fillings</a>
      <a href="#">Emergency Dentists</a>
      <a href="#">Exam & X-Rays Check-Up</a>
      <a href="#">Dentures</a>
      <a href="#">Tooth Extraction</a>
      <a href="#">Wisdom Teeth Removal</a>
      <a href="#">Root Canals</a>
      <a href="#">TMJ Treatment</a>
    </div>

    
    <div className="mega-col">
      <h3>Cosmetic Dental Services</h3>
      <a href="#">Teeth Whitening Treatment</a>
      <a href="#">Invisalign Clear Aligners</a>
      <a href="#">Dental Braces</a>
      <a href="#">Dental Crowns</a>
      <a href="#">Dental Bridge</a>
      <a href="#">Dental Implants</a>
      <a href="#">Dental Veneers</a>
      <a href="#">Orthodontics</a>
      <a href="#">Smile Makeover</a>
    </div>

    <div className="mega-col">
      <h3>Dental Specialists</h3>
      <a href="#">Endodontist Services</a>
      <a href="#">Oral & Maxillofacial Surgeon</a>
      <a href="#">Orthodontist Specialists</a>
      <a href="#">Pediatric Dentist</a>
      <a href="#">Periodontist Services</a>
      <a href="#">Prosthodontist Services</a>

      <div className="mega-img">
        <img src={circle} alt="Dental Icon" />
      </div>
    </div>

  </div>
</li>



<li className="nav-item mega-dropdown">
  <span className="nav-link">Before & After ▾</span>

  <div className="before-after-menu">
    <div className="ba-left">
      <h3>Before & After</h3>
      <ul>
        <li>Braces — Before and After</li>
        <li>Invisalign — Before and After</li>
        <li>Crowns — Before and After</li>
        <li>Veneers — Before and After</li>
        <li>Teeth Whitening — Before and After</li>
        <li>Dental Implants — Before and After</li>
        <li>Dental Bonding — Before and After</li>
      </ul>
    </div>

    <div className="ba-right">
      <img src={before} alt="Before After" />
    </div>

    
  </div>
</li>

 <li className="nav-item mega-dropdown">
  Patient Safety <span className="arrow">▾</span>

  <div className="patient-safety-menu">
    <div className="ps-left">
      <h3>Patient Safety</h3>
      <ul>
        <li>7X SAFETY</li>
        <li>4 Step Sterilization</li>
        <li>Safety Equipment</li>
        <li>Equipment & Technology</li>
        <li>Quality</li>
      </ul>
    </div>

    <div className="ps-right">
      <img src={after} alt="Patient Safety" />
    </div>
  </div>
</li>


        <li className="nav-item">Contact</li>
        <li className="nav-item">Blog</li>
      </ul>

      <div className="nav-buttons">
        <button className="btn-call">Call Now</button>
        <button className="btn-appointment">Book Appointment</button>
      </div>
    </nav>
  );
}

export default Navbar;
>>>>>>> cc6c3e06212e2b2e6da93ad06f352978f7783de7
