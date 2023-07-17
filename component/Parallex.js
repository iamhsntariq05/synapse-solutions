import { useState } from 'react';
import Image from 'next/image';
import { motion, useViewportScroll } from 'framer-motion';

const ParallaxSection = () => {
  const { scrollY } = useViewportScroll();
  const [topLeftImageOffset, setTopLeftImageOffset] = useState(0);
  const [bottomRightImageOffset, setBottomRightImageOffset] = useState(0);

  const handleScroll = () => {
    setTopLeftImageOffset(scrollY.get() * 0.4); // Adjust the parallax effect speed as needed
    setBottomRightImageOffset(scrollY.get() * -0.4); // Adjust the parallax effect speed as needed
  };

  scrollY.onChange(() => handleScroll());

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="relative overflow-hidden h-64">
        <motion.div
          style={{ translateY: topLeftImageOffset }}
          className="h-full"
        >
          <Image
            src="/test1.jpg"
            alt="Top Left Image"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
      <div>
        <p className="text-lg font-bold">Tailored Solutions to Businesses</p>
        <p className="text-gray-500">
          How we are making tailored solutions to businesses as an IT Firm named Synapes Solutions.
        </p>
      </div>
      <div>
        <p className="text-lg font-bold">No-Code Solutions</p>
        <p className="text-gray-500">
          How we are using no-code solutions to solve complex problems efficiently.
        </p>
      </div>
      <div className="relative overflow-hidden h-64">
        <motion.div
          style={{ translateY: bottomRightImageOffset }}
          className="h-full"
        >
          <Image
            src="/test2.jpg"
            alt="Bottom Right Image"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxSection;
