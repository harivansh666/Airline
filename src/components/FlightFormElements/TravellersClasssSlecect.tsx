import { ChevronDown, Users } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function TravellersClasssSlecect() {
  const [showTravellers, setShowTravellers] = useState(false);
  const [selectedClass, setSelectedClass] = useState("economy");

  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const handleTravellerChange = (
    type: keyof typeof travellers,
    delta: number
  ) => {
    setTravellers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  const totalTravellers =
    travellers.adults + travellers.children + travellers.infants;

  const travelClasses = [
    { id: "economy", label: "Economy" },
    { id: "premium", label: "Premium Economy" },
    { id: "business", label: "Business" },
    { id: "first", label: "First Class" },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -10 },
  };

  return (
    <div className="flex-1   mt-4 p-1">
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
              <h4 className="font-semibold text-gray-900">Passengers</h4>
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
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">{label}</div>
                    <div className="text-sm text-gray-500">{description}</div>
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
              <h4 className="font-semibold text-gray-900 mb-4">Travel Class</h4>
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
  );
}

export default TravellersClasssSlecect;
