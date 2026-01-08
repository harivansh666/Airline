import React, { lazy, useState } from "react";
import { Link } from "react-router";
import useMobileDetection from "@/hooks/useMobileDetection";

const MobileSlide = lazy(() => import("./MobileSlide"));

const Navbar = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const isMobile = useMobileDetection();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-2 mx justify-between sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <img
              src="https://res.cloudinary.com/desslvu1w/image/upload/f_webp,q_auto/v1767860588/logo_pkjzkz.png"
              alt="Logo"
              loading="lazy"
              className="w-46 sm:w-64"
              fetchPriority="high"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden  relative n sm:flex space-x-9 items-center">
            <Link
              to="/"
              // onMouseEnter={() => setShowPopup(true)}
              // onMouseLeave={() => setShowPopup(false)}
              className=" text-gray-700 hover:text-gray-950 text-md font-medium"
            >
              Home
            </Link>{" "}
            <Link
              to="/hotdeals"
              className=" text-gray-700 hover:text-gray-950 text-md font-medium"
            >
              Hot Deals
            </Link>
            <Link
              to="/about-us"
              className=" text-gray-700 hover:text-gray-950 text-md font-medium"
            >
              About us
            </Link>
            {/* <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 text-md font-medium"
            >
              Contact
            </Link> */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-400 to-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Book Consultation
            </Link>
            {showPopup && (
              <div
                onMouseEnter={() => setShowPopup(true)}
                onMouseLeave={() => setShowPopup(false)}
                className="absolute flex justify-center top-10 left-0 mt-2 w-36 p-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300"
              >
                <ul className="font-sans">
                  <li className="hover:bg-gray-100">Amritsar</li>
                  <li className="hover:bg-gray-100">Amritsar</li>
                  <li className="hover:bg-gray-100">Amritsar</li>
                  <li className="hover:bg-gray-100">Amritsar</li>
                </ul>
              </div>
            )}
          </div>
          {/* Mobile Hamburger Icon */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobile && (
        <MobileSlide toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      )}

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden z-40"
          onClick={toggleMenu}
          aria-label="Close menu backdrop"
        ></div>
      )}
    </nav>
  );
});

export default Navbar;
