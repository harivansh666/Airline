import { lazy, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const HotelsBanner = lazy(() => import("@/components/HotelsBanner"));
const Features = lazy(() => import("@/components/ui/Features"));
const RatingPersons = lazy(() => import("@/components/RatingPersons"));
const SliderComponent = lazy(() => import("@/components/ui/SliderComponent"));
const GlopBanner = lazy(() => import("../components/GlopBanner"));
const Info = lazy(() => import("../components/Info"));
const AirlinesDemo = lazy(() => import("../components/AirlinesDemo"));
const FlightSearchForm = lazy(() => import("../components/FlightSearchForm"));

function Home() {
  return (
    <div>
      <Suspense fallback={<Skeleton className="w-full bg-gray-100" />}>
        <FlightSearchForm />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full bg-gray-100" />}>
        <SliderComponent />
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
