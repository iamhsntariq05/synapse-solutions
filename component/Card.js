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
      className={`max-w-sm rounded-lg shadow bg-gray-800 border-gray-700 ml-6 p-5 ${
        isHovered ? "bg-opacity-50" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="rounded-t-lg"
        src={img}
        alt=""
        width="100"
        height="100"
      />

      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {service}
        </h5>
        <p className="mb-3 font-normal text-gray-400">{text}</p>
      </div>
    </div>
  );
}

export default Card;
