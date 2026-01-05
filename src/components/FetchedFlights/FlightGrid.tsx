import { useStore } from "@/store/statesStore";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import FlightCard from "../ui/FlightCard";
import { Skeleton } from "../ui/skeleton";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Flight {
  id: number;
  airline: string;
  departureTime: string;
  departureCode: string;
  arrivalTime: string;
  arrivalCode: string;
  duration: string;
  price: number;
}

function FlightGrid() {
  const searchedFlights = useStore((state) => state.searchedFlights);
  const isLoading = useStore((state) => state.isLoading);

  const [flights, setFlights] = useState<Flight[]>([]);

  const generateRandomFlightData = (): Flight => {
    return {
      id: Math.floor(Math.random() * 1000),
      airline: `Airline ${Math.floor(Math.random() * 100)}`,
      departureTime: "7:15",
      departureCode: "DEL",
      arrivalTime: "16:30",
      arrivalCode: "JFK",
      duration: `9h ${Math.floor(Math.random() * 60)}m`,
      price: parseFloat((Math.random() * 500 + 200).toFixed(2)),
    };
  };
  useEffect(() => {
    toast.success("Updating Best Results");
    const flightsData = Array.from({ length: 20 }).map(
      generateRandomFlightData
    );

    setFlights(flightsData);
  }, []);

  return (
    <div className="relative p-1">
      {isLoading && (
        <div className=" relative rounded-2xl m-1">
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 p-0 gap-1">
            {Array.from({ length: 3 }).map((_e, index) => (
              <Skeleton key={index} className="w-full h-18 bg-gray-200 " />
            ))}
          </div>
        </div>
      )}
      {searchedFlights && (
        <div className=" relative rounded-2xl border-1 border-gray-200 bg-gray-200 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-0">
            {flights.map((flight, index) => (
              <FlightCard key={index} flight={flight} />
            ))}
          </div>
          <div className="relative">
            <Pagination className="p-2">
              <PaginationContent className="bg-gray-200 rounded-sm ">
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive className="bg-blue-600">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(FlightGrid);
