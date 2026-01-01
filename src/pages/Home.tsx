import FlightSearchForm from "../components/FlightSearchForm";
import AirlinesDemo from "../components/AirlinesDemo";
import Info from "../components/Info";
import GlopBanner from "../components/GlopBanner";
import SliderComponent from "@/components/ui/SliderComponent";
import RatingPersons from "@/components/RatingPersons";
import Features from "@/components/ui/Features";
import HotelsBanner from "@/components/HotelsBanner";

function Home() {
  return (
    <div>
      <FlightSearchForm />
      <SliderComponent />
      <HotelsBanner />
      <AirlinesDemo />
      <Info />
      <GlopBanner />
      <RatingPersons />
      <Features />
    </div>
  );
}

export default Home;
