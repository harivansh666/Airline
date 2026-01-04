import { Phone } from "lucide-react";
import React from "react";

const Features = React.memo(() => {
  return (
    <div className=" bg-gradient-to-r from-blue-700  to-indigo-400 rounded-2xl">
      {/* Header Section */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">
              Save More, Fly More With TicketsToIndia
            </h1>
            <p className="text-lg text-black max-w-2xl mx-auto">
              We deliver fresh groceries to your doorstep across multiple
              villages. Check if we deliver to your area and enjoy fast,
              reliable service.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-16 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2"></h3>
            Instant Customer Support
            <p className="text-1xl text-gray-600">
              Call 0208 518 9100 or Chat for booking assistance, you can talk in
              Hindi and Punjabi also.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <img
                src="https://res.cloudinary.com/desslvu1w/image/upload/v1767365808/IATAlogo.svg_asjlk5.png"
                className="w-20  text-purple-600"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              IATA License Holder
            </h3>
            <p className="text-gray-600">Book with confidently</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <img
                src="https://res.cloudinary.com/desslvu1w/image/upload/v1767366010/atol-protected-vector-logo_go3exe.png"
                className="w-16  text-purple-600"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ATOL Protected
            </h3>
            <p className="text-gray-600">
              Your flights are ATOL protected by Civil Aviation Authority, ATOL
              No. 5092
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Features;
