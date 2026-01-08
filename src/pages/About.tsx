import React from "react";

const About = () => {
  return (
    <div className="bg-white">
      {/* Main Content: Story & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-md sm:text-lg">
              <p>
                Established in the UK in 1997 as a city breaks specialist, we
                expanded our horizons to include long-haul holidays before
                venturing into the flight-only arena.
              </p>
              <p>
                Under the{" "}
                <span className="font-semibold text-gray-900">
                  Acetrip Limited
                </span>{" "}
                group of companies, we leverage deep industry relationships to
                offer highly discounted flights, hotels, and short breaks
                through our specialist networks.
              </p>
              <p>
                Today, 25 years later, we remain a privately funded and operated
                company, continually evolving with technology while keeping our
                core values unchanged.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 p-8 rounded-3xl border-b-4 border-orange-500">
              <h4 className="text-4xl font-black text-orange-500 mb-2">25+</h4>
              <p className="font-bold text-gray-800">Years of Expertise</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border-b-4 border-gray-900">
              <h4 className="text-4xl font-black text-gray-900 mb-2">Global</h4>
              <p className="font-bold text-gray-800">UK, Canada & India</p>
            </div>
            <div className="col-span-2 bg-orange-500 p-8 rounded-3xl text-white">
              <h4 className="text-2xl font-bold mb-2">Our Ethos</h4>
              <p className="opacity-80">
                Creating value, offering transparency, and ensuring customer
                satisfaction in every booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team & Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="p-10 md:p-16 flex-1">
              <h3 className="text-3xl font-bold mb-4">Join Our Global Team</h3>
              <p className="text-gray-500 mb-8">
                We are always looking for talent in the UK, Canada, and India.
                Interested in shaping the future of travel? Drop us a line.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-orange-200">
                Get In Touch
              </button>
            </div>
            <div className="bg-gray-900 p-10 md:p-16 text-white md:w-1/3">
              <h4 className="text-xl font-bold mb-6 text-orange-500">
                Mailing Address
              </h4>
              <address className="not-italic text-gray-400 space-y-2">
                <p className="text-white font-semibold">Acetrip Limited</p>
                <p>8 Marlborough Business Centre</p>
                <p>96 George Lane, London</p>
                <p>E18 1AD, United Kingdom</p>
              </address>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(About);
