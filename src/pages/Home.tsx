import { lazy, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useStore } from "@/store/statesStore";

const RatingBar = lazy(() => import("@/components/ui/RatingBar"));
const GetInspriation = lazy(
  () => import("@/components/carousel/GetInspriation")
);
const FlightGrid = lazy(() => import("@/components/FetchedFlights/FlightGrid"));
const HotelsBanner = lazy(() => import("@/components/HotelsBanner"));
const FlightSearchForm = lazy(() => import("../components/FlightSearchForm"));
const Features = lazy(() => import("@/components/ui/Features"));
const RatingPersons = lazy(() => import("@/components/RatingPersons"));
const SliderComponent = lazy(() => import("@/components/ui/SliderComponent"));
const GlopBanner = lazy(() => import("../components/GlopBanner"));
const Info = lazy(() => import("../components/Info"));
const AirlinesDemo = lazy(() => import("../components/AirlinesDemo"));

function Home() {
  const showFlights = useStore((state) => state.showFlights);
  const setShowFlights = useStore((state) => state.setShowFlights);
  return (
    <div>
      <Suspense fallback={<Skeleton className="w-full bg-gray-100" />}>
        <FlightSearchForm onSearch={() => setShowFlights(true)} />
      </Suspense>
      {showFlights && (
        <Suspense fallback={<Skeleton className="w-full h-40 bg-gray-100" />}>
          <FlightGrid />
        </Suspense>
      )}
      <Suspense fallback={<Skeleton className="w-full h-40 bg-gray-100" />}>
        <SliderComponent />
      </Suspense>

      <Suspense fallback={<Skeleton className="w-full bg-gray-100" />}>
        <RatingBar />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full bg-gray-100" />}>
        <GetInspriation />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full bg-gray-100" />}>
        <HotelsBanner />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full bg-gray-100" />}>
        <AirlinesDemo />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full bg-gray-100" />}>
        <Info />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full bg-gray-100" />}>
        <GlopBanner />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full bg-gray-100" />}>
        <RatingPersons />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full bg-gray-100" />}>
        <Features />
      </Suspense>
    </div>
  );
}

export default Home;
