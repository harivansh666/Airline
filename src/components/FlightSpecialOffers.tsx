import React from "react";

const OFFERS = [
  {
    id: 1,
    city: "New Delhi",
    code: "DEL",
    airline: "Air India",
    price: "499",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    featured: true,
    tag: "Most Popular",
  },
  {
    id: 2,
    city: "Mumbai",
    code: "BOM",
    airline: "Emirates",
    price: "550",
    image:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80",
    featured: false,
    tag: "Best Value",
  },
  {
    id: 3,
    city: "Bangalore",
    code: "BLR",
    airline: "Qatar Airways",
    price: "525",
    image:
      "https://res.cloudinary.com/desslvu1w/image/upload/v1767868174/download_iro6lv.jpg",
    featured: false,
    tag: "Limited Deal",
  },
];

function FlightSpecialOffers() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
              Exclusive Deals
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-600 mt-2">
              Cheap Flights To India
            </h2>
            <p className="text-gray-500 mt-2">
              Prices include taxes. Subject to availability.
            </p>
          </div>
          <button className="text-gray-900 font-bold pb-1 hover:text-orange-400 transition-colors">
            View All Destinations →
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {OFFERS.map((offer) => (
            <div
              key={offer.id}
              className={`group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer ${
                offer.featured ? "md:col-span-2 md:row-span-2" : "col-span-1"
              }`}
            >
              {/* Background Image */}
              <img
                src={offer.image}
                alt={offer.city}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="bg-orange-400 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase">
                  {offer.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm font-light opacity-80">
                      {offer.airline}
                    </p>
                    <h3
                      className={`${
                        offer.featured ? "text-4xl" : "text-xl"
                      } font-bold`}
                    >
                      {offer.city}{" "}
                      <span className="text-orange-300">({offer.code})</span>
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-70">Starting at</p>
                    <p
                      className={`${
                        offer.featured ? "text-3xl" : "text-xl"
                      } font-black text-white`}
                    >
                      £{offer.price}
                    </p>
                  </div>
                </div>

                {/* Hidden Button - Appears on Hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
                  <button className="mt-2 w-full bg-white text-gray-900 py-3 rounded-xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-colors">
                    Book This Flight
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Special "Inspiration" Card */}
          <div className="col-span-1 bg-gray-900 rounded-3xl p-8 flex flex-col justify-center items-center text-center border-2 border-dashed border-gray-700 hover:border-blue-500 transition-colors">
            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h4 className="text-white font-bold">Custom Trip?</h4>
            <p className="text-gray-400 text-xs mt-2">
              Tell us where you want to go and we'll find the best price.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlightSpecialOffers;
