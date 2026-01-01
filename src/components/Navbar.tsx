import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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
              src="https://res.cloudinary.com/desslvu1w/image/upload/v1767010770/ticketstoindia-logo-christmas_kfprad.png"
              alt="Logo"
              className="w-68"
              fetchPriority="high"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidde relative n sm:flex space-x-9 items-center">
            <Link
              to="/"
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
              className="text-gray-700 hover:text-blue-600 text-md font-medium"
            >
              Home
            </Link>{" "}
            <Link
              to="/hotdeals"
              className="text-gray-700 hover:text-blue-600 text-md font-medium"
            >
              Hot Deals
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

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden z-60`}
      >
        <img
          src="https://res.cloudinary.com/desslvu1w/image/upload/v1767117341/airindia_far_east_vovngw.jpg"
          alt="visa people image"
          className="w-full object-contain rounded-b-2xl"
        />
        <div className="p-4 space-y-4">
          <button
            onClick={toggleMenu}
            className="text-gray-500 w-6 h-6 bg-gray-200 rounded-full float-right text-sm"
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

// import { useState } from "react";
// import { Link } from "react-router";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const destinations = [
//     { name: "Amritsar", country: "India" },
//     { name: "Delhi", country: "India" },
//     { name: "Mumbai", country: "India" },
//     { name: "Bangalore", country: "India" },
//     { name: "Goa", country: "India" },
//     { name: "Dubai", country: "UAE" },
//   ];

//   return (
//     <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full z-50 border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div className="transform hover:scale-105 transition-transform duration-300">
//             <img
//               src="https://res.cloudinary.com/desslvu1w/image/upload/v1767010770/ticketstoindia-logo-christmas_kfprad.png"
//               alt="Logo"
//               className="w-68 h-auto"
//               fetchPriority="high"
//             />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden sm:flex space-x-2 items-center">
//             <div className="relative">
//               <Link
//                 to="/"
//                 onMouseEnter={() => setShowPopup(true)}
//                 onMouseLeave={() => setShowPopup(false)}
//                 className="relative text-gray-700 hover:text-blue-600 text-md font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 group"
//               >
//                 Home
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
//               </Link>

//               {/* Modern Dropdown Popup */}
//               {showPopup && (
//                 <div
//                   onMouseEnter={() => setShowPopup(true)}
//                   onMouseLeave={() => setShowPopup(false)}
//                   className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300"
//                 >
//                   <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4">
//                     <h3 className="text-white font-semibold text-lg">
//                       Popular Destinations
//                     </h3>
//                     <p className="text-blue-100 text-sm">
//                       Explore amazing places
//                     </p>
//                   </div>
//                   <ul className="p-2 max-h-80 overflow-y-auto">
//                     {destinations.map((dest, index) => (
//                       <li key={index}>
//                         <Link
//                           to={`/destination/${dest.name.toLowerCase()}`}
//                           className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200 group"
//                         >
//                           <div className="flex items-center space-x-3">
//                             <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
//                               {dest.name.charAt(0)}
//                             </div>
//                             <div>
//                               <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
//                                 {dest.name}
//                               </p>
//                               <p className="text-xs text-gray-500">
//                                 {dest.country}
//                               </p>
//                             </div>
//                           </div>
//                           <svg
//                             className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M9 5l7 7-7 7"
//                             />
//                           </svg>
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="border-t border-gray-100 p-3 bg-gray-50">
//                     <Link
//                       to="/all-destinations"
//                       className="block text-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
//                     >
//                       View All Destinations →
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <Link
//               to="/hotdeals"
//               className="relative text-gray-700 hover:text-blue-600 text-md font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 group"
//             >
//               Hot Deals
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
//             </Link>

//             <Link
//               to="/countries"
//               className="relative text-gray-700 hover:text-blue-600 text-md font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 group"
//             >
//               Countries
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
//             </Link>

//             <Link
//               to="/contact"
//               className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 transition-all duration-300 group"
//             >
//               <span className="relative z-10">Book Consultation</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </Link>
//           </div>

//           {/* Mobile Hamburger Icon */}
//           <div className="sm:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all duration-300"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Slide-in Menu */}
//       <div
//         className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out sm:hidden z-60`}
//       >
//         <div className="relative">
//           <img
//             src="https://res.cloudinary.com/desslvu1w/image/upload/v1767117341/airindia_far_east_vovngw.jpg"
//             alt="visa people image"
//             className="w-full h-48 object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
//         </div>

//         <div className="p-6 space-y-4">
//           <button
//             onClick={toggleMenu}
//             className="absolute top-4 right-4 text-white w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-all duration-300"
//             aria-label="Close menu"
//           >
//             ✕
//           </button>

//           <div className="space-y-2">
//             <Link
//               to="/"
//               className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 text-base font-medium py-3 px-4 rounded-xl transition-all duration-300"
//               onClick={toggleMenu}
//             >
//               🏠 Home
//             </Link>
//             <Link
//               to="/hotdeals"
//               className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 text-base font-medium py-3 px-4 rounded-xl transition-all duration-300"
//               onClick={toggleMenu}
//             >
//               🔥 Hot Deals
//             </Link>
//             <Link
//               to="/visa"
//               className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 text-base font-medium py-3 px-4 rounded-xl transition-all duration-300"
//               onClick={toggleMenu}
//             >
//               📄 Visa
//             </Link>
//             <Link
//               to="/countries"
//               className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 text-base font-medium py-3 px-4 rounded-xl transition-all duration-300"
//               onClick={toggleMenu}
//             >
//               🌍 Countries
//             </Link>
//             <Link
//               to="/contact"
//               className="block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-xl text-base font-semibold mt-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
//               onClick={toggleMenu}
//             >
//               📞 Book Free Consultation
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Backdrop */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 backdrop-blur-sm sm:hidden z-40 animate-in fade-in duration-300"
//           onClick={toggleMenu}
//           aria-label="Close menu backdrop"
//         ></div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
