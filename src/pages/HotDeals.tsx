import React, { lazy, Suspense } from "react";

const FlightGrid = lazy(() => import("@/components/FetchedFlights/FlightGrid"));
const FlightSearchForm = lazy(() => import("@/components/FlightSearchForm"));
const HotDeals = React.memo(() => {
  return (
    <div className="max-w-7xl mx-auto">
      <Suspense fallback={"loding"}>
        <FlightSearchForm />
        <FlightGrid />
      </Suspense>
    </div>
  );
});

export default HotDeals;
