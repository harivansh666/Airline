import { CheckCircle, Phone, PlaneTakeoff } from "lucide-react";
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
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PlaneTakeoff
                strokeWidth={1.25}
                className="w-6 h-6 text-green-600"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Quick booking
            </h3>
            <p className="text-gray-600">
              Fast 1-click bookings in under 60 seconds
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2"></h3>
            Shoping on Call
            <p className="text-gray-600">Round-the-clock help via call/chat</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Best Price Guarantee
            </h3>
            <p className="text-gray-600">We'll beat any competitor's price</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Features;
