import { Star, StarHalf } from "lucide-react";
import React from "react";

const RatingBar = React.memo(() => {
  return (
    <div className="w-full  bg-white py-8 sm:py-4 px-4  flex justify-center">
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-lg text-gray-700">
        <span className="">Our customers say</span>

        <span className="font-semibold text-black">Excellent</span>

        <div className="flex items-center">
          {[...Array(4)].map((_, i) => (
            <Star key={i} size={16} className="fill-green-600 text-green-600" />
          ))}
          <StarHalf
            size={16}
            className="fill-green-600 text-green-600 opacity-50"
          />
        </div>

        <span className="text-gray-600">
          4.7 out of 5 based on{" "}
          <span className="font-medium">7,040 reviews</span>
        </span>

      
      </div>
    </div>
  );
});

export default RatingBar;
