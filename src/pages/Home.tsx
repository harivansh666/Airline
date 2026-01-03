import { lazy, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import RatingBar from "@/components/ui/RatingBar";
import GetInspriation from "@/components/carousel/GetInspriation";
import FlightGrid from "@/components/FetchedFlights/FlightGrid";

const HotelsBanner = lazy(() => import("@/components/HotelsBanner"));
const FlightSearchForm = lazy(() => import("../components/FlightSearchForm"));
const Features = lazy(() => import("@/components/ui/Features"));
const RatingPersons = lazy(() => import("@/components/RatingPersons"));
const SliderComponent = lazy(() => import("@/components/ui/SliderComponent"));
const GlopBanner = lazy(() => import("../components/GlopBanner"));
const Info = lazy(() => import("../components/Info"));
const AirlinesDemo = lazy(() => import("../components/AirlinesDemo"));

function Home() {
  return (
    <div>
      <Suspense fallback={<Skeleton className="w-full bg-gray-100" />}>
        <FlightSearchForm />
      </Suspense>

      <Suspense fallback={<Skeleton className="w-full h-40 bg-gray-100" />}>
        <FlightGrid />
      </Suspense>
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
