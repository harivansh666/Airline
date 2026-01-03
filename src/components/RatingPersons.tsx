import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Star, StarHalf, StarIcon } from "lucide-react";

const RatingPersons = React.memo(() => {
  const people = [
    {
      id: 1,
      name: "John Doe",
      rating: (
        <>
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 2,
      name: "Robert Johnson",
      rating: (
        <>
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      rating: (
        <>
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      rating: (
        <>
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      rating: (
        <>
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 6,
      name: "Dora",
      rating: (
        <>
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
          <StarIcon className="inline-block mb-1" fill="yellow" stroke="none" />
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
  ];
  return (
    <div className="relative mt-8 p-2 mb-12 border-t-2 border-b-2 pb-4 ">
      <div>
        <h1 className="text-2xl font-medium text-gray-800 mb-2 ">
          Our Permanent customers
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full"></div>
      </div>

      <div className="flex flex-row items-center justify-start p-2 gap-1 w-full">
        <AnimatedTooltip items={people} />
        <p className="ml-4 text-gray-500 animate-pulse">click me</p>
      </div>
      <p className="text-gray-500 pl-1">Who believe us</p>
      <h1 className="text-2xl font-semibold">Excellent (4.7) 7,040 Reviews</h1>
      <div className="flex flex-row">
        <Star size={30} fill="#FFB900" stroke="none" />
        <Star size={30} fill="#FFB900" stroke="none" />
        <Star size={30} fill="#FFB900" stroke="none" />
        <Star size={30} fill="#FFB900" stroke="none" />
        <StarHalf size={30} fill="#FFB900" stroke="none" />
      </div>
    </div>
  );
});

export default RatingPersons;
