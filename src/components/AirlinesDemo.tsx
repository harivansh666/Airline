import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

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

const AirlinesDemo = () => {
  return (
    <div className="m-2 mt-18">
      <h2 className="text-2xl font-medium text-gray-800 mb-2">
        Popular Domestic Airlines
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-blue-700  to-blue-500 rounded-full "></div>

      <div className="flex sm:justify-center  overflow-auto  md:overflow-visible md:flex-wrap  sm:gap-28 gap-8 border border-gray-300 rounded-2xl p-5 mt-4">
        {airlines.map((airline, index) => (
          <Link to={airline.link}>
            <div
              key={index}
              className="flex flex-col items-center justify-center p-1.5"
            >
              <LazyLoadImage
                src={airline.img}
                alt={airline.name}
                className=" w-15 object-cover"
              />

              <p className="text-center text-nowrap  text-blue-600 sm:text-[14px] text-[12px] font-medium mt-2">
                {airline.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AirlinesDemo;
