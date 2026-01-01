import {
  CalendarDays,
  ChevronDown,
  PlaneLanding,
  PlaneTakeoff,
  Repeat,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Calendar } from "./ui/calendar";
import { AnimatePresence, motion } from "framer-motion";

function FlightSearchForm() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });
  console.log(dateRange);
  const [showCalender, setCalenderShow] = useState<boolean>(false);
  const [showTravellers, setShowTravellers] = useState(false);

  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const [selectedClass, setSelectedClass] = useState("economy");

  const handleSwapAirports = () => {
    const temp = fromAirport;
    setFromAirport(toAirport);
    setToAirport(temp);
  };

  const handleTravellerChange = (
    type: keyof typeof travellers,
    delta: number
  ) => {
    setTravellers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

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
  const [isMobile, setisMobile] = useState(true);
  const [fromAirport, setFromAirport] = useState(airports[0]);
  const [toAirport, setToAirport] = useState(airports[1]);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const totalTravellers =
    travellers.adults + travellers.children + travellers.infants;

  const travelClasses = [
    { id: "economy", label: "Economy" },
    { id: "premium", label: "Premium Economy" },
    { id: "business", label: "Business" },
    { id: "first", label: "First Class" },
  ];

  return (
    <div className="flex flex-row max-w-7xl justify-center border-1 border-gray-300 rounded-2xl p-4 bg-amber-400 ">
      {isMobile ? (
        <div className="w-full flex flex-col">
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
                      {travelClasses.find((c) => c.id === selectedClass)?.label}
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
                            travelClasses.find((c) => c.id === selectedClass)
                              ?.label
                          }
                        </div>
                      </div>
                      <ChevronDown className="text-gray-400" />
                    </motion.button>
                  </div>
                )}
              </div>

              <div className="flex-1   mt-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <label className="text-sm font-medium text-gray-500">
                    Travellers & Class
                  </label>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowTravellers(!showTravellers)}
                  className="w-60 p-3 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 bg-white text-left flex justify-between items-center"
                >
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      {totalTravellers} Traveller
                      {totalTravellers !== 1 ? "s" : ""}
                    </div>
                    <div className="text-gray-600 text-sm capitalize">
                      {travelClasses.find((c) => c.id === selectedClass)?.label}
                    </div>
                  </div>
                  <ChevronDown className="text-gray-400" />
                </motion.button>

                <AnimatePresence>
                  {showTravellers && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute z-10 mt-2 w-84 max-w-md bg-white border border-gray-200 rounded-2xl shadow-2xl p-6"
                    >
                      {/* Traveller Count */}
                      <div className="space-y-4 mb-6">
                        <h4 className="font-semibold text-gray-900">
                          Passengers
                        </h4>
                        {[
                          {
                            key: "adults" as const,
                            label: "Adults",
                            description: "12+ years",
                          },
                          {
                            key: "children" as const,
                            label: "Children",
                            description: "2-11 years",
                          },
                          {
                            key: "infants" as const,
                            label: "Infants",
                            description: "Under 2 years",
                          },
                        ].map(({ key, label, description }) => (
                          <div
                            key={key}
                            className="flex items-center justify-between"
                          >
                            <div>
                              <div className="font-medium text-gray-900">
                                {label}
                              </div>
                              <div className="text-sm text-gray-500">
                                {description}
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleTravellerChange(key, -1)}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                                disabled={travellers[key] === 0}
                              >
                                -
                              </motion.button>
                              <span className="w-8 text-center font-bold">
                                {travellers[key]}
                              </span>
                              <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleTravellerChange(key, 1)}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                              >
                                +
                              </motion.button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Class Selection */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Travel Class
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {travelClasses.map((cls) => (
                            <motion.button
                              key={cls.id}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setSelectedClass(cls.id)}
                              className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                                selectedClass === cls.id
                                  ? "border-blue-500 bg-blue-50 text-blue-600"
                                  : "border-gray-200 hover:border-blue-300"
                              }`}
                            >
                              {cls.label}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => setShowTravellers(!showTravellers)}
                        className="flex justify-center items-center font-medium text-blue-600 p-4 h-10 w-full  border-2 border-blue-600  rounded-md mt-6"
                      >
                        Close
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Travellers & Class */}
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
}

export default FlightSearchForm;
