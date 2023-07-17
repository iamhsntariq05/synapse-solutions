import react from "react"
import { FaTwitter } from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";


import { useRouter } from 'next/router';


 


function Footer() {

  const scrollToSection = (e) => {
  
    const targetSection = document.getElementsByClassName('wave-layers4');
    targetSection.scrollIntoView({ behavior: "smooth" });
  };

    const router = useRouter();

    const handleClick = (e) => {
      // Navigates to the desired URL when the button is clicked
      if (e === "linkedin")
      router.push('https://www.linkedin.com/company/synapse-solutions-co');
      if (e === "insta")
      router.push('https://www.instagram.com/synapse.solutions.co/');
      if(e=== "facebook")
      router.push("https://www.facebook.com/synapse.solutions.co");
      if(e === "mail")
      router.push("mailto:info@synapsesolutions.co");
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
        <div className="mt-8 lg:mb-0 mb-6 flex items-center justify-start">
  <button
    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
    type="button"
    onClick={() => handleClick("mail")}
  >
    <AiOutlineMail/>
  </button>
  <button
    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
    type="button"
    onClick={() => handleClick("facebook")}
  >
   <FaFacebookF />
  </button>
  <button
    className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
    type="button"
    onClick={()=> handleClick("insta")}
  >
    <BsInstagram />
  </button>
  <button
    className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
    type="button"
    onClick={() => handleClick("linkedin")}
  >
    <FaLinkedinIn />
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
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  onClick={scrollToSection}
                >
                  Web & App Development
                </a>
              </li>
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="https://blog.creative-tim.com?ref=njs-profile"
                >
                  IT Consultancy
                </a>
              </li>
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="https://www.github.com/creativetimofficial?ref=njs-profile"
                >
                  CRM Integration
                </a>
              </li>
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                >
                  Digital Transformation
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
              Links
            </span>
            <ul className="list-unstyled">
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="https://creative-tim.com/terms?ref=njs-profile"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="https://creative-tim.com/privacy?ref=njs-profile"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="https://creative-tim.com/contact-us?ref=njs-profile"
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