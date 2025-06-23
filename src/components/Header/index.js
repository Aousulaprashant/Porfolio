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
    <header className="w-screen fixed top-0 md:w-full bg-gray-900 shadow-md z-50 cursor-auto">
      <div className="max-w-7xl mx-auto px-5 h-16 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center h-12">
          <img
            src={logo}
            alt="Logo"
            style={{ filter: "hue-rotate(390deg) saturate(10)" }}
            className="h-[130px] md:flex md:w-[200px] md:h-[190px] object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-bold text-slate-500">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50  text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu: Always Rendered, Smooth Transition */}
      <div
        className={`md:hidden overflow-hidden bg-slate-700 shadow-inner px-5 transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 pt-2 pb-4" : "max-h-0"
        }`}
      >
        <div
          className={`transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {NavItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="block py-1 font-semibold text-gray-100 hover:text-[#367cbdf9] transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
