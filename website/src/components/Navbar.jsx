import React from "react";

const Navbar = () => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About us" },
    { href: "#services", label: "Our services" },
    { href: "#testimonials", label: "Testimonials" },
  ];
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
        {/* links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
