import type React from "react";

const LodingTwo: React.FC = () => {
  return (
    <div className=" flex flex-col  h-60 w-90  justify-center items-center top-0 left-0 right-0 bottom-0 z-50  bg-rose-300 rounded-2xl">
      <div className="w-42 h-20  font-custome-regular rounded-full flex flex-col justify-center items-center ">
        <img
          src="https://res.cloudinary.com/desslvu1w/image/upload/v1767256967/lodingPlane.png"
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

export default LodingTwo;
