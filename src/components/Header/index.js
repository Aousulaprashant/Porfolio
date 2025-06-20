import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../IMG/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavItems = [
    { name: "Summary", link: "#summary" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#Skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="w-screen fixed top-0 md:w-full bg-slate-50 shadow-md z-50 cursor-auto">
      <div className="max-w-7xl mx-auto px-5 h-16 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center h-12">
          <img
            src={logo}
            alt="Logo"
            style={{ filter: "hue-rotate(390deg) saturate(10)" }}
            className="hidden md:flex w-[200px] h-[190px] object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-bold text-gray-700">
          {NavItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:text-[#367cbdf9] transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-50 shadow-inner px-5 pb-4 pt-2 space-y-3 font-semibold text-gray-700">
          {NavItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-[#367cbdf9] transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
