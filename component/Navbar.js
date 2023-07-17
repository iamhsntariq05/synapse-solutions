import react from "react";
import { useState } from "react";
import Image from 'next/image';


import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#2C0647] p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image
          src="/Synapse Solutions Logo.png"
          alt="Synapse Solutions"
          width="150"
          height="10"
        />
      </div>
  
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow lg:text-right">
          <a
            href="/"
            className={`block mt-4 mr-10 lg:inline-block lg:mt-0 text-lg font-semibold text-[#ffffff] hover:border-b-4  hover:border-[#6a125b] ${
              router.pathname === '/' ? 'border-b-4 border-[#6a125b]' : ''
            }`}
          >
            Home
          </a>
          <a
            href="/contact"
            className={`block mt-4 mr-4 lg:inline-block lg:mt-0 text-lg font-semibold text-[#ffffff] hover:border-b-4 hover:border-[#6a125b] ${
              router.pathname === '/contact' ? 'border-b-4 border-[#6a125b]' : ''
            }`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

