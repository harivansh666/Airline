import { useStore } from "@/store/statesStore";
import FlightCard from "../ui/FlightCard";
import { Skeleton } from "../ui/skeleton";
import React from "react";

function FlightGrid() {
  const searchedFlights = useStore((state) => state.searchedFlights);
  const isLoading = useStore((state) => state.isLoading);
  return (
    <div className="relative p-1 ">
      {isLoading && (
        <div className=" relative rounded-2xl m-1">
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 p-0 gap-1">
            {Array.from({ length: 3 }).map((_e, index) => (
              <Skeleton key={index} className="w-full h-18 bg-gray-200 " />
            ))}
          </div>
        </div>
      )}
      {searchedFlights && (
        <div className=" relative rounded-2xl border-1 border-gray-200 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-0">
            {Array.from({ length: 3 }).map((_e, index) => (
              <FlightCard key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(FlightGrid);
