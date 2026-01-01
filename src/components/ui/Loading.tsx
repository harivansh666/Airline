import React, { useEffect } from "react";

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
    <div className="fixed flex flex-col  h-screen w-full  bg-amber-100 bg-opacity-70 justify-center items-center top-0 left-0 right-0 bottom-0 z-50    ">
      <div className="w-42 h-20  font-semibold rounded-full flex flex-col justify-center items-center bg-blue-100">
        <img
          src="https://res.cloudinary.com/desslvu1w/image/upload/v1767256967/Pngtree_blue_and_white_airplane_vector_21115229_ey3zur.png"
          alt="Loading animation of an airplane" // More meaningful alt text for accessibility
          loading="lazy" // Optimizes image loading
          className="w-14 animate-bounce"
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
