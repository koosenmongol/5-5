import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
const Navbar = () => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About us" },
    { href: "#services", label: "Our services" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [activeLinks, setActiveLinks] = useState("#home");
  return (
    <div className="fixed top-0 left-0 right-0 bg-white/90">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-8 h-8 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity">
            {" "}
          </div>
          <div className="w-8 h-8 -ml-4 bg-red-600 rounded-full opacity-100 hover:opacity-75 transition-opacity">
            {" "}
          </div>
        </div>
        {/* Mobile menu */}
        <button
          onClick={() => setisMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
        {/* links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              onClick={() => setActiveLinks(link.href)}
              key={index}
              href={link.href}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all ${
                activeLinks === link.href
                  ? "text-blue-600 after:w-full"
                  : " text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg">
          Get in touch
        </button>
      </div>
      {/* mobile menu items */}
      <div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="container mx-auto px-4 space-y-3">
              {navLinks.map((link, index) => (
                <a
                  onClick={() => {
                    setActiveLinks(link.href);
                    setisMenuOpen(false);
                  }}
                  className={`block text-sm font-medium py-2 ${
                    activeLinks === link.href
                      ? "text-blue-600"
                      : "text-gray-600"
                  }`}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full  bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg">
                Get in touch
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
