import { lazy, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useStore } from "@/store/statesStore";
import PaymentMethods from "@/components/ui/PaymentMethods";
import FlightSpecialOffers from "@/components/FlightSpecialOffers";

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
    <div className="pt-2">
      <div className="flex justify-center items-center pt-12 sm:p-34 w-full mx-auto  bg-local  bg-[url('https://res.cloudinary.com/desslvu1w/image/upload/f_webp,q_auto/v1767629517/Indian-Cities-with-Architectural-Background_fi3jzn.png')]">
        <Suspense fallback={<Skeleton className="w-full bg-gray-100" />}>
          <FlightSearchForm onSearch={() => setShowFlights(true)} />
        </Suspense>
      </div>
      {showFlights && (
        <Suspense fallback={<Skeleton className="w-full h-40 bg-gray-100" />}>
          <div className="mt-2">
            <FlightGrid />
          </div>
        </Suspense>
      )}


      <Suspense fallback={<Skeleton className="w-full bg-gray-100" />}>
        <FlightSpecialOffers />
      </Suspense>

      <div className="max-w-7xl mx-auto">
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

        <div className="w-full flex justify-center items-center mt-4 gap-2">
          <h1 className="font-serif">Payment Methods</h1>
          <img
            src="https://res.cloudinary.com/desslvu1w/image/upload/f_webp,q_auto,w_200/v1767864656/all_logo_pfmtnx.png"
            alt="payment methods"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
