import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#062E24]/70 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">

          {/* LEFT: Hamburger + Logo */}
          <div className="flex items-center space-x-3">
            {/* Hamburger (Mobile only) */}
            <button
              className="md:hidden text-[#F5D49B]"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* Logo */}
            <img
              src="/media/logo.png"
              alt="Logo"
              className="h-10 w-auto cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8 text-[#F5D49B] font-medium">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className="px-2 py-2 hover:text-white transition"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* AUTH BUTTONS (VISIBLE ON MOBILE & DESKTOP) */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="px-3 sm:px-4 py-2 text-[#F5D49B] hover:text-white transition font-medium text-sm sm:text-base"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="px-3 sm:px-4 py-2 rounded-lg font-medium
                bg-[#E4B04F] text-[#062E24]
                hover:bg-[#C6922E] transition text-sm sm:text-base"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (ONLY NAV LINKS) */}
      {open && (
        <div className="md:hidden bg-[#062E24]/90 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col px-4 py-4 space-y-3 text-[#F5D49B] font-medium">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
                className="text-left py-2 hover:text-white transition"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
