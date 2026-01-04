import { ChevronDown, Users } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useStore } from "@/store/statesStore";

interface TravellersData {
  travellers: {
    adults: number;
    children: number;
    infants: number;
  };
  totalTravellers: number;
  travelClass: string;
  travelClassLabel: string;
}

function TravellersClassSelect() {
  const settravellerForm = useStore((state) => state.settravellerForm);

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedClass, setSelectedClass] = useState("economy");
  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const travelClasses = [
    { id: "economy", label: "Economy" },
    { id: "premium", label: "Premium Economy" },
    { id: "business", label: "Business" },
    { id: "first", label: "First Class" },
  ];

  const handleTravellerChange = (
    type: keyof typeof travellers,
    delta: number
  ) => {
    setTravellers((prev) => ({
      ...prev,
      [type]: Math.max(type === "adults" ? 1 : 0, prev[type] + delta),
    }));
  };

  const totalTravellers =
    travellers.adults + travellers.children + travellers.infants;

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -10 },
  };

  const handleSubmit = () => {
    const finalData: TravellersData = {
      travellers: {
        adults: travellers.adults,
        children: travellers.children,
        infants: travellers.infants,
      },
      totalTravellers,
      travelClass: selectedClass,
      travelClassLabel:
        travelClasses.find((c) => c.id === selectedClass)?.label || "",
    };
    settravellerForm(finalData);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Users className="w-5 h-5 text-blue-600" />
        </div>
        <label className="text-sm font-medium text-gray-500">
          Travellers & Class
        </label>
      </div>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowDropdown(!showDropdown)}
        className="w-full max-w-md p-2 rounded-xl border-1 border-gray-200 hover:border-blue-400 transition-all duration-300 bg-white text-left flex justify-between items-center"
        aria-label={`Select travellers and class: ${totalTravellers} travellers, ${selectedClass}`}
      >
        <div>
          <div className="text-lg font-bold text-gray-900">
            {totalTravellers} Traveller{totalTravellers !== 1 ? "s" : ""}
          </div>
          <div className="text-sm text-gray-600 capitalize">
            {travelClasses.find((c) => c.id === selectedClass)?.label}
          </div>
        </div>
        <ChevronDown
          className={`text-gray-400 transition-transform ${
            showDropdown ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        <div className="sm:absolute z-50">
          {showDropdown && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-1 w-full max-w-md border border-gray-200 bg-gray-100 rounded-2xl shadow-2xl p-7 z-50 overflow-hidden"
            >
              {/* Passengers Section */}
              <div className="space-y-6 mb-6">
                <h4 className="font-semibold text-gray-900">Passengers</h4>
                {[
                  {
                    key: "adults" as const,
                    label: "Adults",
                    desc: "12+ years",
                  },
                  {
                    key: "children" as const,
                    label: "Children",
                    desc: "2-11 years",
                  },
                  {
                    key: "infants" as const,
                    label: "Infants",
                    desc: "Under 2 years",
                  },
                ].map(({ key, label, desc }) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">{label}</div>
                      <div className="text-sm text-gray-500">{desc}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleTravellerChange(key, -1)}
                        disabled={travellers[key] <= (key === "adults" ? 1 : 0)}
                        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label={`Decrease ${label}`}
                      >
                        -
                      </motion.button>
                      <span className="w-10 text-center font-bold text-lg">
                        {travellers[key]}
                      </span>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleTravellerChange(key, 1)}
                        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        aria-label={`Increase ${label}`}
                      >
                        +
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Travel Class Section */}
              <div className="mb-6">
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
                      className={`p-4 rounded-lg border-2 font-medium transition-all ${
                        selectedClass === cls.id
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      {cls.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Done Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setShowDropdown(false);
                  handleSubmit();
                }}
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Done
              </motion.button>
            </motion.div>
          )}
        </div>
      </AnimatePresence>

      {/* Backdrop for mobile (click outside to close) */}
      {showDropdown && (
        <div className="relative">
          <div
            className="bg-black/70 z-50 lg:hidden"
            onClick={() => setShowDropdown(false)}
          />
        </div>
      )}
    </div>
  );
}

export default TravellersClassSelect;
