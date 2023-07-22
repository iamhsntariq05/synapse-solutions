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
    

  ];

  const icons2 = [
    FaAws, SiAngularjs,  SiPhp, SiMongodb, DiGit, DiGithubBadge, SiTailwindcss, BsBootstrapFill


  ];

  const icons3 = [
    SiIbmcloud, FaDocker, FaSass, BsAndroid2, BsApple, DiSwift, FaStripe, FaShopify

  ]


  const router = useRouter();

    const handle_click = (e) => {
    
      router.push("/contact")


    }


  return (
    <>
    
    <div className="flex flex-wrap grid grid-cols-4 mt-5
    grid-cols-4 mt-[50px] ml-3
    md:flex md:items-center md:justify-center md:space-x-[2rem] md:mt-10">
      {icons.map((Icon, index) => (
        <IconBulb key={index} icon={Icon} />
          ))}
    </div>


      <div className="
        flex flex-wrap grid grid-cols-4 mt-5
        grid-cols-4 mt-[2px] ml-3
      md:flex md:items-center md:justify-center md:space-x-[2rem] md:mt-10">
            {icons2.map((Icon, index) => (
              <IconBulb key={index} icon={Icon} />
            ))}  
      </div> 
    <div className="
     flex flex-wrap grid grid-cols-4 mt-5
     grid-cols-4 mt-[2px] ml-3
     md:flex md:items-center md:justify-center md:space-x-[2rem] md:mt-10">
      {icons3.map((Icon, index) => (
        <IconBulb key={index} icon={Icon} />
      ))} 

      
      </div>  
    


    <div className="ml-5 mt-[1rem] md:mt-[2rem] flex justify-center">
    <button
  type="button"
  className="bg-[#550a4f] hover:bg-transparent text-white hover:text-blue-700
    font-semibold py-2 px-4 border border-[#550a4f] hover:border-transparent mr-[1rem] hover:border-blue-500
    rounded-full transform transition-all duration-300"
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