const airlines = [
  {
    name: "IndiGo",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767009877/indigo_xap0py.png",
  },
  {
    name: "Air India",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767009877/airindia_quooig.png",
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
    name: "Alliance Air",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767009878/fligh5_csuyi7.png",
  },
  {
    name: "SpiceJet",
    img: "https://res.cloudinary.com/desslvu1w/image/upload/v1767010032/99ad85da-f390-4e66-9283-43b1ff9a5e3c.png",
  },
];

const AirlinesDemo = () => {
  return (
    <div className="m-2 mt-4">
      <h2 className="text-2xl font-medium text-gray-800 mb-2">
        Popular Domestic Airlines
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-blue-700  to-blue-500 rounded-full "></div>

      <div className="flex justify-center flex-wrap gap-28 border border-gray-300 rounded-2xl p-6 mt-4">
        {airlines.map((airline, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center  p-1.5 "
          >
            <img
              src={airline.img}
              alt={airline.name}
              className="w-12  object-contain"
            />
            <p className="text-center text-black text-1xl font-medium mt-2">
              {airline.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirlinesDemo;
