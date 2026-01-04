import {
  CalendarDays,
  ChevronDown,
  PlaneLanding,
  PlaneTakeoff,
  Repeat,
  X,
} from "lucide-react";
import React, { useState, type ChangeEvent } from "react";
import type { DateRange } from "react-day-picker";
// import { Calendar } from "./ui/calendar";
import { AnimatePresence, motion } from "framer-motion";
import TravellersClassSelect from "./FlightFormElements/TravellersClasssSlecect";
import useMobileDetection from "@/hooks/useMobileDetection";
import BookingTabs from "./FlightFormElements/BookingTabs";
import { Calendar } from "./ui/calendar";
import { useStore } from "@/store/statesStore";

interface ShowFlightGridProp {
  onSearch: () => void;
}

const FlightSearchForm = React.memo(({ onSearch }: ShowFlightGridProp) => {
  const setLoading = useStore((state) => state.setLoading);
  const isLoading = useStore((state) => state.isLoading);
  const setFetchdedFlight = useStore((state) => state.setFetchdedFlight);
  const airports = [
    { code: "IXC", name: "Chandigarh" },
    { code: "DEL", name: "New Delhi" },
    { code: "BOM", name: "Mumbai" },
    { code: "BLR", name: "Bengaluru" },
    { code: "MAA", name: "Chennai" },
    { code: "HYD", name: "Hyderabad" },
  ];

  const [fromAirport, setFromAirport] = useState({
    code: "",
    name: "",
  });
  const [toAirport, setToAirport] = useState({
    code: "",
    name: "",
  });
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  // Search/filter states
  const [fromSearch, setFromSearch] = useState("");
  const [toSearch, setToSearch] = useState("");

  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(2026, 1, 3),
  });
  const [showCalender, setCalenderShow] = useState<boolean>(false);

  const isMobile = useMobileDetection();

  const handleSwapAirports = () => {
    const temp = fromAirport;
    setFromAirport(toAirport);
    setToAirport(temp);
  };

  const [tripType, setTripType] = useState<"one-way" | "round">("round");

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -10 },
  };

  // Handle from airport input change
  const handleFromChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setFromSearch(value);

    const matchedAirport = airports.find(
      (airport) =>
        airport.code === value ||
        airport.name.toLowerCase().includes(value.toLowerCase())
    );

    if (matchedAirport && value.length >= 3) {
      setFromAirport({
        code: matchedAirport.code,
        name: matchedAirport.name,
      });
      setShowFromDropdown(false);
    } else {
      if (value.length > 0 && !showFromDropdown) {
        setShowFromDropdown(true);
      }
      setFromAirport((prev) => ({
        ...prev,
        code: value,
      }));
    }
  };

  // Handle to airport input change
  const handleToChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setToSearch(value);

    // Check if input matches an airport code exactly
    const matchedAirport = airports.find(
      (airport) =>
        airport.code === value ||
        airport.name.toLowerCase().includes(value.toLowerCase())
    );

    if (matchedAirport && value.length >= 3) {
      setToAirport({
        code: matchedAirport.code,
        name: matchedAirport.name,
      });
      setShowToDropdown(false);
    } else {
      // Show dropdown if typing
      if (value.length > 0 && !showToDropdown) {
        setShowToDropdown(true);
      }
      // Update toAirport with partial code
      setToAirport((prev) => ({
        ...prev,
        code: value,
      }));
    }
  };

  // Filter airports based on search
  const filteredFromAirports = airports.filter(
    (airport) =>
      airport.code.toLowerCase().includes(fromSearch.toLowerCase()) ||
      airport.name.toLowerCase().includes(fromSearch.toLowerCase())
  );

  const filteredToAirports = airports.filter(
    (airport) =>
      airport.code.toLowerCase().includes(toSearch.toLowerCase()) ||
      airport.name.toLowerCase().includes(toSearch.toLowerCase())
  );

  // Handle airport selection from dropdown
  const handleSelectFromAirport = (airport: { code: string; name: string }) => {
    setFromAirport(airport);
    setFromSearch(airport.code);
    setShowFromDropdown(false);
  };

  const handleSelectToAirport = (airport: { code: string; name: string }) => {
    setToAirport(airport);
    setToSearch(airport.code);
    setShowToDropdown(false);
  };

  // Format date for display
  const formatDate = (date: Date | undefined) => {
    if (!date) return "Select Date";
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const handleSubmit = () => {
    setLoading(true);
    setFetchdedFlight(false);

    setTimeout(() => {
      setLoading(false);
      onSearch();
      setFetchdedFlight(true);
      console.log("Fetching flights...");
    }, 4000);
  };

  return (
    <div className="rounded-2xl">
      {isMobile ? (
        <div className="relative scale-95 p-1">
          <BookingTabs />
          <div className="border-1 border-gray-300 rounded-2xl relative">
            <div className="w-full p-1 mx-auto flex justify-center items-center flex-col mb-2">
              <motion.div className="mb-2">
                <div className="relative bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-1.5 w-max mx-auto border border-gray-200 mt-1">
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
              <div className="w-full flex items-start flex-col gap-1">
                <div className="flex w-full justify-between items-center">
                  {/* From Airport */}
                  <div className="">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <PlaneTakeoff className="w-4 h-4 text-blue-600" />
                      </div>
                      <label className="text-sm font-medium text-gray-500">
                        From
                      </label>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter airport"
                      value={fromAirport.code}
                      onChange={handleFromChange}
                      onFocus={() => {
                        setShowFromDropdown(true);
                        setShowToDropdown(false);
                      }}
                      className="p-2 w-40 h-18 rounded-xl border-1 text-2xl bg-white font-bold text-gray-900 border-gray-200 hover:border-blue-400 transition-all duration-300 text-left"
                    />

                    <AnimatePresence>
                      <div className="relative">
                        {showFromDropdown && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-96 overflow-y-auto"
                          >
                            {filteredFromAirports.map((airport) => (
                              <motion.button
                                key={airport.code}
                                whileHover={{ backgroundColor: "#f0f9ff" }}
                                onClick={() => handleSelectFromAirport(airport)}
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
                      </div>
                    </AnimatePresence>
                  </div>
                  {/* Swap Button */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="lg:mt-8 mt-9 p-2"
                  >
                    <button
                      onClick={handleSwapAirports}
                      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl"
                    >
                      <Repeat className="w-4 h-4 text-gray-500" />
                    </button>
                  </motion.div>

                  {/* To Airport */}
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <PlaneLanding className="w-4 h-4 text-blue-600" />
                      </div>
                      <label className="text-sm font-medium text-gray-500">
                        To
                      </label>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter airport"
                      value={toAirport.code}
                      onChange={handleToChange}
                      onFocus={() => {
                        setShowToDropdown(true);
                        setShowFromDropdown(false);
                      }}
                      className="p-2 w-38 h-18 rounded-xl border-1 text-2xl font-bold text-gray-900 border-gray-200 hover:border-blue-400 bg-white transition-all duration-300 text-left"
                    />

                    <AnimatePresence>
                      {showToDropdown && (
                        <div className="">
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-96 overflow-y-auto"
                          >
                            {filteredToAirports.map((airport) => (
                              <motion.button
                                key={airport.code}
                                whileHover={{ backgroundColor: "#f0f9ff" }}
                                onClick={() => handleSelectToAirport(airport)}
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
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* ====================== */}

                {/*  Departure Date */}
                <div className="flex flex-col w-full pl-1 pr-1">
                  <div className="flex-1 items-center gap-4 mb-2 ml-0 mt-4">
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
                      className="w-full p-3 rounded-xl border-1 border-gray-200 hover:border-blue-400 transition-all duration-300 bg-white text-left flex justify-between items-center"
                    >
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          {formatDate(dateRange?.from)}
                        </div>
                      </div>
                      <ChevronDown className="text-gray-400" />
                    </motion.button>
                  </div>
                  {/*  Return Date */}
                  <div>
                    {tripType === "round" && (
                      <div className="flex-1 items-center gap-3 mb-2 ml-0 mt-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <CalendarDays className="w-5 h-5 text-blue-600" />
                          </div>
                          <label className="text-sm font-medium text-gray-500">
                            Return Date
                          </label>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setCalenderShow(!showCalender)}
                          className="w-full p-3 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 bg-white text-left flex justify-between items-center"
                        >
                          <div>
                            <div className="text-lg font-bold text-gray-900">
                              {formatDate(dateRange?.to) ||
                                "Select Return Date"}
                            </div>
                          </div>
                          <ChevronDown className="text-gray-400" />
                        </motion.button>
                      </div>
                    )}
                  </div>
                  <TravellersClassSelect />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full h-14 flex justify-center items-center bg-gradient-to-r from-blue-600 to-blue-700 border-2 text-lg text-white tracking-wide rounded-lg"
                >
                  {isLoading ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-neutral-tertiary animate-spin fill-brand"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Search"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full  ">
          <BookingTabs />
          <div className="border-1 w-full p-4 rounded-2xl ">
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
            <div className="flex border-b border-neutral-100 w-full">
              <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                {/* From Airport */}
                <div className="flex-1 justify-center relative">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <PlaneTakeoff className="w-5 h-5 text-blue-600" />
                    </div>
                    <label className="text-sm font-medium text-gray-500">
                      From
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter airport"
                    value={fromAirport.code}
                    onChange={handleFromChange}
                    onFocus={() => {
                      setShowFromDropdown(true);
                      setShowToDropdown(false);
                    }}
                    className="w-60 p-4 rounded-xl border-1 border-gray-200 text-2xl font-bold text-gray-900 hover:border-blue-400 transition-all duration-300 bg-white text-left"
                  />

                  <AnimatePresence>
                    {showFromDropdown && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute z-10 mt-2 w-60 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-96 overflow-y-auto"
                      >
                        {filteredFromAirports.map((airport) => (
                          <motion.button
                            key={airport.code}
                            whileHover={{ backgroundColor: "#f0f9ff" }}
                            onClick={() => handleSelectFromAirport(airport)}
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
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <PlaneLanding className="w-5 h-5 text-blue-600" />
                    </div>
                    <label className="text-sm font-medium text-gray-500">
                      To
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter airport"
                    value={toAirport.code}
                    onChange={handleToChange}
                    onFocus={() => {
                      setShowToDropdown(true);
                      setShowFromDropdown(false);
                    }}
                    className="w-60 p-4 text-2xl font-bold text-gray-900 rounded-xl border-1 border-gray-200 hover:border-blue-400 transition-all duration-300 bg-white text-left"
                  />

                  <AnimatePresence>
                    {showToDropdown && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute z-10 mt-2 w-60 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-96 overflow-y-auto"
                      >
                        {filteredToAirports.map((airport) => (
                          <motion.button
                            key={airport.code}
                            whileHover={{ backgroundColor: "#f0f9ff" }}
                            onClick={() => handleSelectToAirport(airport)}
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
                <div className="flex-1 items-center gap-3 mb-2 ml-0 mt-4">
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
                    className="p-3 rounded-xl border-1 border-gray-200 hover:border-blue-400 transition-all duration-300 bg-white text-left flex justify-between items-center"
                  >
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        {formatDate(dateRange?.from)}
                      </div>
                    </div>
                    <ChevronDown className="text-gray-400" />
                  </motion.button>
                </div>

                {/*  Return Date */}
                <div className="">
                  {tripType === "round" && (
                    <div className="flex-1 items-center gap-3 mb-2  ">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <CalendarDays className="w-5 h-5 text-blue-600" />
                        </div>
                        <label className="text-sm font-medium text-gray-500">
                          Return Date
                        </label>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setCalenderShow(!showCalender)}
                        className="p-3 rounded-xl border-1 border-gray-200 hover:border-blue-400 transition-all duration-300 bg-white text-left flex justify-between items-center"
                      >
                        <div>
                          <div className="text-lg font-bold text-gray-900">
                            {formatDate(dateRange?.to) || "Select Return Date"}
                          </div>
                        </div>
                        <ChevronDown className="text-gray-400" />
                      </motion.button>
                    </div>
                  )}
                </div>
                {/* Travellers & Class */}
                <div className="">
                  <TravellersClassSelect />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-40 h-14 flex justify-center items-center bg-gradient-to-r from-blue-600 to-blue-700 border-2 text-lg text-white tracking-wide rounded-lg"
                >
                  {isLoading ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-neutral-tertiary animate-spin fill-brand"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Search"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Calendar Modal */}
      {showCalender && (
        <div className=" fixed inset-0 bg-black/50 flex items-center  flex-col justify-center z-50 p-4 ">
          <div className="rounded-xl shadow-2xl relative ">
            {tripType === "one-way" ? (
              <Calendar
                mode="single"
                defaultMonth={dateRange?.from}
                selected={dateRange?.from}
                // onSelect={setDateRange(dateRange?.from)}
                numberOfMonths={isMobile ? 1 : 1}
                className="rounded-lg border shadow-sm p-4"
              />
            ) : (
              <Calendar
                mode="range"
                defaultMonth={dateRange?.from}
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={isMobile ? 1 : 2}
                className="rounded-lg border shadow-sm p-4"
              />
            )}

            <div className="w-full flex justify-center items-center mt-1">
              <button
                onClick={() => setCalenderShow(false)}
                className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default FlightSearchForm;
