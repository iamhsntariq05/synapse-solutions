import React, { useState } from "react";

function Card({ service, text, img }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`max-w-xs sm:max-w-sm rounded-lg shadow bg-gray-800 border-gray-700 p-3 ${
        isHovered ? "bg-opacity-50" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="rounded-t-lg w-full h-36 sm:h-40 object-cover"
        src={img}
        alt=""
      />

      <div className="p-3">
        <h5 className="mb-2 text-lg sm:text-xl font-bold tracking-tight text-white">
          {service}
        </h5>
        <p className="mb-3 text-sm sm:text-base font-normal text-gray-400">
          {text}
        </p>
      </div>
    </div>
  );
}


export default Card;