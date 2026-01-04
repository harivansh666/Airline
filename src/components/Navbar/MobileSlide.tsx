import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import { Link } from "react-router-dom";
import RatingPersons from "../RatingPersons";

interface ChildComponentProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

function MobileSlide({ toggleMenu, isMenuOpen }: ChildComponentProps) {
  return (
    <Suspense fallback={<Skeleton className="w-full h-full" />}>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden z-60`}
      >
        <div className="relative">
          <img
            src="https://res.cloudinary.com/desslvu1w/image/upload/v1767117341/airindia_far_east_vovngw.jpg"
            alt="visa people image"
            loading="lazy"
            className="w-70 h-40   object-cover rounded-b-2xl"
          />
        </div>

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
              to="/hotdeals"
              className="block text-gray-700 hover:text-blue-600 text-base font-medium py-2"
              onClick={toggleMenu}
            >
              Hot Deals
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
            <Suspense fallback={<div>Loading...</div>}>
              <RatingPersons />
            </Suspense>
          </div>
        </div>
      </div>{" "}
    </Suspense>
  );
}

export default MobileSlide;
