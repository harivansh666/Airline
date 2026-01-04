import { Skeleton } from "@/components/ui/skeleton";
import { useStore } from "@/store/statesStore";
import React, { lazy, Suspense } from "react";

const FlightSearchForm = lazy(() => import("@/components/FlightSearchForm"));
const FlightGrid = lazy(() => import("@/components/FetchedFlights/FlightGrid"));

const HotDeals = React.memo(() => {
  const setShowFlights = useStore((state) => state.setShowFlights);
  const showFlights = useStore((state) => state.showFlights);

  return (
    <div className="max-w-7xl mx-auto">
      <Suspense fallback={"loading..."}>
        <FlightSearchForm onSearch={() => setShowFlights(true)} />
      </Suspense>

      {showFlights && (
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <FlightGrid />
        </Suspense>
      )}
    </div>
  );
});

export default HotDeals;
