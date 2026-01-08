import { Plane } from "lucide-react";

interface FlightProps {
  flight: {
    id: number;
    airline: string;
    departureTime: string;
    departureCode: string;
    arrivalTime: string;
    arrivalCode: string;
    duration: string;
    price: number;
  };
}

function FlightCard({ flight }: FlightProps) {
  return (
    <div className="relative p-1">
      <div className="flex items-center justify-evenly max-w-[420px] gap-1.5 rounded-md bg-gray-100  p-2 m-1 overflow-hidden">
        <div className="relative flex justify-center items-center flex-col pr-0.5">
          <img
            src="https://flights.ticketstoindia.co.uk/airlogo/AI.png"
            alt="img"
            className="rounded-sm w-8"
          />
          <p className="text-[10px] text-nowrap">{flight.airline}</p>
        </div>
        <div className="flex items-center gap-3 pl-2 pr-1">
          <div className="flex flex-col justify-center items-center">
            <div>{flight.departureTime}</div>
            <div className="text-xs">{flight.departureCode}</div>
          </div>
          {/* doted */}
          <div className="flex text-xs flex-col gap-[-4px] justify-center items-center">
            <p>{flight.duration}</p>

            <div className="grid grid-cols-[1fr_auto] items-center w-26 my-1 gap-1">
              {/* Dotted line */}
              <div className="border-t-2 border-dotted border-gray-400 w-full"></div>

              <Plane
                className="rotate-45 fill-orange-500"
                stroke="0"
                size={16}
              />
            </div>

            <p className="text-blue-500 -tracking-tighter">Direct</p>
          </div>
          <div className="flex flex-col flex flex-col justify-center items-center">
            <div>{flight.arrivalTime}</div>
            <div className="text-xs">{flight.arrivalCode}</div>
          </div>
        </div>
        <div className="flex justify-center w-30 h-full ">
          <div className="text-1xl font-black text-gray-600 border-l-2 border-gray-300 p-2 ">
            £{flight.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightCard;
