import FlightSearchForm from "../components/FlightSearchForm";
import AirlinesDemo from "../components/AirlinesDemo";
import Info from "../components/Info";
import GlopBanner from "../components/GlopBanner";
import SliderComponent from "@/components/ui/SliderComponent";
import RatingPersons from "@/components/RatingPersons";

function Home() {
  return (
    <div>
      {/* <Loading /> */}
      <FlightSearchForm />
      <SliderComponent />
      <AirlinesDemo />
      <Info />
      <GlopBanner />
      <RatingPersons />
    </div>
  );
}

export default Home;
