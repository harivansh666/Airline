import React, { useEffect } from "react";

import planePng from "../../assets/images/planeLoder.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Loading: React.FC = () => {
  useEffect(() => {
    // Disable scroll when the loader is visible
    document.body.style.overflow = "hidden";

    // Cleanup: Enable scroll after loader is hidden
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed flex flex-col  h-screen w-full  justify-center items-center top-0 left-0 right-0 bottom-0 z-50  bg-transparent">
      <div className="w-42 h-20  font-custome-regular rounded-full flex flex-col justify-center items-center ">
        <LazyLoadImage
          src={planePng}
          alt="Loading animation of an airplane"
          className="w-18 animate-bounce"
        />
        <div className="flex justify-center items-center text-nowrap ">
          <p className="">Loading</p>
          <p className="animate-pulse">.</p>
          <p className="animate-pulse">.</p>
          <p className="animate-pulse">.</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
