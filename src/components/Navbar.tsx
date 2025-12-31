import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <img
              src="https://www.ticketstoindia.co.uk/newpics/ticketstoindia-logo.png"
              alt="Logo"
              className="w-68"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-9 items-center">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 text-md font-medium"
            >
              Home
            </Link>

            <Link
              to="/visa"
              className="text-gray-700 hover:text-blue-600 text-md font-medium"
            >
              Visa
            </Link>
            <Link
              to="/countries"
              className="text-gray-700 hover:text-blue-600 text-md font-medium"
            >
              Countries
            </Link>
            {/* <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 text-md font-medium"
            >
              Contact
            </Link> */}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Book Consultation
            </Link>
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

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-50 bg-white shadow-md transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden z-60`}
      >
        <img
          src="https://www.ticketstoindia.co.uk/newpics/ticketstoindia-logo.png"
          alt="visa people image"
          className="w-full h-40  object-cover   rounded-b-2xl  "
        />
        <div className="p-4 space-y-4">
          <button
            onClick={toggleMenu}
            className="text-gray-500 w-8 h-8 bg-gray-200 rounded-full float-right text-xl"
            aria-label="Close menu"
          >
            ✕
          </button>

          <div className="mt-8 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600 text-base font-medium py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="block text-gray-700 hover:text-blue-600 text-base font-medium py-2"
              onClick={toggleMenu}
            >
              Features
            </Link>

            <Link
              to="/visa"
              className="block text-gray-700 hover:text-blue-600 text-base font-medium py-2"
              onClick={toggleMenu}
            >
              Visa
            </Link>
            <Link
              to="/countries"
              className="block text-gray-700 hover:text-blue-600 text-base font-medium py-2"
              onClick={toggleMenu}
            >
              Countries
            </Link>
            {/* <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-600 text-base font-medium py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link> */}
            <Link
              to="/contact"
              className="block bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium mt-4"
              onClick={toggleMenu}
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop for closing menu - FIXED: Lower opacity and proper z-index */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden z-40"
          onClick={toggleMenu}
          aria-label="Close menu backdrop"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
