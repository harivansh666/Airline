const airlines = [
  {
    name: "Alliance Air",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767009878/fligh5_csuyi7.png",
  },
  {
    name: "Air India Express",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767009877/airindiaexpress_tmbqfy.png",
  },
  {
    name: "Akasa Air",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767009878/aksa_exwgzt.png",
  },

  {
    name: "SpiceJet",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767010032/99ad85da-f390-4e66-9283-43b1ff9a5e3c.png",
  },
  {
    name: "IndiGo",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767009877/indigo_xap0py.png",
  },
  {
    name: "Air India",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767009877/airindia_quooig.png",
  },
];

const AirlinesDemo = () => {
  return (
    <div className="m-2 mt-4">
      <h2 className="text-2xl font-medium text-gray-800 mb-2">
        Popular Domestic Airlines
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-blue-700  to-blue-500 rounded-full "></div>

      <div className="flex sm:justify-center  overflow-auto  md:overflow-visible md:flex-wrap  sm:gap-28 gap-8 border border-gray-300 rounded-2xl p-5 mt-4">
        {airlines.map((airline, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-1.5"
          >
            <img
              src={airline.img}
              alt={airline.name}
              className=" w-15 object-cover"
              loading="lazy"
            />
            <p className="text-center text-nowrap text-blue-600 sm:text-[14px] text-[12px] font-medium mt-2">
              {airline.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirlinesDemo;
