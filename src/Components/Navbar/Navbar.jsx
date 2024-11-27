import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Threshold for changing navbar style
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-20 top-0 right-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Brand Section */}
        <a
          href="https://nebulax.uk/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-3xl font-semibold text-gray-700">
            Nebula X
          </span>
        </a>

        {/* Navigation Actions */}
        <div className="flex items-center gap-4">
          {/* "Get Started" Link */}
          <a
            href="#"
            className="text-slate-500 border-b-2 border-transparent hover:border-slate-500 transition-colors"
          >
            Get Started Now
          </a>

          {/* Login Button */}
          <button
            type="button"
            className="text-gray-700 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl shadow-lg transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
