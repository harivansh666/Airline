import FlightCard from "../ui/FlightCard";

function FlightGrid() {
  return (
    <div className="relative p-1">
      <div className=" relative mt-2 rounded-2xl border-2 border-gray-300 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-0">
          {Array.from({ length: 26 }).map((_e, index) => (
            <FlightCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlightGrid;
