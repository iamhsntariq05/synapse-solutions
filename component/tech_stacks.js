import React from "react";
import { SiJavascript, SiReact, SiCss3, SiHtml5, SiPython } from "react-icons/si";
import { FaNode, FaDatabase, FaServer, FaAws, FaDocker, FaSass, FaStripe, FaShopify} from "react-icons/fa";
import { DiGit, DiGithubBadge, DiSwift} from "react-icons/di";
import {BsBootstrapFill, BsAndroid2, BsApple} from 'react-icons/bs';
import {  SiAngularjs,  SiPhp, SiMongodb, SiTailwindcss, SiIbmcloud } from "react-icons/si";

import IconBulb from "./IconBulb";
import { useRouter } from "next/router";

function Tech() {
  const icons = [
    SiJavascript,
    SiReact,
    SiCss3,
    SiHtml5,
    SiPython,
    FaNode,
    FaDatabase,
    FaServer,
    FaAws,

  ];

  const icons2 = [
    SiAngularjs,  SiPhp, SiMongodb, DiGit, DiGithubBadge, SiTailwindcss, BsBootstrapFill, SiIbmcloud, FaDocker


  ];

  const icons3 = [
    FaSass, BsAndroid2, BsApple, DiSwift, FaStripe, FaShopify

  ]


  const router = useRouter();

    const handle_click = (e) => {
    
      router.push("/contact")


    }


  return (
    <>
    <div className="flex items-center justify-center space-x-[2rem] mt-[55px]">
      {icons.map((Icon, index) => (
        <IconBulb key={index} icon={Icon} />
      ))}
      </div>

<div className="flex items-center justify-center space-x-[2rem] mt-10">
      {icons2.map((Icon, index) => (
        <IconBulb key={index} icon={Icon} />
      ))}

      
    </div>
    <div className="flex items-center justify-center space-x-[2rem] mt-10">
      {icons3.map((Icon, index) => (
        <IconBulb key={index} icon={Icon} />
      ))}

      
    </div>


    <div className="ml-5 mt-[3rem] flex justify-center">
        <button
          type="button"
          className="bg-transparent hover:bg-[#550a4f] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mr-[6rem] rounded-full transform transition-all duration-300"
          onClick={handle_click}
          style={{ width: '200px' }}
        >
            Get In Touch
          </button>

      </div>
    </>
  );
}

export default Tech;