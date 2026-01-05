import React, { useState } from "react";
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
    <div className="relative rounded-2xl overflow-hidden">
      {mobile ? (
        <div className="w-full">
          <div className="flex justify-center items-center gap-6 p-1  bg-gray-100 border-1 rounded-t-2xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-1 p-1 rounded-sm transition-all duration-300  ${
                    activeTab === tab.id
                      ? "border-b-4   border-orange-400 text-gray-900 shadow-md scale-100"
                      : "text-gray-500 hover:text-orange-500 hover:bg-orange-100/20"
                  }`}
                >
                  <Icon size={24} />
                  <span
                    className={`${
                      activeTab === tab.id
                        ? "font-medium text-[13px]"
                        : "font-medium text-[10px]"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="flex flex-wrap justify-center border-t-2 border-l-1 border-r-1 gap-2 p-1 bg-white rounded-t-2xl pl-3 pr-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-row items-center gap-2 px-2 py-2 rounded-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? "border-b-5 border-orange-400 text-gray-900 shadow-md scale-101"
                      : "text-gray-600 hover:text-orange-600 hover:bg-orange-100/20"
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

export default React.memo(BookingTabs);
