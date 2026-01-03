import { useState } from "react";
import { Plane, Hotel, Recycle } from "lucide-react";
import useMobileDetection from "@/hooks/useMobileDetection";

const BookingTabs = () => {
  const [activeTab, setActiveTab] = useState("Flights");

  const mobile = useMobileDetection();
  const tabs = [
    { id: "Flights", label: "Flights", icon: Plane },
    { id: "Flights + Hotels", label: "Flights + Hotels", icon: Hotel },
    { id: "Hotels", label: "Hotels", icon: Hotel },
    {
      id: "Multicity/Stopover",
      label: "Multicity/Stopover",
      icon: Recycle,
    },
  ];

  return (
    <div className="relative rounded-2xl p-1  overflow-hidden">
      {mobile ? (
        <div className="w-full">
          <div className="flex justify-center items-center gap-4 p-1  bg-gray-100 border-1 rounded-t-2xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-2 p-1 rounded-sm transition-all duration-300  ${
                    activeTab === tab.id
                      ? "border-b-4 border-blue-700 text-blue-700 shadow-md scale-101"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-100"
                  }`}
                >
                  <Icon size={24} />
                  <span className="font-medium text-sm ">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-gray-100 rounded-t-2xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-row items-center gap-2 px-2 py-2 rounded-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? "border-b-4 border-blue-700 text-blue-700 shadow-md scale-101"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-100"
                  }`}
                >
                  <Icon size={30} />
                  <span className="font-medium text-sm">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingTabs;
