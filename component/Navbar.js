import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from "@bradgarropy/next-link"
// import Link from 'link'; // Import the next/link component

const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <nav className="flex items-center justify-between w-full bg-[#201341] p-6">
      <div className="flex-shrink-0">
        <Image
          src="/new logo.png"
          alt="Synapse Solutions"
          width="200"
          height="1"
        />
      </div>

      {/* Show menu button for small screens */}
      <div className="flex lg:hidden">
        <svg
          onClick={toggleMenu}
          role="presentation"
          strokeWidth="2"
          focusable="false"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          className="cursor-pointer"
        >
          <path
            d="M1 5h20M1 11h20M1 17h20"
            stroke="purple"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>

      {/* Menu for small screens */}
      {showMenu && (
        <div className="fixed top-0 left-0  w-full h-full bg-fuchsia-900 p-6 z-50">
       
          <svg
            onClick={toggleMenu}
            role="presentation"
            strokeWidth="2"
            focusable="false"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            className="cursor-pointer absolute top-6 right-6"
          >
            <path
              d="M6 6l10 10M16 6L6 16"
              stroke="white"
              strokeLinecap="round"
            ></path>
          </svg>
          
          <a
            href="/"
            className={`block mt-4 text-lg font-semibold text-[#ffffff] hover:border-b-4 border-[#000000]-[60px] ${
              router.pathname === '/' ? 'border-b-4 border-[#000000] w-[60px]' : ''
            }`}
          >
            Home
          </a>
          <a
          href="/contact"
              className={`block mt-4  text-lg font-semibold text-[#ffffff]  hover:border-b-4  border-[#000000] w-[90px] ${
                router.pathname === '/contact' ? 'border-b-4 border-[#000000] w-[90px]' : ''
              }`}
            >
              Contact Us
            </a>
        </div>
      )}

      {/* Navigation links for large screens */}
      <div className="hidden md:flex gap-6">
        <a
          href="/"
          className={`block mt-4 text-lg font-semibold text-[#ffffff] hover:border-b-4 ${
            router.pathname === '/' ? 'border-b-4 border-[#6a125b]' : ''
          }`}
        >
          Home
        </a>
        <a
          href="/contact"
          className={`block mt-4 text-lg font-semibold text-[#ffffff] hover:border-b-4 ${
            router.pathname === '/contact' ? 'border-b-4 border-[#6a125b]' : ''
          }`}
        >
          Contact Us
        </a>
      </div>

      
    </nav>
  );
};

export default Navbar;
