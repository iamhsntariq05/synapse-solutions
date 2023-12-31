
import { useState } from 'react';

import React from "react";

const IconBulb = ({icon, text, onClick}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    
    <div className="relative flex-shrink-0">
  <div
    className={`w-20 h-20 rounded-full flex items-center justify-center transition duration-300 ${
      isHovered ? 'bg-[#2C0647] text-gray-300' : 'bg-gray-300 text-gray-600'
    }`}
    onMouseEnter={handleHover}
    onMouseLeave={handleHover}
    onClick={onClick}
  >
    {React.createElement(icon, { className: 'w-10 h-10' })}
  </div>
  <div className="text-center text-[1rem] mt-2 mr-5 md:mr-0">
    <span className="text-white font-bold -ml-2 md:ml-0"  >{text}</span>
  </div>
</div>
  );
};

export default IconBulb;
