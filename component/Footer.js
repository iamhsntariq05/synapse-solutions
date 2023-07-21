import react from "react"
import { FaTwitter } from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";


import { useRouter } from 'next/router';

import { useRef } from 'react';
import Link from 'next/link';


 


function Footer() {

  

  

    const router = useRouter();

    const handleClick = (e) => {
      // Navigates to the desired URL when the button is clicked
      if (e === "linkedin")
      window.open('https://www.linkedin.com/company/synapse-solutions-co/', '_blank');
      if (e === "insta")
      window.open('https://www.instagram.com/synapse.solutions.co/', '_blank');
      if(e=== "facebook")
      window.open('https://www.facebook.com/synapse.solutions.co', '_blank');
      if(e === "mail")
      window.open('mailto:info@synapsesolutions.co', '_blank');
    };


    const waveLayer4Ref = useRef(null);
  
  // Function to handle the scroll to the target element
  const handleScrollToWaveLayer4 = () => {
    const waveLayer4Element = document.querySelector('.wave-layers4');
    waveLayer4Element.scrollIntoView({ behavior: 'smooth' });

  };

  const handleScrollToWaveLayer2 = () => {
    const waveLayer4Element = document.querySelector('.wave-layers2');
    waveLayer4Element.scrollIntoView({ behavior: 'smooth' });

  };

return (

   
<>
<footer className="relative bg-[#2C0647] pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-[#EEEEEE]">
          Synapse Solutions
        </h4>
        <h5 className="text-lg mt-5 mb-2 text-[#EEEEEE]">
          All your IT solutions at one place.
        </h5>
        <div className="mt-8 lg:mb-0 mb-6 flex justify-center lg:justify-start">
  <button
    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
    type="button"
    onClick={() => handleClick("mail")}
  >
    <AiOutlineMail style={{ color: 'black' }}/>
  </button>
  <button
    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
    type="button"
    onClick={() => handleClick("facebook")}
  >
   <FaFacebookF style={{ color: 'black' }}/>
  </button>
  <button
    className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
    type="button"
    onClick={()=> handleClick("insta")}
  >
    <BsInstagram style={{ color: 'black' }}/>
  </button>
  <button
    className="bg-white text-blueGray-800
     shadow-lg font-normal h-10 w-10 flex items-center justify-center 
     rounded-full outline-none focus:outline-none "
    type="button"
    onClick={() => handleClick("linkedin")}
  >
    <FaLinkedinIn style={{ color: 'black' }}/>
  </button>

  
</div>

      </div>
      
      <div className="w-full lg:w-6/12 px-4 text-[#EEEEEE]">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
              Our Services
            </span>
            <ul className="list-unstyled">
  <li>
    <a
      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm cursor-pointer"
      onClick={handleScrollToWaveLayer4}
    >
      Web & App Development
    </a>
  </li>
  <li>
    <a
      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm cursor-pointer"
      onClick={handleScrollToWaveLayer4}
    >
      IT Consultancy
    </a>
  </li>
  <li>
    <a
      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm cursor-pointer"
      onClick={handleScrollToWaveLayer4}
    >
      CRM Integration
    </a>
  </li>
  <li>
    <a
      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm cursor-pointer"
      onClick={handleScrollToWaveLayer4}
    >
      Digital Transformation
    </a>
  </li>
</ul>

          </div>


          <div className="w-full lg:w-4/12 px-4 md:w-2/3 ">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 mt-4 sm:mt-0">
              Useful Links
            </span>
            <ul className="list-unstyled">
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="/contact"
                  >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm cursor-pointer"
                  onClick={handleScrollToWaveLayer2}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm cursor-pointer"
                  onClick={handleScrollToWaveLayer2}
                >
                  Services
                </a>
              </li>
            </ul>
          </div>









        </div>
      </div>



















    </div>
    <hr className="my-6 border-blueGray-300" />
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-[#EEEEEE] font-semibold py-1">
        ©2023 Synapse Solutions Co• All Rights Reserved
        </div>
      </div>
    </div>
  </div>
</footer>
</>
)}

export default Footer;