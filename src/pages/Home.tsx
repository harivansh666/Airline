import { StarIcon } from "lucide-react";
import FlightSearchForm from "../components/FlightSearchForm";
import AirlinesDemo from "../components/AirlinesDemo";
import Info from "../components/Info";
import GlopBanner from "../components/GlopBanner";
import SliderComponent from "@/components/ui/SliderComponent";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

function Home() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: (
        <>
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: (
        <>
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: (
        <>
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: (
        <>
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: (
        <>
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: (
        <>
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  return (
    <div>
      <FlightSearchForm />
      <SliderComponent />
      <AirlinesDemo />
      <Info />
      <GlopBanner />
      <div className="mt-8 p-2 mb-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 ml-2">
          Our Permanent customers
        </h1>
        <div className="flex flex-row items-center justify-start p-2  w-full">
          <AnimatedTooltip items={people} />
        </div>
        <p className="text-gray-500 pl-1">Who believe us bro</p>
      </div>
    </div>
  );
}

export default Home;
