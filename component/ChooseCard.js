import React, { useState } from "react";

function ChooseCard({ heading, text}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`w-full relative bg-[#1F2937] rounded-[28px] shadow-2xl ${
        isHovered ? "bg-opacity-50" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
     <div className="px-6 pb-[4rem] pt-[2rem]">
          <div className="text-center text-white text-2xl font-bold">{heading}</div>
          <div className="mt-4 text-white text-lg font-medium">{text}
          </div>
        </div>
    </div>
  );
}


export default ChooseCard;