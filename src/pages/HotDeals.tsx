import FlightGrid from "@/components/FetchedFlights/FlightGrid";
import FlightSearchForm from "@/components/FlightSearchForm";
import React from "react";

const HotDeals = React.memo(() => {
  return (
    <div className="max-w-7xl mx-auto">
      <FlightSearchForm />
      <FlightGrid />
    </div>
  );
});

export default HotDeals;
