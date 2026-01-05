import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

const airlines = [
  {
    name: "Alliance Air",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767009878/fligh5_csuyi7.png",
    link: "https://www.ticketstoindia.co.uk/airlines/air-india.aspx",
  },
  {
    name: "Air India Express",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767009877/airindiaexpress_tmbqfy.png",
    link: "https://www.ticketstoindia.co.uk/airlines/austrian-airlines.aspx",
  },
  {
    name: "Akasa Air",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767009878/aksa_exwgzt.png",
    link: "https://www.ticketstoindia.co.uk/airlines/gulf-airways.aspx",
  },
  {
    name: "SpiceJet",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767010032/99ad85da-f390-4e66-9283-43b1ff9a5e3c.png",
    link: "https://www.ticketstoindia.co.uk/airlines/azerbaijan-airlines.aspx",
  },
  {
    name: "IndiGo",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767009877/indigo_xap0py.png",
    link: "https://www.ticketstoindia.co.uk/airlines/cathay-pacific.aspx",
  },
  {
    name: "Air India",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767009877/airindia_quooig.png",
    link: "https://www.ticketstoindia.co.uk/airlines/air-astana.aspx",
  },
];

const AirlinesDemo = React.memo(() => {
  return (
    <div className="m-2 mt-18   ">
      <h2 className="text-1xl sm:text-2xl font-medium text-gray-800 mb-2">
        Popular Domestic Airlines
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full"></div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 border border-gray-300 shadow-lg rounded-2xl p-4 sm:p-6 mt-4">
        {airlines.map((airline, index) => (
          <Link
            to={airline.link}
            key={index}
            className="flex flex-col items-center justify-center p-2 hover:bg-gray-50 rounded-xl transition-colors"
          >
            <div className="w-10 h-10  sm:w-12 sm:h-12 flex items-center justify-center">
              <LazyLoadImage
                src={airline.img}
                alt={airline.name}
                loading="lazy"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-center text-blue-600 text-sm sm:text-base font-medium mt-2">
              {airline.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
});

export default AirlinesDemo;
