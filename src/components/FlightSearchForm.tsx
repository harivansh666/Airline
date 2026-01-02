import {
  CalendarDays,
  ChevronDown,
  PlaneLanding,
  PlaneTakeoff,
  Repeat,
  X,
} from "lucide-react";
import React, { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Calendar } from "./ui/calendar";
import { AnimatePresence, motion } from "framer-motion";
import TravellersClassSelect from "./FlightFormElements/TravellersClasssSlecect";
import useMobileDetection from "@/hooks/useMobileDetection";

const FlightSearchForm = React.memo(() => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 19),
  });
  console.log(dateRange);
  const [showCalender, setCalenderShow] = useState<boolean>(false);
  // const [showTravellers, setShowTravellers] = useState(false);

  // const [showDropdown, setShowDropdown] = useState(false);
  // const [selectedClass, setSelectedClass] = useState("economy");
  // const [isMobile, _setisMobile] = useState(true);

  // const [travellers, setTravellers] = useState({
  //   adults: 1,
  //   children: 0,
  //   infants: 0,
  // });
  const isMobile = useMobileDetection();
  const handleSwapAirports = () => {
    const temp = fromAirport;
    setFromAirport(toAirport);
    setToAirport(temp);
  };

  // const handleTravellerChange = (
  //   type: keyof typeof travellers,
  //   delta: number
  // ) => {
  //   setTravellers((prev) => ({
  //     ...prev,
  //     [type]: Math.max(0, prev[type] + delta),
  //   }));
  // };

  const [tripType, setTripType] = useState<"one-way" | "round">("one-way");

  const airports = [
    { code: "IXC", name: "Chandigarh" },
    { code: "DEL", name: "New Delhi" },
    { code: "BOM", name: "Mumbai" },
    { code: "BLR", name: "Bengaluru" },
    { code: "MAA", name: "Chennai" },
    { code: "HYD", name: "Hyderabad" },
  ];
  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -10 },
  };

  const [fromAirport, setFromAirport] = useState(airports[0]);
  const [toAirport, setToAirport] = useState(airports[1]);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  // const totalTravellers =
  //   travellers.adults + travellers.children + travellers.infants;

  // const travelClasses = [
  //   { id: "economy", label: "Economy" },
  //   { id: "premium", label: "Premium Economy" },
  //   { id: "business", label: "Business" },
  //   { id: "first", label: "First Class" },
  // ];

  return (
    <div className="flex flex-row max-w-7xl justify-center border-1 border-gray-300 rounded-2xl bg-gray-50 m-1">
      {isMobile ? (
        <div className="w-full flex justify-center items-center flex-col m-2 ">
          <motion.div className="mb-2">
            <div className="relative bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-1.5 w-max mx-auto border border-gray-200">
              <div className="flex gap-2">
                {(["one-way", "round"] as const).map((type) => (
                  <motion.button
                    key={type}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setTripType(type)}
                    className={`relative h-10 w-28 rounded-xl font-medium text-sm transition-all duration-300 ${
                      tripType === type
                        ? "text-white bg-blue-600 shadow-lg"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tripType === type && (
                      <motion.div
                        layoutId="activeTripType"
                        className="absolute inset-0 bg-blue-600 rounded-xl"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">
                      {type === "one-way" ? "One Way" : "Round Trip"}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
          <div className=" relative w-full flex items-start  flex-col gap-1 b ">
            <div className="flex w-full justify-evenly items-center">
              {/* From Airport */}
              <div className="">
                <div className="flex items-center  gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <PlaneTakeoff className="w-4 h-4 text-blue-600" />
                  </div>
                  <label className="text-sm font-medium text-gray-500">
                    From
                  </label>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setShowFromDropdown(!showFromDropdown);
                    setShowToDropdown(false);
                  }}
                  className="p-2 w-40  rounded-xl border-2 border-gray-200  hover:border-blue-400 bg-white transition-all duration-300  text-left"
                >
                  <div className="flex justify-between items-center ">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {fromAirport.code}
                      </div>

                      <div className="text-gray-400 text-xs truncate">
                        {fromAirport.name}
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: showFromDropdown ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-gray-400" />
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {showFromDropdown && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute z-10 mt-2 w-50 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-96 overflow-y-auto"
                    >
                      {airports.map((airport) => (
                        <motion.button
                          key={airport.code}
                          whileHover={{ backgroundColor: "#f0f9ff" }}
                          onClick={() => {
                            setFromAirport(airport);
                            setShowFromDropdown(false);
                          }}
                          className={`w-full p-4 text-left hover:bg-blue-50 transition-colors ${
                            fromAirport.code === airport.code
                              ? "bg-blue-50 border-l-4 border-blue-600"
                              : ""
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-bold text-gray-900">
                                {airport.code}
                              </div>
                              {/* <div className="text-gray-600">{airport.city}</div> */}
                              <div className="text-gray-400 text-sm truncate">
                                {airport.name}
                              </div>
                            </div>
                            {fromAirport.code === airport.code && (
                              <div className="w-2 h-2 bg-blue-600 rounded-full" />
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Swap Button */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="lg:mt-8 mt-9  p-2"
              >
                <button
                  onClick={handleSwapAirports}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl"
                >
                  <Repeat className="w-4 h-4 text-gray-500" />
                </button>
              </motion.div>

              {/* To Airport */}
              <div className="relative">
                <div className="flex  items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <PlaneLanding className="w-4 h-4 text-blue-600" />
                  </div>
                  <label className="text-sm font-medium text-gray-500">
                    To
                  </label>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setShowToDropdown(!showToDropdown);
                    setShowFromDropdown(false);
                  }}
                  className=" p-3 w-40 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 bg-white text-left"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {toAirport.code}
                      </div>
                      {/* <div className="text-gray-600 text-sm">{toAirport.city}</div> */}
                      <div className="text-gray-400 text-xs truncate">
                        {toAirport.name}
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: showToDropdown ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-gray-400" />
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {showToDropdown && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute z-10 mt-2 w-50 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-96 overflow-y-auto"
                    >
                      {airports.map((airport) => (
                        <motion.button
                          key={airport.code}
                          whileHover={{ backgroundColor: "#f0f9ff" }}
                          onClick={() => {
                            setToAirport(airport);
                            setShowToDropdown(false);
                          }}
                          className={`w-full p-4 text-left hover:bg-blue-50 transition-colors ${
                            toAirport.code === airport.code
                              ? "bg-blue-50 border-l-4 border-blue-600"
                              : ""
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-bold text-gray-900">
                                {airport.code}
                              </div>
                              <div className="text-gray-400 text-sm truncate">
                                {airport.name}
                              </div>
                            </div>
                            {toAirport.code === airport.code && (
                              <div className="w-2 h-2 bg-blue-600 rounded-full" />
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ====================== */}

            {/*  Departure Date */}
            <div className="flex flex-col  w-full pl-1 pr-1 ">
              <div className="flex-1  items-center gap-4 mb-2 ml-0 mt-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <CalendarDays className="w-5 h-5 text-blue-600" />
                  </div>
                  <label className="text-sm font-medium text-gray-500">
                    Departure Date
                  </label>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCalenderShow(!showCalender)}
                  className="w-full p-3 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 bg-white text-left flex justify-between items-center"
                >
                  {/* show date thu/12/26 */}
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      {dateRange?.from?.toDateString() || "Select Date"}
                    </div>
                    <div className="text-gray-600 text-sm capitalize">
                      {/* {travelClasses.find((c) => c.id === selectedClass)?.label} */}
                    </div>
                  </div>
                  <ChevronDown className="text-gray-400" />
                </motion.button>
              </div>
              {/*  Return Date usestate(tripType) */}
              <div>
                {tripType === "one-way" && (
                  <div className="flex-1  items-center gap-3 mb-2 ml-0 mt-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <CalendarDays className="w-5 h-5 text-blue-600" />
                      </div>
                      <label className="text-sm font-medium text-gray-500">
                        Departure Date
                      </label>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setCalenderShow(!showCalender)}
                      className="w-full  p-3 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 bg-white text-left flex justify-between items-center"
                    >
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          {dateRange?.from?.toDateString() || "Select Date"}
                        </div>
                        <div className="text-gray-600 text-sm capitalize">
                          {
                            // travelClasses.find((c) => c.id === selectedClass)
                            // ?.label
                          }
                        </div>
                      </div>
                      <ChevronDown className="text-gray-400" />
                    </motion.button>
                  </div>
                )}
              </div>
              <TravellersClassSelect />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <motion.div className="mb-2">
            <div className="relative bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-1.5 w-max mx-auto border border-gray-200">
              <div className="flex gap-2">
                {(["one-way", "round"] as const).map((type) => (
                  <motion.button
                    key={type}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setTripType(type)}
                    className={`relative h-10 w-28 rounded-xl font-medium text-sm transition-all duration-300 ${
                      tripType === type
                        ? "text-white bg-blue-600 shadow-lg"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tripType === type && (
                      <motion.div
                        layoutId="activeTripType"
                        className="absolute inset-0 bg-blue-600 rounded-xl"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">
                      {type === "one-way" ? "One Way" : "Round Trip"}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex border-b  border-neutral-100 w-full ">
            <div className="flex flex-col lg:flex-row items-center gap-4">
              {/* From Airport */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <PlaneTakeoff className="w-5 h-5 text-blue-600" />
                  </div>
                  <label className="text-sm font-medium text-gray-500">
                    From
                  </label>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setShowFromDropdown(!showFromDropdown);
                    setShowToDropdown(false);
                  }}
                  className="w-60 p-3 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 bg-white text-left"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {fromAirport.code}
                      </div>

                      <div className="text-gray-400 text-xs truncate">
                        {fromAirport.name}
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: showFromDropdown ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-gray-400" />
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {showFromDropdown && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute z-10 mt-2 w-50 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-96 overflow-y-auto"
                    >
                      {airports.map((airport) => (
                        <motion.button
                          key={airport.code}
                          whileHover={{ backgroundColor: "#f0f9ff" }}
                          onClick={() => {
                            setFromAirport(airport);
                            setShowFromDropdown(false);
                          }}
                          className={`w-full p-4 text-left hover:bg-blue-50 transition-colors ${
                            fromAirport.code === airport.code
                              ? "bg-blue-50 border-l-4 border-blue-600"
                              : ""
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-bold text-gray-900">
                                {airport.code}
                              </div>
                              {/* <div className="text-gray-600">{airport.city}</div> */}
                              <div className="text-gray-400 text-sm truncate">
                                {airport.name}
                              </div>
                            </div>
                            {fromAirport.code === airport.code && (
                              <div className="w-2 h-2 bg-blue-600 rounded-full" />
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Swap Button */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="lg:mt-8"
              >
                <button
                  onClick={handleSwapAirports}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl"
                >
                  <Repeat className="w-6 h-6 text-gray-500" />
                </button>
              </motion.div>
              {/* To Airport */}
              <div className="flex-1 relative">
                <div className="flex  items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <PlaneLanding className="w-5 h-5 text-blue-600" />
                  </div>
                  <label className="text-sm font-medium text-gray-500">
                    To
                  </label>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setShowToDropdown(!showToDropdown);
                    setShowFromDropdown(false);
                  }}
                  className="w-60 p-3 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 bg-white text-left"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {toAirport.code}
                      </div>
                      {/* <div className="text-gray-600 text-sm">{toAirport.city}</div> */}
                      <div className="text-gray-400 text-xs truncate">
                        {toAirport.name}
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: showToDropdown ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-gray-400" />
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {showToDropdown && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute z-10 mt-2 w-50 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-96 overflow-y-auto"
                    >
                      {airports.map((airport) => (
                        <motion.button
                          key={airport.code}
                          whileHover={{ backgroundColor: "#f0f9ff" }}
                          onClick={() => {
                            setToAirport(airport);
                            setShowToDropdown(false);
                          }}
                          className={`w-full p-4 text-left hover:bg-blue-50 transition-colors ${
                            toAirport.code === airport.code
                              ? "bg-blue-50 border-l-4 border-blue-600"
                              : ""
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-bold text-gray-900">
                                {airport.code}
                              </div>
                              <div className="text-gray-400 text-sm truncate">
                                {airport.name}
                              </div>
                            </div>
                            {toAirport.code === airport.code && (
                              <div className="w-2 h-2 bg-blue-600 rounded-full" />
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/*  Departure Date */}
              <div className="flex-1  items-center gap-3 mb-2 ml-0 mt-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <CalendarDays className="w-5 h-5 text-blue-600" />
                  </div>
                  <label className="text-sm font-medium text-gray-500">
                    Departure Date
                  </label>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCalenderShow(!showCalender)}
                  className="w-60 p-3 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 bg-white text-left flex justify-between items-center"
                >
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      {dateRange?.from?.toDateString() || "Select Date"}
                    </div>
                    <div className="text-gray-600 text-sm capitalize">
                      {/* {travelClasses.find((c) => c.id === selectedClass)?.label} */}
                    </div>
                  </div>
                  <ChevronDown className="text-gray-400" />
                </motion.button>
              </div>

              {/*  Return Date usestate(tripType) */}
              <div>
                {tripType === "one-way" && (
                  <div className="flex-1  items-center gap-3 mb-2 ml-0 mt-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <CalendarDays className="w-5 h-5 text-blue-600" />
                      </div>
                      <label className="text-sm font-medium text-gray-500">
                        Departure Date
                      </label>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setCalenderShow(!showCalender)}
                      className="w-60 p-3 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 bg-white text-left flex justify-between items-center"
                    >
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          {dateRange?.from?.toDateString() || "Select Date"}
                        </div>
                        <div className="text-gray-600 text-sm capitalize">
                          {
                            // travelClasses.find((c) => c.id === selectedClass)
                            //   ?.label
                          }
                        </div>
                      </div>
                      <ChevronDown className="text-gray-400" />
                    </motion.button>
                  </div>
                )}
              </div>
              {/* Travellers & Class */}
              <TravellersClassSelect />
            </div>
          </div>
        </div>
      )}

      {/* Mobile layout */}
      {showCalender && (
        <div className="flex flex-col  m-0 fixed inset-1 bg-black/50  items-center justify-center  p-1 z-50">
          <Calendar
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
            className="rounded-lg border shadow-sm"
          />

          <X
            onClick={() => setCalenderShow(false)}
            className="mt-4 p-1 w-8 h-8 bg-white rounded-full"
          />
        </div>
      )}
    </div>
  );
});

export default FlightSearchForm;
