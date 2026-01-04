import React from "react";
import FlightCard from "../ui/FlightCard";

function FlightGrid() {
  return (
    <div className="relative p-1">
      <div className=" relative mt-2 rounded-2xl border-1 border-gray-200 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-0">
          {Array.from({ length: 2 }).map((_e, index) => (
            <FlightCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(FlightGrid);
