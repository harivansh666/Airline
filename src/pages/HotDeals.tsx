import RatingBar from "@/components/ui/RatingBar";
import { Skeleton } from "@/components/ui/skeleton";
import { useStore } from "@/store/statesStore";
import React, { lazy, Suspense } from "react";

const FlightSearchForm = lazy(() => import("@/components/FlightSearchForm"));
const FlightGrid = lazy(() => import("@/components/FetchedFlights/FlightGrid"));

const HotDeals = React.memo(() => {
  const setShowFlights = useStore((state) => state.setShowFlights);
  const showFlights = useStore((state) => state.showFlights);

  return (
    <div className=" mx-auto">
      <Suspense fallback={"loading..."}>
        <div className="flex justify-center items-center pt-12 sm:p-34 w-full mx-auto  bg-local  bg-[url('https://res.cloudinary.com/desslvu1w/image/upload/f_webp,q_auto/v1767629517/Indian-Cities-with-Architectural-Background_fi3jzn.png')]">
          <FlightSearchForm onSearch={() => setShowFlights(true)} />
        </div>
      </Suspense>
      <div className="max-w-7xl mx-auto mt-4">
        <Suspense>
          <RatingBar />
        </Suspense>

        {showFlights && (
          <Suspense fallback={<Skeleton className="w-full h-full" />}>
            <FlightGrid />
          </Suspense>
        )}
      </div>
    </div>
  );
});

export default HotDeals;
